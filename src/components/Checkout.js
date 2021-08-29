import { Items } from "./Data";

export default function Checkout() {
  const mainOrder = Items.filter((info)=>info.name);
  return (
    <div className="checkout hidden">
      <h2>Revise seu pedido</h2>
      <div className="confirmacaoTitulo">Confirme seu pedido!</div>
      <div className="confirmacaoPrato final">
        <div className="pratoUm"></div>
        <div className="preco1"></div>
      </div>
      <div className="confirmacaoBebida final">
        <div className="pratoDois"></div>
        <div className="preco2"></div>
      </div>
      <div className="confirmacaoSobremesa final">
        <div className="pratoTres"></div>
        <div className="preco3"></div>
      </div>
      <div className="final">
        <div className="total">Total</div>
        <div className="totalPreco"></div>
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
