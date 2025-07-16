import { services } from "./servicesData";
import { ServicesCards } from "./ServicesCards";

export function ServicesCardsContainer() {
  return (
    <div className="services-cards-container">
      {services.map((item, index) => (
        <ServicesCards key={index} {...item} />
      ))}
    </div>
  );
}