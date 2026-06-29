import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          maxWidth: "800px",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#d40000",
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
         São Paulo Futebol Clube
        </h1>

        <img
          src="/escudodosp.jpg"
          alt="Escudo do São Paulo"
          width="450"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "25px",
          }}
        />

        <p
          style={{
            fontSize: "18px",
            color: "#333",
            lineHeight: "1.8",
            textAlign: "justify",
          }}
        >
          Bem-vindo ao site sobre o <strong>São Paulo Futebol Clube</strong>,
          um dos maiores e mais tradicionais clubes do futebol brasileiro.
          Aqui você poderá conhecer a história do Tricolor Paulista, seus
          principais títulos e alguns dos maiores ídolos que marcaram gerações
          de torcedores.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/historia">
            <button
              style={{
                backgroundColor: "#d40000",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              📖 História
            </button>
          </Link>

          <Link href="/titulos">
            <button
              style={{
                backgroundColor: "#111",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              🏆 Títulos
            </button>
          </Link>

          <Link href="/idolos">
            <button
              style={{
                backgroundColor: "#666",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              ⭐ Ídolos
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
