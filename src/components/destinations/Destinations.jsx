import { DestinationsCardsContainer } from "./DestinationsCardsContainer";
import "../../styles/destinations.css";

export function Destinations() {
  return (
    <>
      <section className="hero">
        <h2>Destinos recomendados</h2>
        <p>
          Nuestra selección, destinos locales e internacionales, que no podés dejar de conocer
        </p>
      </section>

      <section id="destinos">
        <DestinationsCardsContainer />
      </section>
    </>
  );
}