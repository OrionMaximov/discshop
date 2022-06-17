import Menu from "./conponents/Menu/Menu";
import Produit from "./conponents/Produit/Produit";
import Panier from "./conponents/Panier/Panier";
import React, { useState } from 'react';
import "./conponents/Panier/Panier.css";
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  let hide = !show
  function handleClick() {
    setShow(hide);
  }
  

  return (
    <div className="App">
      <header>
        <Menu action={() => { handleClick() }} />
      </header>
      <main>
        <Produit />
        {show ? <Panier /> : ""}
      </main>
    </div>
  );
}

export default App;
