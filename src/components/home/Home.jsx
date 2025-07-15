import "../../styles/home.css";

export function Home() {
  return (
    <>
      
     {/* <section className="hero">
        <h2>Bienvenido a tu próximo destino</h2>
        <p>Viajá en calma, dejando tus vacaciones en nuestras manos.</p>
      </section>*/}

      <br />

      {/* Carrousel de servicios */}

      <section id="servicios-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img src="/img/flight.jpg" className="d-block w-100 rounded-3" alt="Vuelos" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Vuelos al mejor precio</h3>
              <h4>Conectamos tus destinos soñados</h4>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="4000">
            <img src="/img/hotel.jpg" className="d-block w-100 rounded-3" alt="Hoteles" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Hoteles con encanto</h3>
              <h4>Confort, calidad y precio</h4>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="4000">
            <img src="/img/package.jpeg" className="d-block w-100 rounded-3" alt="Paquetes" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Paquetes Completos</h3>
              <h4>Para que disfrutes sin preocupaciones</h4>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="4000">
            <img src="/img/buceo.jpg" className="d-block w-100 rounded-3" alt="Excursiones" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Excursiones inolvidables</h3>
              <h4>Experiencias únicas en cada destino</h4>
            </div>
          </div>
        </div>

        {/* Botones del carrusel (Ver de anular) */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#servicios-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#servicios-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </section>

      <br />

      
      <section id="destinos-internacionales">
        <h2>Destinos Internacionales más buscados</h2>
        <div className="cards-container">
          <div className="card">
            <img src="/img/barcelona.jpg" alt="Barcelona" />
            <h3>Barcelona</h3>
          </div>
          <div className="card">
            <img src="/img/riodejaneiro.jpg" alt="Riodejaneiro" />
            <h3>Rio de Janeiro</h3>
          </div>
          <div className="card">
            <img src="/img/ny.jpg" alt="NuevaYork" />
            <h3>Nueva York</h3>
          </div>
        </div>
      </section>

      <br />

      
      <section id="destinos-nacionales">
        <h2>Destinos Nacionales más buscados</h2>
        <div className="cards-container">
          <div className="card">
            <img src="/img/iguazu.jpg" alt="Cataratas del Iguazú" />
            <h3>Cataratas del Iguazú</h3>
          </div>
          <div className="card">
            <img src="/img/bariloche.jpg" alt="Bariloche" />
            <h3>Bariloche</h3>
          </div>
          <div className="card">
            <img src="/img/noa.jpg" alt="NOA" />
            <h3>Salta y Jujuy</h3>
          </div>
        </div>
      </section>

      <br />

      {/* Informacion y horarios */}
      <section id="office-info">
        <h2>Nuestra Oficina</h2>
        <div className="info-card">
          <p>
            <strong>Horarios de Atención</strong>
            <br />
            Lunes a Viernes de 10 a 18 hs
          </p>
          <p>
            Calm Travel
            <br />
            Avenida Siempreviva 742
            <br />
            Rosario, Argentina
          </p>
        </div>
      </section>
    </>
  );
}