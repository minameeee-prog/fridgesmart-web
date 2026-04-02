# FridgeSmart Website v4

This version is split into two clear experiences:
- a marketing homepage for new visitors
- a private dashboard for existing users after login

## Included
- app-inspired marketing homepage
- Chef Lumi Amazon affiliate section on the homepage
- login, signup, and forgot-password pages
- shared Supabase web auth scaffold for the same accounts used in the app
- protected dashboard shell ready for real data wiring
- dashboard pages for Home, My Fridge, Recipes, Shopping List, and Expiring Soon

## 1) Add your environment variables
Create `.env.local` from `.env.example` and fill in:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_AMAZON_AFFILIATE_TAG=fridgesmartapp-20
```

## 2) Add your real assets
Place these in `public/assets`:
- `fridgesmart-logo.png`
- `owner-avatar.png`
- `chef-lumi-avatar.png`
- `fridgesmart-app-screen.png`

## 3) Install and run
```bash
npm install
npm run dev
```

## 4) Recommended route flow
- `/` marketing homepage
- `/login` login page
- `/signup` signup page
- `/dashboard` logged-in companion dashboard

## 5) Supabase auth setup
Add these URLs in Supabase Auth settings:
- `http://localhost:3000`
- your Vercel preview URL
- your production domain

## 6) What to wire next
- fetch real `fridge_items`
- show real expiring items
- load real recipes
- personalize affiliate recommendations
