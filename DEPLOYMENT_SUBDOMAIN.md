# Deployment Options: Subdomain vs Path

## Option 1: Subdomain (RECOMMENDED - Easiest)

### Use: `v2.juanjosemogat.art` or `new.juanjosemogat.art`

**Advantages:**
- ✅ No code changes needed
- ✅ No reverse proxy required
- ✅ Clean separation from old site
- ✅ Easy to switch later

**Steps:**

1. **Deploy to Vercel/Netlify** (follow main DEPLOYMENT.md)

2. **Add subdomain in your hosting platform:**
   - **Vercel**: Settings → Domains → Add `v2.juanjosemogat.art`
   - **Netlify**: Domain settings → Add custom domain → `v2.juanjosemogat.art`

3. **Configure DNS:**
   Add a CNAME record in your DNS provider:
   ```
   Type: CNAME
   Name: v2
   Value: cname.vercel-dns.com (or your hosting provider's URL)
   TTL: Auto
   ```

4. **Wait for DNS propagation** (5-30 minutes usually)

**Result:** 
- Old site: `www.juanjosemogat.art` → existing website
- New site: `v2.juanjosemogat.art` → your Next.js app

---

## Option 2: Path `/v2` (More Complex)

### Use: `www.juanjosemogat.art/v2`

**Requirements:**
- Reverse proxy (Nginx, Apache, or Cloudflare Workers)
- Access to server configuration
- More complex setup

**Steps:**

### A. Configure Next.js for basePath

1. **Set environment variable:**
   ```bash
   # In Vercel/Netlify, add:
   NEXT_PUBLIC_BASE_PATH=/v2
   ```

2. **Or update next.config.ts directly:**
   ```typescript
   basePath: '/v2',
   ```

3. **Rebuild and redeploy**

### B. Set up Reverse Proxy

If your old site is on the same server, you need a reverse proxy:

#### Using Nginx:

```nginx
server {
    listen 80;
    server_name www.juanjosemogat.art;

    # Old site (root)
    location / {
        proxy_pass http://old-site-server:port;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # New Next.js site at /v2
    location /v2 {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Rewrite paths to remove /v2 for the Next.js app
        rewrite ^/v2/?(.*) /$1 break;
    }

    # Static assets from Next.js
    location /v2/_next {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
    }
}
```

#### Using Cloudflare Workers (if using Cloudflare):

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // Route /v2 to new Next.js site
  if (url.pathname.startsWith('/v2')) {
    url.hostname = 'your-nextjs-site.vercel.app'
    return fetch(url, request)
  }
  
  // Everything else goes to old site
  url.hostname = 'old-site-server.com'
  return fetch(url, request)
}
```

### C. Deploy Next.js with basePath

1. Deploy to Vercel/Netlify
2. Set environment variable: `NEXT_PUBLIC_BASE_PATH=/v2`
3. Configure reverse proxy as above

---

## Recommendation

**Use Option 1 (Subdomain)** because:
- Much simpler setup
- No reverse proxy needed
- Clean separation
- Easy to test both sites independently
- Can easily switch the main domain later

**Use Option 2 (Path)** only if:
- You have specific requirements for the path structure
- You have server access and can configure reverse proxy
- You want everything under one domain

---

## Testing

### For Subdomain:
- Old: `https://www.juanjosemogat.art`
- New: `https://v2.juanjosemogat.art`

### For Path:
- Old: `https://www.juanjosemogat.art`
- New: `https://www.juanjosemogat.art/v2`

---

## Switching Later

When ready to make the new site the main one:

**Subdomain approach:**
1. Point `www.juanjosemogat.art` to the new site
2. Point old site to `old.juanjosemogat.art` or archive it

**Path approach:**
1. Remove basePath from Next.js config
2. Update reverse proxy to route `/` to new site
3. Move old site to `/old` or archive it
