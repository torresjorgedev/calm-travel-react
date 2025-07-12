import { useState } from "react";

export function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
    alert("Mensaje enviado correctamente");
  }

  function handleReset() {
    setNombre("");
    setEmail("");
    setMensaje("");
  }

  return (
    <section>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </section>
  );
}