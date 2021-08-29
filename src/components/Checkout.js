import { Items, wppTxt } from "./Data";

export default function Checkout() {
  const mainOrder = Items.filter((info) => info.type == "MainDishes");
  const drinkOrder = Items.filter((info) => info.type == "Drinks");
  const desertOrder = Items.filter((info) => info.type == "Deserts");
  let priceTotal = 0;
  const total = Items.map((info) => (priceTotal += info.price * info.qtd));

  function closeOrder() {
    const wppMsg = wppTxt();
    const msg = encodeURIComponent(wppMsg[0]);
    window.open(
      "https://api.whatsapp.com/send/?phone=5521971346486&text=" + msg,
      "_blank"
    );
  }
  function back() {
    document.querySelector(".principal").classList.remove("hidden");
    document.querySelector(".finalizar").classList.remove("hidden");
    document.querySelector(".checkout").classList.add("hidden");
  }
  console.log(Items);
  return (
    <div className="checkout hidden">
      <h2>Revise seu pedido</h2>
      <div className="checkoutContainer">
        {mainOrder.map((info) => (
          <div className="order">
            <p>{info.name}</p>
            <p>
              {info.price} (x{info.qtd})
            </p>
          </div>
        ))}
        {drinkOrder.map((info) => (
          <div className="order">
            <p>{info.name}</p>
            <p>
              {info.price} (x{info.qtd})
            </p>
          </div>
        ))}
        {desertOrder.map((info) => (
          <div className="order">
            <p>{info.name}</p>
            <p>
              {info.price} (x{info.qtd})
            </p>
          </div>
        ))}
        <div className="order bold">
          <p>Total</p>
          <p>{priceTotal.toFixed(2)}</p>
        </div>
      </div>
      <div className="botao2" onClick={closeOrder}>
        Tudo certo, pode pedir!
      </div>
      <div className="cancel" onClick={back}>
        Cancelar
      </div>
    </div>
  );
}
