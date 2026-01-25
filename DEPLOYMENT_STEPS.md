# Quick Deployment Steps - Subdomain Option

## 🚀 Deploy to v2.juanjosemogat.art

### Step 1: Prepare Your Code

1. **Test the build locally:**
   ```bash
   npm run build
   npm start
   ```
   Visit `http://localhost:3000` to verify everything works.

2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment to v2 subdomain"
   git push origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
   - Sign up/login with your GitHub account

2. **Create New Project:**
   - Click "Add New Project"
   - Import your `mogat` repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Wait for deployment** (usually 2-3 minutes)
   - Your site will be live at: `your-project.vercel.app`

### Step 3: Add Custom Domain in Vercel

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" tab
   - Click "Domains" in the left sidebar

2. **Add Domain:**
   - Enter: `v2.juanjosemogat.art`
   - Click "Add"
   - Vercel will show DNS instructions
   - **Note the CNAME value** (usually `cname.vercel-dns.com`)

### Step 4: Configure DNS in Namecheap

1. **Log in to Namecheap:**
   - Go to [namecheap.com](https://www.namecheap.com)
   - Sign in

2. **Navigate to Domain:**
   - Click "Domain List" (left sidebar)
   - Find `juanjosemogat.art`
   - Click "Manage"

3. **Go to Advanced DNS:**
   - Click "Advanced DNS" tab
   - Scroll to "Host Records" section

4. **Add CNAME Record:**
   - Click "Add New Record" button
   - **Type**: Select `CNAME Record`
   - **Host**: Enter `v2` (just the subdomain, NOT `v2.juanjosemogat.art`)
   - **Value**: Enter `cname.vercel-dns.com` (or what Vercel provided)
   - **TTL**: Select `Automatic`
   - Click the checkmark ✓ to save

5. **Verify the record:**
   You should see a new row:
   ```
   Type: CNAME Record
   Host: v2
   Value: cname.vercel-dns.com
   TTL: Automatic
   ```

### Step 5: Wait and Verify

1. **Wait for DNS propagation:**
   - Usually 5-30 minutes
   - Can check status: https://dnschecker.org
   - Search for: `v2.juanjosemogat.art`

2. **Test your site:**
   - Visit: `https://v2.juanjosemogat.art`
   - Should show your new 3D website!

3. **Verify old site still works:**
   - Visit: `https://www.juanjosemogat.art`
   - Should show your existing website

### Step 6: Automatic Deployments (Optional)

Vercel automatically deploys when you push to GitHub:
- Every `git push` = new deployment
- You can see deployment history in Vercel dashboard
- Each deployment gets a unique preview URL

---

## ✅ Checklist

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Domain `v2.juanjosemogat.art` added in Vercel
- [ ] CNAME record added in Namecheap
- [ ] DNS propagated (checked on dnschecker.org)
- [ ] Site accessible at `https://v2.juanjosemogat.art`
- [ ] Old site still works at `https://www.juanjosemogat.art`

---

## 🆘 Troubleshooting

### DNS not working?
- Wait 30-60 minutes
- Check: https://dnschecker.org
- Verify Host is just `v2` (not full domain)
- Clear browser cache

### SSL certificate issues?
- Vercel provides SSL automatically
- May take up to 24 hours after DNS propagates
- Check Vercel dashboard for SSL status

### Site shows "Not Found"?
- Check Vercel deployment logs
- Verify build succeeded
- Make sure domain is correctly added in Vercel

---

## 🎉 You're Done!

Once DNS propagates:
- **New site**: `https://v2.juanjosemogat.art` ✅
- **Old site**: `https://www.juanjosemogat.art` ✅

Both sites work independently!
