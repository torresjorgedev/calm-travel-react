import { Routes, Route, Outlet } from "react-router-dom";
 /*import { Navbar } from "./components/layout/Navbar";*/
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/home/Home";
import { Services } from "./components/services/Services";
import { Destinations } from "./components/destinations/Destinations";
import { Contact } from "./components/contact/Contact";

function Layout() {
  return (
    <>
      <Header />
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
