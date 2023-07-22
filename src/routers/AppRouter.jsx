import React, { useContext } from "react";
import { Routes, Route, NavLink, BrowserRouter, Link } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Articulos } from "../components/Articulos";
import { Acerca } from "../components/Acerca";
import { Contacto } from "../components/Contacto";
import { Loging } from "../components/Loging";
import { PruebaContext } from "../context/PruebaContext";

export const AppRouter = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);
  return (
    <>
      <BrowserRouter>
        {/* Menu navegacion */}
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/articulos">Artículos</NavLink>
              </li>
              <li>
                <NavLink to="/acercade">Sobre mi</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>

              {usuario.nick !== null ? (
                <>
                  <li>
                    <NavLink to="/">{usuario.nick}</NavLink>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setUsuario({
                          nick: null,
                          nombre: "juan",
                          edad: 40,
                        });
                      }}
                    >
                      Cerrar cesión
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </nav>
        </header>
        {/* configurar rutas */}
        <section className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/acercade" element={<Acerca />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Loging />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>Error: Esta página no existe</h1>
                </div>
              }
            />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
};
