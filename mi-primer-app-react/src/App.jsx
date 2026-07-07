import { useState } from "react";
import "./App.css";

function App() {
  const [countPerTwo, setCountPerTwo] = useState(0);

  return (
    <>
      <h1> Hola Mundo desde React - P3</h1>

      <div>
        Este es un ejemplo utilizando estado en react
        <div>El valor actual del contador es {countPerTwo}</div>
        <button onClick={() => setCountPerTwo((prev) => prev + 2)}>
          Sumar 2
        </button>
      </div>
    </>
  );
}

export default App;
