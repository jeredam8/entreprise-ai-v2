/** Two interlocking strokes: the E connects a company with its provider. */
export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
      <path d="M32 7H9v26h23v-7H16V14h16Z" fill={light ? "#fff" : "#0f4f47"} />
      <path d="M19 17h13v6H19Z" fill={light ? "#a6d9d1" : "#14766d"} />
    </svg>
  );
}
