import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Contacto = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);
  return (
    <div>
      <h1>Contacto</h1>
      <p>Página sobre contacto</p>
      <p>Nombre: {usuario.nombre}</p>
      <p>Edad: {usuario.edad} años</p>
    </div>
  );
};
