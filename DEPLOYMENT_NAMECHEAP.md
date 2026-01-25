# Deployment Guide for Namecheap

This guide is specific to configuring your domain `juanjosemogat.art` in Namecheap.

## Option 1: Subdomain Setup (RECOMMENDED)

### Use: `v2.juanjosemogat.art`

### Step-by-Step:

#### 1. Deploy to Vercel First

1. Push your code to GitHub
2. Deploy to Vercel (see main DEPLOYMENT.md)
3. In Vercel dashboard → Your Project → Settings → Domains
4. Add domain: `v2.juanjosemogat.art`
5. Vercel will show you DNS instructions (note the CNAME value)

#### 2. Configure DNS in Namecheap

1. **Log in to Namecheap:**
   - Go to [namecheap.com](https://www.namecheap.com)
   - Sign in to your account

2. **Navigate to Domain List:**
   - Click "Domain List" from the left sidebar
   - Find `juanjosemogat.art` and click "Manage"

3. **Go to Advanced DNS:**
   - Click on the "Advanced DNS" tab
   - Scroll down to "Host Records" section

4. **Add CNAME Record for Subdomain:**
   - Click "Add New Record"
   - Select **Type**: `CNAME Record`
   - **Host**: `v2` (just the subdomain name, not the full domain)
   - **Value**: `cname.vercel-dns.com` (or the value Vercel provides)
   - **TTL**: `Automatic` (or `30 min`)
   - Click the checkmark to save

5. **Verify your records look like:**
   ```
   Type    Host    Value                    TTL
   CNAME   v2      cname.vercel-dns.com     Automatic
   ```

6. **Wait for DNS propagation:**
   - Usually takes 5-30 minutes
   - Can take up to 48 hours (rare)
   - Check status: https://dnschecker.org

#### 3. Verify Setup

After DNS propagates:
- Visit `https://v2.juanjosemogat.art` - should show your new site
- Visit `https://www.juanjosemogat.art` - should show your old site

---

## Option 2: Path Setup (`/v2`)

### Use: `www.juanjosemogat.art/v2`

**Note:** This requires a reverse proxy. If your old site is hosted elsewhere, you'll need to set up routing.

### If using Vercel with basePath:

1. **Set environment variable in Vercel:**
   - Project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_BASE_PATH` = `/v2`

2. **Deploy**

3. **For routing `/v2` to Vercel:**
   - You'll need a reverse proxy or Cloudflare Workers
   - See DEPLOYMENT_SUBDOMAIN.md for Nginx/Cloudflare setup

---

## Namecheap DNS Record Types Explained

### CNAME Record (for subdomain):
- **Type**: CNAME Record
- **Host**: `v2` (subdomain only)
- **Value**: `cname.vercel-dns.com`
- **TTL**: Automatic

### A Record (if Vercel provides IPs):
- **Type**: A Record
- **Host**: `v2`
- **Value**: IP address (e.g., `76.76.21.21`)
- **TTL**: Automatic

**Note:** Vercel usually provides CNAME, which is preferred.

---

## Common Namecheap Issues & Solutions

### Issue: "Invalid hostname"
- **Solution**: Make sure "Host" is just `v2`, not `v2.juanjosemogat.art`

### Issue: DNS not propagating
- **Solution**: 
  - Wait 30-60 minutes
  - Clear your browser cache
  - Try different DNS servers (8.8.8.8, 1.1.1.1)
  - Check: https://dnschecker.org

### Issue: SSL certificate not working
- **Solution**: 
  - Vercel automatically provides SSL
  - Wait for DNS to fully propagate first
  - Can take up to 24 hours for SSL to activate

### Issue: Can't find Advanced DNS tab
- **Solution**: 
  - Make sure you're on the domain management page
  - Click "Manage" next to your domain
  - Look for "Advanced DNS" tab (not "Nameservers")

---

## Current DNS Setup Check

To see your current DNS records in Namecheap:
1. Domain List → Manage → Advanced DNS
2. Look at "Host Records" section
3. You should see records for:
   - `www` → pointing to your old site
   - `@` (root) → pointing to your old site
   - `v2` → pointing to Vercel (after you add it)

---

## Testing DNS Propagation

Use these tools to check if DNS has propagated:
- https://dnschecker.org
- https://www.whatsmydns.net
- Command line: `nslookup v2.juanjosemogat.art`

---

## Quick Reference: Namecheap Steps

1. ✅ Log in to Namecheap
2. ✅ Domain List → Manage `juanjosemogat.art`
3. ✅ Advanced DNS tab
4. ✅ Add New Record
5. ✅ Type: CNAME, Host: `v2`, Value: `cname.vercel-dns.com`
6. ✅ Save
7. ✅ Wait 5-30 minutes
8. ✅ Test: `https://v2.juanjosemogat.art`

---

## Need Help?

- Namecheap Support: https://www.namecheap.com/support/
- Vercel DNS Docs: https://vercel.com/docs/concepts/projects/domains
- DNS Checker: https://dnschecker.org
