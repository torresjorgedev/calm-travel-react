export function Card({ titulo, imagen, descripcion }) {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}