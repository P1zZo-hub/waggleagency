## 2025-10-02 – UI/Button – Adozione stile "liquid glass"

Contesto
- Necessità di uniformare i bottoni con un look moderno, performante e accessibile.

Opzioni scartate
- Librerie UI pesanti; gradienti con immagini; JS per effetti di luce.

Decisione
- Implementare bottoni "liquid glass" in CSS puro con varianti `primary`, `secondary`, `ghost` e sizes `sm`, `md`, `lg`. Creare `components/ui/Button.tsx` e classi `.btn*` in SCSS.

Conseguenze
- Riduzione dipendenze, coerenza visiva, migliore accessibilità. Refactor dei vecchi `.rv-button` verso `.btn`.

