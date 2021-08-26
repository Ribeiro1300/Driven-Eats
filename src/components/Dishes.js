import React from "react";
import { Deserts, Drinks, MainDishes } from "./Data";

export default function Dishes(props) {
  let dish;
  if (props.dish === "Deserts") dish = Deserts;
  if (props.dish === "MainDishes") dish = MainDishes;
  if (props.dish === "Drinks") dish = Drinks;

  const [count, setCount] = React.useState(1);
  return (
    <div class="pratos">
      {dish.map((info) => (
        <div class={props.dish + " opcao"}>
          <img src={info.img} alt="" />
          <h3>{info.name}</h3>
          <p>{info.description}</p>
          <div class="preco">
            <div>
              R$
              <h3>{info.price.toFixed(2)}</h3>
            </div>
            <div className="counter hidden">
              <ion-icon
                name="remove-outline"
                onClick={() => setCount(count - 1)}
              ></ion-icon>
              <p>{count}</p>
              <ion-icon
                name="add-outline"
                onClick={() => setCount(count + 1)}
              ></ion-icon>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
