import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Inicio = () => {
  const compartido = useContext(PruebaContext);
  return (
    <div>
      <h1>Inicio</h1>
      <p>Página de inicio</p>
      {/* <p>{compartido.titulo}</p>
      <p>{compartido.contenido}</p> */}
    </div>
  );
};
