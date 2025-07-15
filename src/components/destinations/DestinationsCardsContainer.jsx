import { Card } from "./DestinationsCards";

export function CardsContainer() {
  const tours = [
    {
      titulo: "Tour en la montaña",
      imagen: "https://via.placeholder.com/400x200?text=Montaña",
      descripcion: "Una experiencia única en la naturaleza."
    },
    {
      titulo: "City Tour urbano",
      imagen: "https://via.placeholder.com/400x200?text=Ciudad",
      descripcion: "Recorrido por las mejores ciudades del mundo."
    },
    {
      titulo: "Viaje a la playa",
      imagen: "https://via.placeholder.com/400x200?text=Playa",
      descripcion: "Relajate frente al mar como te merecés."
    }
  ];

  return (
    <section className="cards-container">
      {tours.map((tour, index) => (
        <Card
          key={index}
          titulo={tour.titulo}
          imagen={tour.imagen}
          descripcion={tour.descripcion}
        />
      ))}
    </section>
  );
}