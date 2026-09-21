import { ImageResponse } from "next/og";
export const alt = "Entreprise.ai — Trouvez le bon prestataire IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 72,
          color: "#111827",
          borderBottom: "20px solid #0f4f47",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 36,
            color: "#0f4f47",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 40 40">
            <path d="M32 7H9v26h23v-7H16V14h16Z" fill="#0f4f47" />
            <path d="M19 17h13v6H19Z" fill="#14766d" />
          </svg>
          Entreprise.ai
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            marginTop: 60,
            lineHeight: 1.1,
          }}
        >
          Trouvez le bon prestataire IA pour votre entreprise.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#4b5563",
            marginTop: 30,
          }}
        >
          Agences · Consultants · Intégrateurs · Formateurs
        </div>
      </div>
    ),
    size,
  );
}
