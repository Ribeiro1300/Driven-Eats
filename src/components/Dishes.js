import React from "react";
import { Deserts, Drinks, MainDishes, Items } from "./Data";

function SingleDish(info, props) {
  const [count, setCount] = React.useState(1);
  const [state, setState] = React.useState("");

  function addToCart(dish, name, price) {
    Items.push({ type: dish, name: name, price: price, qtd: 1 });
    props.qtd([...props.category, "um"]);
  }
  function plusOne(name) {
    setCount(count + 1);
    props.qtd([...props.category, "um"]);

    Items.map((info) => {
      if (name == info.name) {
        info.qtd += 1;
      }
    });
  }
  function removeFromCart(dish, name, price, qtd) {
    setCount(count - 1);
    let obj;
    Items.map((info) => {
      if (name == info.name) {
        info.qtd -= 1;
        obj = Items.indexOf(info);
      }
    });
    console.log(obj);
    props.qtd([...props.category.slice(0, -1)]);
    if (count == 1) {
      Items.splice(obj, 1);
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
          addToCart(props.dish, info.name, info.price);
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
              removeFromCart(props.dish, info.name, info.price, info.qtd);
            }}
          ></ion-icon>
          <p>{count}</p>
          <ion-icon
            name="add-outline"
            onClick={() => {
              plusOne(info.name);
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
