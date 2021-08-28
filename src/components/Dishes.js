import React from "react";
import { Deserts, Drinks, MainDishes, Items } from "./Data";

function SingleDish(info, props) {
  const [count, setCount] = React.useState(1);
  const [state, setState] = React.useState("");
  function addToCart(name, price) {
    Items.push({ name: name, price: price });
    props.qtd([...props.category, "um"]);
  }
  function removeFromCart(name, price) {
    const obj = { name: name, price: price };
    Items.pop(obj);
    props.qtd([...props.category.slice(0, -1)]);
    if (count == 1) {
      setState("");
      setCount(1);
    }
  }

  return (
    <div
      className={props.dish + " opcao " + state}
      onClick={() => {
        if (state == "") {
          setState("selecionado");
          addToCart(info.name, info.price);
        }
      }}
    >
      <img src={info.img} alt="" />
      <h3>{info.name}</h3>
      <p>{info.description}</p>
      <div className="preco">
        <div>
          R$
          <h3>{info.price.toFixed(2)}</h3>
        </div>
        <div className={"counter " + state}>
          <ion-icon
            name="remove-outline"
            onClick={() => {
              setCount(count - 1);
              removeFromCart(info.name, info.price);
            }}
          ></ion-icon>
          <p>{count}</p>
          <ion-icon
            name="add-outline"
            onClick={() => {
              setCount(count + 1);
              addToCart(info.name, info.price);
            }}
          ></ion-icon>
        </div>
      </div>
    </div>
  );
}
function Dishes(props) {
  let dish;
  if (props.dish === "Deserts") dish = Deserts;
  if (props.dish === "MainDishes") dish = MainDishes;
  if (props.dish === "Drinks") dish = Drinks;

  return (
    <div className="pratos">{dish.map((info) => SingleDish(info, props))}</div>
  );
}
export { Dishes };
