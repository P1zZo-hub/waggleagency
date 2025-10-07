# Waggle UI — Liquid Glass Buttons (iOS26‑style)
_KISS-first implementation for Next.js + Tailwind. This file also defines how we document upgrades via `.md` files._

---

## TL;DR
- **One component**: `<Button />` with `variant`, `size`, and `isLoading`.
- **One stylesheet**: minimal CSS using design tokens and a “liquid glass” effect.
- **One convention**: every UI change is documented in `/docs/**/*.md` with a short changelog.

---

## 1) Design Tokens (CSS variables)
Add these to your global stylesheet (e.g., `app/globals.css`). Keep it tiny; override per project if needed.

```css
:root {
  /* Brand (can be tuned per theme) */
  --waggle-honey: #ffd648;   /* miele energico */
  --waggle-turquoise: #23c6c8;
  --waggle-ink: #121212;
  --waggle-ink-2: #1a1a1a;
  --waggle-white: #ffffff;

  /* Glass */
  --glass-bg: hsla(0, 0%, 100%, 0.08);
  --glass-border: hsla(0, 0%, 100%, 0.22);
  --glass-highlight: hsla(0, 0%, 100%, 0.35);
  --glass-shadow: rgba(0, 0, 0, 0.20);
  --glass-blur: 14px;
  --glass-sat: 140%;

  /* Motion */
  --ease-out: cubic-bezier(.16, 1, .3, 1);
  --ease-in: cubic-bezier(.7, 0, .84, 0);
  --dur-press: 120ms;
  --dur-hover: 360ms;

  /* Rings (accessibility) */
  --ring: 2px;
  --ring-color: color-mix(in oklab, var(--waggle-honey) 65%, white 35%);
}

@media (prefers-color-scheme: dark) {
  :root {
    --glass-bg: hsla(0, 0%, 100%, 0.06);
    --glass-border: hsla(0, 0%, 100%, 0.18);
    --glass-shadow: rgba(0, 0, 0, 0.35);
  }
}
```

---

## 2) Base Button Styles (KISS)
Place this under a small, dedicated section in `app/globals.css` (or `styles/button.css`). We keep class names semantic and minimal.

```css
/* ---------- Liquid Glass Button (iOS26 style) ---------- */
.btn {
  -webkit-tap-highlight-color: transparent;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  padding: .7rem 1.05rem;
  border-radius: 9999px;
  border: 1px solid var(--glass-border);

  background:
    radial-gradient(120% 120% at 10% 10%, var(--glass-highlight) 0%, transparent 45%),
    linear-gradient(180deg, hsla(0,0%,100%,.18), hsla(0,0%,100%,0) 26%),
    var(--glass-bg);
  color: var(--waggle-white);

  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat));

  box-shadow:
    0 1px 0 var(--glass-highlight) inset,
    0 6px 18px var(--glass-shadow);

  font-weight: 600;
  line-height: 1;
  user-select: none;
  cursor: pointer;
  transition:
    transform var(--dur-press) var(--ease-out),
    box-shadow var(--dur-press) var(--ease-out),
    background-position var(--dur-hover) var(--ease-out);
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
  box-shadow:
    0 0 0 var(--glass-highlight) inset,
    0 4px 12px var(--glass-shadow);
}

.btn:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 var(--ring) var(--ring-color),
    0 8px 24px var(--glass-shadow);
}

/* Sheen highlight that glides on hover (no JS) */
.btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    linear-gradient(120deg, transparent 35%, hsla(0,0%,100%,.18) 50%, transparent 65%);
  background-size: 220% 100%;
  background-position: 120% 0;
  pointer-events: none;
  transition: background-position var(--dur-hover) var(--ease-out);
  mix-blend-mode: screen;
}

.btn:hover::after { background-position: -20% 0; }

/* ---------- Variants ---------- */
.btn--primary {
  /* tint the glass with honey & keep text dark for contrast */
  color: var(--waggle-ink);
  background:
    radial-gradient(120% 120% at 12% 8%, hsla(0,0%,100%,.35) 0%, transparent 46%),
    linear-gradient(180deg, hsla(52, 100%, 80%, .65), hsla(52, 100%, 60%, .35) 38%, transparent 100%),
    color-mix(in oklab, var(--waggle-honey) 45%, var(--waggle-white) 5%);
  border-color: color-mix(in oklab, var(--waggle-honey) 65%, white 35%);
}

.btn--secondary {
  background:
    radial-gradient(120% 120% at 12% 8%, hsla(0,0%,100%,.35) 0%, transparent 46%),
    linear-gradient(180deg, hsla(182, 70%, 74%, .6), hsla(182, 70%, 58%, .3) 40%, transparent 100%),
    color-mix(in oklab, var(--waggle-turquoise) 38%, var(--waggle-white) 6%);
  border-color: color-mix(in oklab, var(--waggle-turquoise) 70%, white 30%);
}

.btn--ghost {
  /* pure glass */
  color: var(--waggle-white);
  background:
    radial-gradient(120% 120% at 12% 8%, var(--glass-highlight) 0%, transparent 46%),
    linear-gradient(180deg, hsla(0,0%,100%,.12), hsla(0,0%,100%,0) 32%),
    var(--glass-bg);
}

/* ---------- Sizes ---------- */
.btn--sm { padding: .55rem .9rem; font-size: .875rem; }
.btn--md { padding: .7rem 1.05rem; font-size: .95rem; } /* default */
.btn--lg { padding: .9rem 1.25rem; font-size: 1.05rem; }

/* ---------- Icon slot ---------- */
.btn .icon {
  display: inline-flex;
  width: 1.1em;
  height: 1.1em;
  line-height: 1;
}

/* ---------- Loading ---------- */
.btn[aria-busy="true"] { pointer-events: none; }
.btn__spinner {
  width: 1.1em; height: 1.1em; border-radius: 9999px;
  border: 2px solid hsla(0,0%,100%,.35);
  border-top-color: hsla(0,0%,100%,.95);
  animation: spin 800ms linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .btn, .btn::after { transition: none; }
  .btn__spinner { animation: none; }
}
```

**Why this is “liquid glass”:** frosted substrate via `backdrop-filter`, semi‑specular gradients, animated sheen, soft inner highlight, and a gentle depth shadow. No heavy JS, no custom shaders.

---

## 3) React Component (Next.js 15, no deps)
Create `components/ui/Button.tsx`.

```tsx
import { cn } from "@/lib/cn"; // tiny classnames helper; or inline join
import { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & ComponentProps<"button">;

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: Props) {
  return (
    <button
      className={cn(
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        className
      )}
      aria-busy={isLoading ? "true" : "false"}
      {...rest}
    >
      {isLoading ? (
        <span className="btn__spinner" aria-hidden="true" />
      ) : (
        <>
          {leftIcon ? <span className="icon">{leftIcon}</span> : null}
          <span>{children}</span>
          {rightIcon ? <span className="icon">{rightIcon}</span> : null}
        </>
      )}
    </button>
  );
}
```

> **Note**: If you don’t use a `cn` helper, replace it with a simple join like:
> `const cn = (...a:string[]) => a.filter(Boolean).join(" ");`

---

## 4) Tailwind (optional — keep it minimal)
You **don’t** need Tailwind for the effect, but if it’s already in the stack:
- Keep utilities for layout/spacing; the button keeps its own CSS so we don’t fight specificity.
- Ensure `backdrop-filter` isn’t stripped by your CSS optimizer (it usually isn’t).

No custom plugin required.

---

## 5) Usage Examples
```tsx
import Button from "@/components/ui/Button";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <Button>Bee Ready</Button>
      <Button variant="secondary">Buzz Now</Button>
      <Button variant="ghost">See More</Button>
      <Button size="lg" isLoading>Publishing…</Button>
    </div>
  );
}
```

HTML-only usage (e.g., in MDX):
```html
<button class="btn btn--primary btn--md">Bee Ready</button>
```

---

## 6) Accessibility & Theming
- High-contrast ring on `:focus-visible`.
- Text color chosen per variant for contrast.
- Respects `prefers-reduced-motion`.
- Dark mode handled via `prefers-color-scheme`; you can also gate tokens with a `.dark` class if you prefer.

---

## 7) Performance
- Pure CSS; no runtime layout thrashing.
- One `::after` sheen only on hover.
- No external assets; 0 network cost.

---

## 8) Documentation Process (the `.md` way)
Waggle adotta una documentazione **KISS** e leggibile direttamente nel repo.

**Struttura minima:**
```
/docs
  /components
    Button.md            ← questo file
  CHANGELOG.md
  DECISIONS.md
  UPGRADES.md
```

**`/docs/CHANGELOG.md` – regole:**
- Una riga per commit significativo.
- Formato: `YYYY‑MM‑DD – [area] – breve descrizione`.
- Esempio:
  - `2025‑10‑02 – UI/Button – Aggiunta variante "ghost" e ring più visibile.`

**`/docs/DECISIONS.md` – ADR super‑leggere:**
- Quando prendiamo una decisione che impatta design/architettura, aggiungiamo una sezione:
  - **Contesto**, **Opzioni scartate**, **Decisione**, **Conseguenze**.

**`/docs/UPGRADES.md` – modifiche di sistema:**
- Annotiamo aggiornamenti di Next.js/Tailwind, breaking changes, e refactor che toccano le UI primitives.
- Ogni upgrade deve indicare:
  - versione, perché, impatto, checklist test.

**Pull Request Template (consigliato):**
```md
## Cosa cambia
- [ ] Nuova UI / fix / refactor

## Note di design
- [ ] Screenshot prima/dopo
- [ ] Accessibilità (focus, contrasto, motion)

## Docs aggiornate?
- [ ] /docs/components/Button.md
- [ ] CHANGELOG.md
```

> **Principio KISS**: niente tool pesanti di doc; solo `.md` chiari, brevi e navigabili dal repo.

---

## 9) Checklist di adozione rapida
- [ ] Copia i **Design Tokens** in `globals.css`.
- [ ] Incolla i **Base Button Styles** nello stesso file (o `styles/button.css`).
- [ ] Crea `components/ui/Button.tsx` come sopra.
- [ ] Aggiungi `/docs` con i 4 file (`Button.md`, `CHANGELOG.md`, `DECISIONS.md`, `UPGRADES.md`).
- [ ] Fai una PR con screenshot e spunta la checklist.

Bee simple. Buzz clear. Shine bright.
