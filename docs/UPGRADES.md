## 2025-10-02 – UI/Button – Introduzione Waggle Buttons (liquid glass)

Versione
- UI primitives aggiornata; nessun cambio di versione framework.

Perché
- Allineare lo stile dei bottoni al design iOS26-like con effetti glass e accessibilità.

Impatto
- Aggiunte variabili CSS globali; nuove classi `.btn`, `.btn--{variant}`, `.btn--{size}`; nuovo `components/ui/Button.tsx`.

Checklist test
- [x] Hover/Active/Focus ring visibili
- [x] Loading spinner su `aria-busy="true"`
- [x] Dark mode via `prefers-color-scheme`
- [x] Reduced motion rispettato

