export function Home({ titulo, subtitulo, imagen }) {
  return (
    <section>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <img src={imagen} alt="Imagen principal" />
    </section>
  );
} 