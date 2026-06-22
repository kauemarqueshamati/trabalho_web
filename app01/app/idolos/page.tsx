import Link from "next/link";

export default function Idolos() {
  return (
    <main>
      <h1>Ídolos do São Paulo</h1>

      <img
        src="/idolos.jpg"
        width="300"
        alt="Rogério Ceni"
      />

      <p>
        Rogério Ceni, Raí, Lugano e Kaká são alguns dos maiores ídolos do clube.
      </p>

      <Link href="/">Voltar</Link>
    </main>
  );
}