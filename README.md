# ToolSnipe Landing Page

Static landing page for [toolsnipe.com](https://toolsnipe.com), deployed via GitHub Pages + Cloudflare.

## Files

```
toolsnipe-landing/
├── index.html          Main landing page
├── privacy.html        Privacy policy
├── CNAME               Custom domain (toolsnipe.com)
└── assets/
    ├── css/style.css
    └── js/main.js
```

## Before Deploying

1. **Replace Formspree endpoint** in `index.html` (two forms):
   - Go to [formspree.io](https://formspree.io), create a free form
   - Replace `REPLACE_WITH_YOUR_ID` in both `<form action="...">` attributes

---

## Deployment: GitHub Pages

### Option A — Standalone repo (recommended)

1. Create a new GitHub repo, e.g. `toolsnipe-landing`
2. Push the contents of this directory as the repo root:
   ```bash
   cd toolsnipe-landing
   git init
   git add .
   git commit -m "Initial landing page"
   git remote add origin git@github.com:YOUR_USERNAME/toolsnipe-landing.git
   git push -u origin main
   ```
3. In GitHub → Settings → Pages:
   - Source: **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)`
   - Click Save
4. GitHub Pages will serve from `https://YOUR_USERNAME.github.io/toolsnipe-landing/`

### Option B — Main repo `/docs` folder

1. Copy this directory to `/docs` in the main `toolsnipe` repo
2. In GitHub → Settings → Pages, set source to branch `main`, folder `/docs`

---

## DNS Configuration (Cloudflare)

### Step 1: Add your domain to Cloudflare
- Log in to Cloudflare → Add Site → `toolsnipe.com`
- Follow the prompts to update your registrar's nameservers to Cloudflare's

### Step 2: Configure DNS records in Cloudflare

Add these A records for GitHub Pages (all with Proxy Status = **Proxied** 🟠):

| Type | Name | Content | TTL |
|------|------|---------|-----|
| A    | @    | 185.199.108.153 | Auto |
| A    | @    | 185.199.109.153 | Auto |
| A    | @    | 185.199.110.153 | Auto |
| A    | @    | 185.199.111.153 | Auto |

Add a CNAME for `www`:

| Type  | Name | Content                           | TTL |
|-------|------|-----------------------------------|-----|
| CNAME | www  | YOUR_USERNAME.github.io           | Auto |

### Step 3: Configure GitHub Pages custom domain

1. In GitHub → Settings → Pages → Custom domain: enter `toolsnipe.com`
2. Check **Enforce HTTPS** (may take a few minutes to provision)

### Step 4: Verify

- Wait ~5 minutes for DNS to propagate
- Visit https://toolsnipe.com — should load the landing page over HTTPS
- Test https://www.toolsnipe.com — should redirect to https://toolsnipe.com
- Test on mobile (Chrome DevTools → Toggle device toolbar)

---

## Affiliate Program Application Checklist

Before applying to Home Depot or Amazon affiliate programs, confirm:
- [ ] Site loads at https://toolsnipe.com with valid HTTPS
- [ ] Landing page is complete (not a placeholder)
- [ ] Privacy policy linked in footer
- [ ] Contact email visible
- [ ] Clear description of what the site does
- [ ] Formspree endpoint is live (test email signup works)
