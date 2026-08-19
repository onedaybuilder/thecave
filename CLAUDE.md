@AGENTS.md

# The Cave — Watch Ecommerce Site

## How Claude should work on this project

This is a learning build. Default mode: **advise, don't implement.**

- When asked about GSAP, WebGL/Three.js, Barba.js, Tailwind, Next.js, **or Shopify**: explain the approach, name the concept/API to use, and point to the specific doc section. Do not write the implementation — the user wants to learn Shopify hands-on, not have it handed to them, same as everything else.
- If asked to just "build X" without qualification, ask which mode is wanted before writing large amounts of code.
- Next.js reference point: the user's baseline Next.js knowledge comes from **Net Ninja** (YouTube channel by Shaun Pelling, iamshaunjp; course hub at netninja.dev). When explaining Next.js concepts, it's fine to frame them relative to what Net Ninja's tutorials cover — but verify against the official Next.js docs in `node_modules/next/dist/docs/` first, since this project is on Next.js 16 and Net Ninja's tutorials may predate breaking changes.

## Stack

- Next.js 16 (App Router), React 19, Tailwind CSS v4 — already scaffolded.
- GSAP (+ ScrollTrigger) for animation.
- WebGL: not yet chosen — decide between React Three Fiber + drei (easier, React-idiomatic) vs raw Three.js (more control, lighter if hand-rolled) vs OGL (minimal, fastest, more manual). Default recommendation: **R3F** unless the homepage scenes are simple, then raw Three.js/OGL to cut bundle size.
- **Materials/textures must read as the real product**, especially on the configurator — this isn't abstract/stylized WebGL, it's a product visualizer. That means: real PBR materials (base color, roughness, metalness, normal maps) per strap/face/color option rather than flat colors, and either an actual 3D watch model (get one made/scanned, or model it) or high-quality photography-based textures. Budget real time for asset creation/sourcing — this is usually the long pole in a "looks like the real product" WebGL build, not the Three.js/R3F code itself.
- Shopify Storefront API (GraphQL) for product data and cart/checkout. Not the Admin API (that's for backend/private use only).
- Page transitions: **open decision, see below** — Barba.js vs Next's native View Transitions.
- Deploy target: Vercel (implied by Next.js; confirm with user before assuming).

### Barba.js vs Next transitions — decide before building transitions
Barba.js is designed for MPA-style sites where it intercepts links and swaps HTML over AJAX — it fights against Next's App Router, which already owns client-side navigation via React. Bolting Barba on top of Next typically means disabling/working around Next's router. Alternatives that play natively with App Router:
- Next's built-in **View Transitions** (`next/navigation` + the `viewTransition` API, stable in recent Next versions) — check `node_modules/next/dist/docs/` for current support in this Next 16 install.
- GSAP-driven transitions using route change events (`usePathname`/`useSelectedLayoutSegment` + a transition context in the root layout).
Recommendation: prototype the homepage first, decide on transitions once other pages exist — don't let this block Day 1.

## Pages

1. **Homepage** — WebGL + GSAP heavy, awards-site aesthetic. Sections are already written by the user; needs animation/visual treatment only.
2. **About** — simple: mission statement + contact form beneath. Light animation, not WebGL-heavy.
3. **Products** — list of products pulled from Shopify. Each product links either to Shopify checkout directly, or to the configurator. Decide per-product which path applies.
4. **Build Your Watch (configurator)** — lets users pick face, strap, color, etc.; each option combination maps to a real Shopify product variant (confirmed — not purely cosmetic) so price/inventory stay accurate through to checkout. Each option's WebGL material should visually match that variant's real-world appearance (see Stack → materials/textures above).
5. **Membership** — tier info + join form. Shopify has no native subscription support in the Storefront API — requires a subscriptions app (e.g. Shopify Subscriptions, Recharge) or a custom membership flow outside Shopify entirely. **Needs a decision before building** — flag to user.
6. **Contact** — simple, same treatment as About, with animation.

## Shopify — open questions to resolve early (ask user, don't assume)

- Storefront API access token / dev store — has the user created a Shopify dev store yet?
- Product → variant mapping for the configurator: confirmed — each face/strap/color combo maps to a real Shopify product variant, so inventory/pricing stays accurate. Set up the variant structure (product options + variants) in Shopify admin before building the configurator UI, since the UI's option set should mirror it exactly.
- Checkout: use Shopify's hosted checkout (redirect via cart permalink — fast to build, less custom UI) vs a fully custom cart using the Storefront Cart API (`cartCreate`, `cartLinesAdd`, etc. — more control, more work). Default recommendation for a 1-week timeline: **hosted checkout redirect**, revisit custom cart later if needed.
- Membership tiers: decide Shopify Subscriptions app vs third-party (Recharge, Bold) vs non-Shopify (e.g. a simple gated content model) before building the join form's backend.

Docs: Shopify Storefront API reference and GraphQL explorer — start at shopify.dev/docs/api/storefront.

## Design

No designs exist yet — sections are drafted as content/copy only. Since this is an awards-style site:
- Gather references before writing CSS: Awwwards.com, siteinspire.com, godly.website (curated awards-site galleries), Codrops (tympanus.net/codrops) for GSAP/WebGL technique breakdowns with source.
- Lock a type scale, color palette, and spacing scale in `tailwind.config`/CSS theme tokens **before** building sections — awards-site look lives or dies on typography and rhythm, not per-component styling.
- Recommend blocking out layout/motion intent in low-fidelity (even just annotated Figma frames or a written shot-list per section: what enters, what triggers on scroll, what's the hero moment) before touching GSAP timelines — cheaper to iterate on paper than in code.

## Performance constraints (non-negotiable)

Targets: LCP < 2.5s, INP < 200ms, CLS < 0.1, on the homepage specifically despite WebGL/GSAP weight.

Strategies to enforce throughout the build:
- LCP element on the homepage must not depend on WebGL/JS execution — use a real image (`next/image`) or styled text as the LCP candidate, mount the WebGL canvas after first paint (`next/dynamic` with `ssr:false`, or mount on `requestIdleCallback`/after `load`).
- Code-split per route: Three.js/GSAP/R3F bundles should only ship on pages that use them (homepage, configurator) — not on About/Membership/Contact.
- Self-host fonts via `next/font`, avoid render-blocking third-party scripts.
- Lazy-mount below-the-fold WebGL/animated sections via `IntersectionObserver`.
- Audit with Lighthouse/PageSpeed Insights after each major page is built, not just at the end.

## Build sequence (1-week target)

1. **Setup** — install `gsap`, chosen WebGL lib, Shopify Storefront client; create Shopify dev store + Storefront API token; lock type scale/color tokens in Tailwind theme; gather design references.
2. **Homepage skeleton** — layout + hero with a placeholder WebGL canvas mounted correctly (LCP-safe), confirm perf budget holds before adding more.
3. **Homepage build-out** — animate the user's existing sections with GSAP/ScrollTrigger + WebGL scenes.
4. **Products + Shopify integration** — fetch products via Storefront API, product list/cards, resolve checkout-vs-configurator linking per product.
5. **Configurator** — build-your-watch UI (face/strap/color state), wired to real Shopify variants if resolved in step 4's open questions.
6. **About, Membership, Contact** — simpler pages, forms (decide form backend — e.g. a Server Action + email service, or Shopify-side), membership tier content.
7. **Transitions + performance pass** — implement whichever transition approach was decided, run Lighthouse across all pages, fix regressions, deploy to Vercel.

Homepage comes first since it's the highest-risk/highest-effort page and the perf budget has to be proven out before other pages inherit the same patterns.
