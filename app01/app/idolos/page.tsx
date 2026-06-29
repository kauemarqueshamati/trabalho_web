import Link from "next/link";

export default function Idolos() {
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
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          ⭐ Ídolos do São Paulo FC
        </h1>

        <img
          src="/idolos.jpg"
          alt="Ídolos do São Paulo"
          width="700"
          style={{
            borderRadius: "12px",
            maxWidth: "100%",
            height: "auto",
            marginBottom: "25px",
          }}
        />

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify",
          }}
        >
          O São Paulo Futebol Clube possui uma das histórias mais ricas do
          futebol brasileiro. Entre seus maiores ídolos estão
          <strong> Rogério Ceni</strong>, o goleiro com mais gols da história do
          futebol; <strong>Raí</strong>, capitão da conquista da Libertadores e
          do Mundial de 1992; <strong>Diego Lugano</strong>, símbolo de raça e
          liderança; e <strong>Kaká</strong>, revelado nas categorias de base e
          vencedor da Bola de Ouro em 2007.
        </p>

        <Link href="/">
          <button
            style={{
              marginTop: "25px",
              padding: "12px 25px",
              backgroundColor: "#d40000",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ⬅ Voltar para a Página Inicial
          </button>
        </Link>
      </div>
    </main>
  );
}
