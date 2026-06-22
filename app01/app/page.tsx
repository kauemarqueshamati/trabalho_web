import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>São Paulo Futebol Clube</h1>

      <img
        src="/escudodosp.jpg"
        width="250"
        alt="Escudo do São Paulo"
      />

      <p>O São Paulo é um dos maiores clubes do Brasil.</p>

      <nav>
        <Link href="/historia">História</Link> |
        <Link href="/titulos"> Títulos</Link> |
        <Link href="/idolos"> Ídolos</Link>
      </nav>
    </main>
  );
}