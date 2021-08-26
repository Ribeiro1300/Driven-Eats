import React from "react";
export default function Finish() {
  const [btn, setBtn] = React.useState(
    "Selecione os 3 itens para fechar o pedido"
  );
  //   const main = document.querySelector(".MainDishes.opcao.selecionado");
  //   const drink = document.querySelector(".Drink.opcao.selecionado");
  //   const desert = document.querySelector(".Desert.selecionado");
  //   if (main != 0 && drink != 0 && desert != 0) {
  //     setBtn("teste");
  //   }
  return (
    <div className="finalizar">
      <div className="botao">{btn}</div>
    </div>
  );
}
