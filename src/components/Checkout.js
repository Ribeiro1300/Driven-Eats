import { Items } from "./Data";

export default function Checkout() {
  const mainOrder = Items.filter((info) => info.type == "MainDishes");
  const drinkOrder = Items.filter((info) => info.type == "Drinks");
  const desertOrder = Items.filter((info) => info.type == "Deserts");
  let priceTotal = 0;
  const total = Items.map((info) => (priceTotal += info.price));

  return (
    <div className="checkout hidden">
      <h2>Revise seu pedido</h2>
      <div className="checkoutContainer">
        {mainOrder.map((info) => (
          <div className="order">
            <p>{info.name}</p>
            <p>{info.price}</p>
          </div>
        ))}
        {drinkOrder.map((info) => (
          <div className="order">
            <p>{info.name}</p>
            <p>{info.price}</p>
          </div>
        ))}
        {desertOrder.map((info) => (
          <div className="order">
            <p>{info.name}</p>
            <p>{info.price}</p>
          </div>
        ))}
        <div className="order bold">
          <p>Total</p>
          <p>{priceTotal.toFixed(2)}</p>
        </div>
      </div>
      <div className="botao2" onClick="finalizar()">
        Tudo certo, pode pedir!
      </div>
      <div className="cancel" onClick="cancel()">
        Cancelar
      </div>
    </div>
  );
}
