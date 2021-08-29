import { Dishes } from "./Dishes";
import Checkout from "./Checkout";
import React from "react";
export default function App() {
  const [mainCounter, setMainCounter] = React.useState([]);
  const [drinksCounter, setDrinksCounter] = React.useState([]);
  const [desertsCounter, setDesertsCounter] = React.useState([]);

  let customStyle = { backgroundColor: null };
  let btn2 = "Selecione os 3 itens para fechar o pedido";
  if (
    mainCounter.length != 0 &&
    drinksCounter.length != 0 &&
    desertsCounter.length != 0
  ) {
    btn2 = "Fechar pedido";
    customStyle.backgroundColor = "green";
  }

  function teste() {
    document.querySelector(".principal").classList.add("hidden");
    document.querySelector(".checkout").classList.remove("hidden");
  }
  return (
    <>
      <div className="topo">
        <div className="titulo">
          <h1>DrivenEats</h1>
          <p>Sua comida em 6 minutos</p>
        </div>
      </div>
      <div className="principal">
        <h2>Primeiro, seu prato</h2>
        <Dishes dish="MainDishes" qtd={setMainCounter} category={mainCounter} />
        <h2>Agora, sua bebida</h2>
        <Dishes dish="Drinks" qtd={setDrinksCounter} category={drinksCounter} />
        <h2>Por fim, sua sobremesa</h2>
        <Dishes
          dish="Deserts"
          qtd={setDesertsCounter}
          category={desertsCounter}
        />
      </div>
      <Checkout />
      <div className="finalizar">
        <div className="botao" style={customStyle} onClick={teste}>
          {btn2}
        </div>
      </div>
    </>
  );
}
