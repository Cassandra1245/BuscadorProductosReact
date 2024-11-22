import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [nombre, setNombre] = useState("");
  const lista = [
    { Elemento : 'Marisco'},
    { Elemento : 'Cerdo'},
    { Elemento : 'Cecina'},
    { Elemento : 'Pescado'},
    { Elemento : 'Frutas'},
    { Elemento : 'Pasteles'}
  ];

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const listaFiltrada = lista.filter((item) => {
    return item.Elemento.toLowerCase().startsWith(nombre.toLowerCase());
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Lista de productos:</p>
        <input type="text"  value={nombre} onChange={handleChange} placeholder="Filtrar por nombre"/>
        <div>
          {listaFiltrada.length > 0 ? (
            listaFiltrada.map((item, index) => (
              <div key={index}>
                <p>{item.Elemento}</p>
              </div>
            ))
          ) : (
            <p>No se contraron elementos.</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
