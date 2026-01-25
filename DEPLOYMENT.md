# Deployment Guide

This guide covers how to deploy your Next.js website to your custom domain.

## Option 1: Vercel (Recommended - Easiest for Next.js)

Vercel is made by the creators of Next.js and offers the best integration.

### Steps:

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "Add New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Connect your custom domain:**
   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Add your domain (e.g., `yourdomain.com`)
   - Follow Vercel's DNS instructions:
     - Add a CNAME record pointing to `cname.vercel-dns.com`
     - Or add an A record with Vercel's IP addresses
   - Wait for DNS propagation (can take up to 48 hours, usually much faster)

### Vercel Advantages:
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Automatic deployments on git push
- ✅ Built-in CDN
- ✅ Optimized for Next.js

---

## Option 2: Netlify

### Steps:

1. **Push code to Git repository**

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Connect custom domain:**
   - Go to "Domain settings"
   - Add your custom domain
   - Follow DNS configuration instructions

---

## Option 3: Self-Hosted (VPS/Server)

If you have your own server or VPS:

### Steps:

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Install PM2 (process manager):**
   ```bash
   npm install -g pm2
   ```

3. **Start the production server:**
   ```bash
   pm2 start npm --name "mogat" -- start
   pm2 save
   pm2 startup
   ```

4. **Set up Nginx reverse proxy:**
   Create `/etc/nginx/sites-available/mogat`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Enable SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

## Option 4: Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

Then update `next.config.ts` to enable standalone output:
```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
  // ... rest of config
};
```

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All environment variables are set (if any)
- [ ] Build runs successfully: `npm run build`
- [ ] No console errors in production build
- [ ] All images/assets are in the `public` folder
- [ ] Test the production build locally: `npm run build && npm start`

---

## DNS Configuration

For your custom domain, you'll need to configure DNS records:

### For Vercel/Netlify:
- **CNAME record**: Point `www` subdomain to their provided URL
- **A record** or **CNAME**: Point root domain (`@`) to their IP/URL

### Example DNS records:
```
Type    Name    Value
A       @       76.76.21.21 (Vercel IP)
CNAME   www     cname.vercel-dns.com
```

---

## Environment Variables

If you have any environment variables, add them in your hosting platform's dashboard:
- Vercel: Settings → Environment Variables
- Netlify: Site settings → Environment variables

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Netlify Docs: https://docs.netlify.com
