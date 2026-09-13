# Bubbli.in - Web Development & Digital Solutions Agency

Lightning-fast websites and digital growth solutions engineered for local businesses (Dentists, Restaurants, Retail Stores, Salons & Clinics).

---

## 📁 Project Structure

```text
bubbli-in/
├── CNAME               # Contains the raw custom domain: bubbli.in
├── .gitignore          # Excludes OS/IDE/build junk files
├── index.html          # Main high-converting landing page
├── README.md           # Documentation and deployment guide
├── css/
│   └── style.css       # Custom styles, glassmorphism, animations
├── js/
│   └── main.js         # Interactive cost calculator, tabs & WhatsApp links
└── assets/
    ├── fonts/          # Custom webfonts (if self-hosted)
    ├── icons/          # SVG icons and graphics
    └── images/         # Compressed WebP/PNG images
```

---

## 🚀 Pushing to GitHub

Open terminal inside the project directory:

```bash
git init
git add .
git commit -m "Initial commit: Bubbli.in launch structure"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bubbli-in.git
git push -u origin main
```

---

## 🌐 Hosting on GitHub Pages

1. Navigate to your repository on GitHub.
2. Go to **Settings** &rarr; **Pages** (under Code and automation).
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/(root)`
4. Click **Save**.
5. Wait 1–2 minutes for the site to build.

---

## 🔗 Custom Domain DNS Configuration (`bubbli.in`)

At your domain registrar (GoDaddy, Hostinger, BigRock, Namecheap, etc.), add the following DNS records:

### 1. Add 4 "A" Records (for root domain `@`):
| Type | Host / Name | Value / Points To | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | 3600 (Automatic) |
| **A** | `@` | `185.199.109.153` | 3600 (Automatic) |
| **A** | `@` | `185.199.110.153` | 3600 (Automatic) |
| **A** | `@` | `185.199.111.153` | 3600 (Automatic) |

### 2. Add 1 "CNAME" Record (for `www` subdomain):
| Type | Host / Name | Value / Points To | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `YOUR_USERNAME.github.io` | 3600 (Automatic) |

### 3. Enforce HTTPS in GitHub:
- In GitHub Repo &rarr; **Settings** &rarr; **Pages** &rarr; **Custom domain**, enter `bubbli.in` and click **Save**.
- Check the box: **"Enforce HTTPS"** (Wait a few moments for SSL certificate provisioning).
