import Dishes from "./Dishes";
export default function App() {
  return (
    <body>
      <div class="topo">
        <div class="titulo">
          <h1>DrivenEats</h1>
          <p>Sua comida em 6 minutos</p>
        </div>
      </div>
      <div class="principal">
        <h2>Primeiro, seu prato</h2>
        <Dishes dish="MainDishes" />
        <h2>Agora, sua bebida</h2>
        <Dishes dish="Drinks" />
        <h2>Por fim, sua sobremesa</h2>
        <Dishes dish="Deserts" />
      </div>
      <div class="finalizar">
        <div class="botao">Selecione os 3 itens para fechar o pedido</div>
      </div>
    </body>
  );
}
