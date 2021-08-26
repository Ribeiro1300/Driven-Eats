import React from "react";
export default function Finish() {
  const [btn, setBtn] = React.useState(
    "Selecione os 3 itens para fechar o pedido"
  );
  return (
    <div className="finalizar">
      <div className="botao">{btn}</div>
    </div>
  );
}
