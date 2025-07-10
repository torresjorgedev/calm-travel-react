import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./components/home";
import { Services } from "./components/Services";
import { Destinations } from "./components/Destinations";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              titulo="Calm Travel"
              subtitulo="Bienvenido a tu próximo destino"
              imagen="https://via.placeholder.com/600x300"
            />
          }
        />
        <Route path="services" element={<Services />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
