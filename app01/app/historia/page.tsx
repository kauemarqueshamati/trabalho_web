import Link from "next/link";

export default function Historia() {
  return (
    <main>
      <h1>História do São Paulo</h1>

      <img
        src="/escudodosp.jpg"
        width="500"
        alt="Morumbi"
      />

      <p>
        O São Paulo Futebol Clube foi fundado em 1930 e é um dos clubes mais
        tradicionais do país.
      </p>

      <Link href="/">Voltar</Link>
    </main>
  );
}