import Link from "next/link";

export default function Historia() {
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
          backgroundColor: "white",
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
            marginBottom: "20px",
            fontSize: "40px",
          }}
        >
          História do São Paulo FC
        </h1>

        <img
          src="simbolo.jpg"
          alt="Escudo do São Paulo"
          width="350"
          style={{
            borderRadius: "10px",
            marginBottom: "20px",
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
          O <strong>São Paulo Futebol Clube</strong> foi fundado em 25 de janeiro
          de 1930 e é um dos clubes mais vencedores do futebol brasileiro.
          Conhecido pelas cores vermelho, branco e preto, o Tricolor Paulista
          conquistou títulos importantes como o Campeonato Brasileiro, a Copa
          Libertadores da América e o Mundial de Clubes da FIFA. Seu estádio,
          o Morumbi, é um dos maiores do Brasil e palco de grandes momentos da
          história do futebol.
        </p>

        <Link href="/">
          <button
            style={{
              marginTop: "25px",
              backgroundColor: "#d40000",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ⬅ Voltar para a Página Inicial
          </button>
        </Link>
      </div>
    </main>
  );
}
