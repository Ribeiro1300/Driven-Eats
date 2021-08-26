import Dishes from "./Dishes";
import Checkout from "./Checkout";
export default function App() {
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
        <Dishes dish="MainDishes" />
        <h2>Agora, sua bebida</h2>
        <Dishes dish="Drinks" />
        <h2>Por fim, sua sobremesa</h2>
        <Dishes dish="Deserts" />
      </div>
      <Finish />
    </>
  );
}
