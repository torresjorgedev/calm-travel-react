import { Routes, Route, Outlet } from "react-router-dom";

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
      <div className="page-container">
        <Outlet />
      </div>
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
            <Home/>
          }
        />
        <Route path="services" element={<Services />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
