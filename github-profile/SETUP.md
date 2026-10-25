# GitHub Profile SEO Setup — github.com/Elicom256

Goal: when a recruiter or client Googles "Mugisha Elijah", "Elicom", or "Elicom256", your
GitHub should rank and immediately read "hireable full-stack SaaS developer" — not learning
projects. GitHub profile pages are indexed by Google, and the profile README is the single
biggest lever. Total time: ~15 minutes.

## 1. Publish the profile README (biggest SEO win)

The README is in this folder (`github-profile/README.md`). A special repo named **exactly**
your username renders its README on your profile.

From this folder, using YOUR Elicom256 account (the `gh` on this machine is logged in as a
different account — push manually):

```bash
mkdir -p ~/Elicom256 && cd ~/Elicom256
cp ~/Desktop/web2/2026/portfolio/github-profile/README.md .
git init -b main
git add README.md
git commit -m "Add profile README"
git remote add origin git@github.com:Elicom256/Elicom256.git
# First create the empty repo at https://github.com/new  (name: Elicom256, Public, no README)
git push -u origin main
```

## 2. Fix profile metadata (github.com/settings/profile)

| Field | Current | Change to |
| --- | --- | --- |
| **Name** | Elijah Mugisha Talent | **Mugisha Elijah** — matches resume & portfolio; consistency across search results |
| **Bio** | Software Engineer | **Full-Stack Developer — Laravel · Node.js · React · TS \| Co-founder @KlassApp · Founder @AfroDuuka** (keyword-rich, 110 chars) |
| **Location** | Kampala, Uganda | Keep |
| **Website** | elicomelijah.vercel.app | Switch to the new portfolio domain once deployed |
| **Social accounts** | X, LinkedIn, Gmail | Keep — add all; they show as verified backlinks |

The bio words are what GitHub search AND Google index — "Full-Stack Developer", "Laravel",
"Node.js" are the terms recruiters filter by.

## 3. Pin the RIGHT repositories

Your current pins (rtk-cart, react-calculator, mini-calendar, rtk-quiz) signal *learner*.
Replace them with *builder* signals. On your profile → "Customize your pins":

1. `afro-invest` — Node.js/Express/Prisma full-stack app (live demo on Vercel)
2. `e-com` — location-based marketplace (live demo on Vercel)
3. `KlassApp` (from the KlassApp-Foundation org) — your 1,700+-user production SaaS
4. `php-blog` — early Laravel/PHP fundamentals
5. `af4` — TypeScript chat app (shows real-time TS work)
6. Best remaining Laravel repo

## 4. SEO the two flagship repos themselves

Repo pages also rank on Google. For `afro-invest` and `e-com`:

- **Description** (repo → About gear): one keyword-rich line, e.g.
  `afro-invest`: "Secure investment & portfolio platform for African SMEs — Node.js, Express, Prisma, PostgreSQL, React (live: afro-invest.vercel.app)"
- **Topics** (in the same About panel): `nodejs` `express` `prisma` `postgresql` `react`
  `fullstack` `saas` `fintech` / for e-com: `marketplace` `ecommerce` `geolocation`
- **README in each repo**: what it does, architecture notes, screenshots/GIF, live link.
  A repo with a strong README gets starred → stars → ranking.

## 5. The old account (Elijah-ug)

- If you **renamed** Elijah-ug → Elicom256: GitHub 301-redirects old URLs forever — nothing
  to do (the portfolio now links to Elicom256 directly anyway).
- If they are **two separate accounts**: transfer or mirror the repos you care about to
  Elicom256, and set the old account's bio to "Moved to @Elicom256" with a profile README
  pointing at the new account.

## 6. Ongoing hygiene (optional but compounds)

- Contribution graph: keep it green — commit your daily work from THIS account (set the
  correct `git config user.email` to the email attached to Elicom256).
- When the new portfolio deploys, add its URL to: GitHub website field, both product sites
  if possible, LinkedIn — backlinks from real domains are what push your name up in Google.
