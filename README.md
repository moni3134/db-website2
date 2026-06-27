# DBR — David Blackwell Recruitment Website

A fully branded recruitment website for **David Blackwell Recruitment** — Engineering Talent Specialists.

**Colours:** Navy `#1B2A4A` | Gold `#F5A800`
**Phone:** 0330 043 4199

---

## Pages

| File | Page |
|------|------|
| `index.html` | Homepage |
| `pages/jobs.html` | Current Jobs (with filter) |
| `pages/employers.html` | For Employers + Vacancy Form |
| `pages/candidates.html` | For Candidates + CV Upload |
| `pages/about.html` | About DBR |
| `pages/contact.html` | Contact |

---

## ⚠️ 3 Things You Still Need to Do

### 1. Connect Formspree (real form submissions) — 5 minutes
Right now form `action` attributes point to a placeholder: `https://formspree.io/f/YOUR_FORM_ID`. To make them actually email you:

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form → copy your form ID (e.g. `xyzabc`)
3. Find and replace `YOUR_FORM_ID` with your real ID in these 3 files:
   - `pages/contact.html`
   - `pages/employers.html`
   - `pages/candidates.html`
4. Confirm your email with Formspree the first time a test submission comes through
5. **Note:** the candidate CV upload form sends a file attachment — Formspree's free plan supports file uploads but caps attachment size/count; check their current limits if volume is high.

### 2. Add your Google Analytics ID
Every page currently has a GA4 placeholder snippet in `<head>` using `G-XXXXXXXXXX`. Once you've created a GA4 property at [analytics.google.com](https://analytics.google.com):

1. Copy your Measurement ID (looks like `G-ABC123XYZ`)
2. Find and replace **all instances** of `G-XXXXXXXXXX` across every HTML file with your real ID (there are 2 per page — one in the script `src` and one in the `gtag('config', ...)` line)

### 3. Double check your phone number
The number `0330 043 4199` is wired in as a clickable `tel:` link in every footer, the contact page, and the employers page. Update it across all files if it's incorrect (search for `0330 043 4199` and `+443300434199`).

---

## What's Already Done

✅ Real logo (`images/dbr-logo-full.png` and `images/dbr-mark-white.png`) replacing the old "DBR" text badge in the nav and footer of every page
✅ Favicon set generated from the logo
✅ LinkedIn link in every footer → `linkedin.com/company/david-blackwell-recruitment`
✅ Facebook link in every footer
✅ Phone number (clickable, tap-to-call on mobile) in every footer + contact page + employers page
✅ SEO meta tags: description, canonical URL, Open Graph tags for social sharing previews, on every page
✅ Google Analytics (GA4) snippet ready — just needs your Measurement ID

---

## 🚀 How to Put This on GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a New Repository
1. Click the **+** icon → **New repository**
2. Name it: `dbr-website` (or any name you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the Files
1. On your new repo page, click **uploading an existing file**
2. Drag and drop ALL the files and folders:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `pages/` folder
   - `images/` folder
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select `main` branch → `/ (root)`
4. Click **Save**
5. After 1–2 minutes, your site will be live at:
   `https://yourusername.github.io/dbr-website/`

---

## 🔗 Custom Domain (e.g. davidblackwellrecruitment.co.uk)

1. Buy a domain (GoDaddy, Namecheap, etc.)
2. In GitHub Pages settings, enter your custom domain
3. In your domain provider's DNS settings, add:
   - Type: `CNAME` | Name: `www` | Value: `yourusername.github.io`
4. Wait up to 24 hours to propagate
5. **Important:** once you have a real domain, update the `og:url` and `link rel="canonical"` tags in every HTML file's `<head>` — they currently point to `https://www.davidblackwells.co.uk/` as a placeholder.

---

## ✏️ How to Update Job Listings

Open `pages/jobs.html` and copy this block to add a new job:

```html
<div class="job-card" data-location="Birmingham" data-type="Permanent">
  <span class="job-tag">Permanent</span>
  <h3>JOB TITLE HERE</h3>
  <div class="job-meta">
    <span>📍 Location</span>
    <span>💷 Salary</span>
    <span>🕐 Full-Time</span>
  </div>
  <p style="font-size:0.9rem; color:var(--grey); margin-bottom:20px;">
    Job description here.
  </p>
  <a href="contact.html" class="btn btn-navy">Apply Now</a>
</div>
```

Change `data-location` and `data-type` values to match the filter options.

---

## File Structure

```
dbr-website/
├── index.html          ← Homepage
├── css/
│   └── style.css       ← All styles (colours, fonts, layout)
├── js/
│   ├── main.js         ← Nav toggle, form handling, animations
│   └── nav.js          ← Shared nav/footer injector (not currently used by the pages, kept for reference)
├── images/
│   ├── dbr-logo-full.png      ← Full navy stacked logo (footer, light backgrounds)
│   ├── dbr-mark-white.png     ← White "DBR" mark for the navy nav bar
│   ├── favicon-16.png
│   ├── favicon-32.png
│   └── favicon-180.png        ← Apple touch icon
└── pages/
    ├── jobs.html
    ├── employers.html
    ├── candidates.html
    ├── about.html
    └── contact.html
```
