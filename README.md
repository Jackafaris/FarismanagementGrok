# Farismanagement

Clean, professional rental property website for Farismanagement.

**Features in this first draft:**
- Stylish "FM" logo
- White background with black buttons and clean design
- Two featured rental properties (930 Bellestri + 1008 Dorne Dr)
- "Express Interest" flow with pre-filled property in the contact form
- Fully functional contact form that emails shirinefaris@gmail.com
- Responsive and fast (Next.js)

## Quick Start (Local) - with working contact form

1. Get a free Resend API key at https://resend.com (sign up → API Keys)

2. Add the key:
```bash
cd /home/jackfaris99/farismanagement
echo 'RESEND_API_KEY=re_your_key_here' > .env.local
```

3. Start the server:
```bash
npm run dev
```

4. Open http://localhost:3000 and test the "Express Interest" form.
```

## Deployment to Vercel (Your Account)

### 1. Create a GitHub Repo
1. Go to your GitHub and create a new repository (e.g. `farismanagement`)
2. Do **not** initialize with README (we already have one)

### 2. Push this code
```bash
cd /home/jackfaris99/farismanagement

git init
git add .
git commit -m "First draft of Farismanagement site"
git branch -M main

# Add your GitHub remote (replace with your actual repo)
git remote add origin https://github.com/YOUR_USERNAME/farismanagement.git
git push -u origin main
```

### 3. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import the GitHub repository you just created
4. Vercel will detect Next.js automatically — click Deploy

### 4. Add Environment Variable (Required for contact form)
After first deployment:
1. Go to your project on Vercel → **Settings** → **Environment Variables**
2. Add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: your key from https://resend.com
3. Redeploy (or it will auto-redeploy on env change)

## Contact Form
- Sends directly to `shirinefaris@gmail.com`
- Form pre-fills the property when clicking "Express Interest"
- You can update the two properties in `app/page.tsx`

## Deployment to Vercel

1. Create a new repo on GitHub (e.g. farismanagement)
2. Push this code:
```bash
cd /home/jackfaris99/farismanagement
git remote add origin https://github.com/YOUR_USERNAME/farismanagement.git
git push -u origin main
```
3. On https://vercel.com → New Project → Import your GitHub repo → Deploy
4. After first deploy: Settings → Environment Variables → Add `RESEND_API_KEY` with your Resend key
5. Redeploy

## Next Steps / Customization
- Replace placeholder images with real photos
- Update city/neighborhood names if needed
- Add more properties
- Add real coordinates + interactive map (Leaflet is prepared)
- Verify a custom domain in Resend for better "from" address (avoids resend.dev)

Built as a first draft per your specifications.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
