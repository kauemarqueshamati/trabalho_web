import Link from "next/link";

export default function Titulos() {
  return (
    <main>
      <h1>Principais Títulos</h1>

      <img
        src="/1.jpg"
        width="400"
        alt="Taça"
      />

      <ul>
        <li>3 Libertadores</li>
        <li>3 Mundiais</li>
        <li>6 Campeonatos Brasileiros</li>
        <li>1 Copa do Brasil</li>
      </ul>

      <Link href="/">Voltar</Link>
    </main>
  );
}