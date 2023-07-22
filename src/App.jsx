import { useState } from "react";
import "./App.css";
import { PruebaContext } from "./context/PruebaContext";
import { AppRouter } from "./routers/AppRouter";

function App() {
  const [usuario, setUsuario] = useState({
    nick: "@bechara0",
    nombre: "juan",
    edad: 40,
  });
  // const curso = {
  //   id: 1,
  //   titulo: "Master en TypeScrypt",
  //   contenido: "un monton",
  // };
  return (
    <>
      <h1>Aprendiendo useContext</h1>
      <PruebaContext.Provider
        value={{
          usuario,
          setUsuario,
        }}
      >
        <AppRouter />
      </PruebaContext.Provider>
    </>
  );
}

export default App;
