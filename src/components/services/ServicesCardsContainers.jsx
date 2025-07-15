import { ServicesCards } from "./ServicesCards";

export function ServicesCardsContainer() {
  const servicios = [
    {
      titulo: "Seguro de Asistencia",
      descripcion: "Protección médica internacional."
    },
    {
      titulo: "Alquiler de Vehículos",
      descripcion: "Autos cómodos para tu viaje."
    },
    {
      titulo: "Actividades en Destino",
      descripcion: "Excursiones, tours y más."
    },
    {
      titulo: "Seguro de Equipaje",
      descripcion: "Protegé tus pertenencias."
    }
  ];

  return (
    <section className="services-container">
      {servicios.map((servicio, index) => (
        <ServicesCards
          key={index}
          titulo={servicio.titulo}
          descripcion={servicio.descripcion}
        />
      ))}
    </section>
  );
}