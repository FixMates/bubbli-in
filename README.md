# Bubbli Technologies - Official Website & Digital Growth Platform

High-converting agency website, bespoke business applications, and workflow automation solutions engineered for local businesses and growing enterprises.

---

## 📁 Project Directory Structure

```text
Bubbli/
├── CNAME                   # Custom apex domain: bubbli.in
├── index.html              # Core landing page with all 10+ feature sections
├── privacy-policy.html     # Comprehensive legal privacy policy
├── terms-of-service.html   # Terms of service and service delivery agreement
├── 404.html                # Custom branded 404 error page
├── robots.txt              # Search engine crawler directives
├── sitemap.xml             # XML sitemap for SEO indexing
├── demo-clinic.html        # Interactive Dental Clinic sample website
├── demo-restaurant.html    # Interactive Restaurant QR Menu sample website
├── demo-salon.html         # Interactive Luxury Salon & Spa sample website
├── css/
│   └── style.css           # Glassmorphism, animations, scroll reveal, dark mode
├── js/
│   └── main.js             # Counter animations, ScrollSpy, form validation, WhatsApp routing
├── demos/                  # Subdirectory demo templates (dentist, restaurant, salon, retail)
└── assets/                 # Fonts, icons, and image assets
```

---

## 🛠️ Key Features Included

1. **Email Standardisation**: All inquiries and mailto links routed to `support@bubbli.in`.
2. **Context-Aware WhatsApp Integration**: Direct WhatsApp links (`+91 97391 30926`) pre-filled dynamically based on user interest (`₹4,999 deal`, `Workflow Automation`, `Custom Business App`, `Multi-page Website`).
3. **Sticky Header & ScrollSpy**: Fixed glassmorphism navigation that tracks and highlights active sections during scrolling.
4. **Interactive Demos**: Dedicated, standalone sample websites for Healthcare/Dental, Hospitality/Restaurant, and Beauty/Salon with live cart and appointment interactions.
5. **Workflow Automation Section**: Showcases 8 core business automations (Reminders, Invoices, CRM, Inventory alerts) starting at ₹8,000.
6. **Bespoke Business Applications**: Dedicated showcase for custom software solutions (POS, Clinic EHR, Inventory, Staff Payroll, Rewards).
7. **Industries Grid & Portfolio**: High-impact industry cards and real outcome metric showcases.
8. **Testimonials & Trust Badges**: 5-star verified review cards and security trust indicators.
9. **Interactive Quote & Timeline Calculator**: Real-time pricing and delivery turnaround estimates.
10. **Enhanced Contact Form**: Dual-action form supporting AJAX submission via Formspree and immediate WhatsApp handoff with client-side validation.
11. **SEO & Structured Data**: Complete OpenGraph meta tags, Twitter Cards, and Schema.org `LocalBusiness` JSON-LD. No ad network or tracking pixel is installed.

---

## 🚀 Deployment to GitHub Pages

To deploy or update on GitHub Pages:

```bash
git add .
git commit -m "Upgrade Bubbli website with all services, demos, and legal pages"
git push origin main
```

1. In GitHub Repository, go to **Settings** &rarr; **Pages**.
2. Set **Source** to `Deploy from a branch`, choose branch `main` and folder `/ (root)`.
3. Verify the Custom Domain is set to `bubbli.in` and **Enforce HTTPS** is enabled.

## 🔗 Branded invitation short links

The invitation studio stores invitation data in Cloudflare KV and shares concise links in the form `https://bubbli.in/invite/?id=abc123...`. GitHub Pages serves the static site; a Cloudflare Worker on `workers.dev` handles the invitation API. Invitation details stay in storage and are never embedded in shared URLs. This keeps the existing GoDaddy DNS setup unchanged.

To enable short links on a Cloudflare account that manages the `bubbli.in` DNS zone:

1. Install Wrangler and authenticate: `npm install --save-dev wrangler` and `npx wrangler login`.
2. Deploy with `npx wrangler deploy`. Wrangler provisions the KV namespace from `wrangler.toml` on first deployment and prints its ID and Worker URL.
3. Set the `id` in the `INVITATIONS` binding in `wrangler.toml` and `window.BUBBLI_INVITATION_API_BASE` in `js/invitations/api-config.js` to the deployment values, then push the change to `main` so the studio and invitation pages can call the API.
4. Keep the site's GitHub Pages deployment on `main`.

The Worker limits invitation uploads to 2 MiB and 20 creations per hour per IP. Invitation details are public to anyone with the link. The studio only marks an invitation live after the Worker confirms it is saved. If the connection fails, it offers a retry instead of generating a long, broken fallback link.

---

## 🔑 External Dependencies & Configuration

| Service | Identifier / Placeholder | File Location | Purpose |
| :--- | :--- | :--- | :--- |
| **WhatsApp Lead Desk** | `+91 97391 30926` | `index.html`, `js/main.js`, demo pages | Direct instant lead capture |
| **Contact Email** | `support@bubbli.in` | `index.html`, `privacy-policy.html`, `terms-of-service.html` | Official support & inquiries |
| **Formspree Endpoint** | `https://formspree.io/f/xbjnbqwv` | `js/main.js` | Form lead capture email notifications (Replace with your Formspree ID if desired) |
| **Tailwind CSS** | CDN v3 | `<head>` across all HTML files | Utility styling framework |
| **Google Fonts** | `Outfit`, `Plus Jakarta Sans` | `css/style.css` | Typography |

---

## 📞 Support & Contacts

- **Agency**: Bubbli Technologies
- **Email**: [support@bubbli.in](mailto:support@bubbli.in)
- **WhatsApp / Phone**: [+91 97391 30926](tel:9739130926)
- **Website**: [https://bubbli.in](https://bubbli.in)
