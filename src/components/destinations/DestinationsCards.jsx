export function DestinationsCards({ titulo, pais, imagen }) {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{pais}</p>
    </div>
  );
}