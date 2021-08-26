export default function Checkout() {
  return (
    <div className="checkout hidden">
      <h2>Revise seu pedido</h2>
      <div class="confirmacaoTitulo">Confirme seu pedido!</div>
      <div class="confirmacaoPrato final">
        <div class="pratoUm"></div>
        <div class="preco1"></div>
      </div>
      <div class="confirmacaoBebida final">
        <div class="pratoDois"></div>
        <div class="preco2"></div>
      </div>
      <div class="confirmacaoSobremesa final">
        <div class="pratoTres"></div>
        <div class="preco3"></div>
      </div>
      <div class="final">
        <div class="total">Total</div>
        <div class="totalPreco"></div>
      </div>
      <div class="botao2" onclick="finalizar()">
        Tudo certo, pode pedir!
      </div>
      <div class="cancel" onclick="cancel()">
        Cancelar
      </div>
    </div>
  );
}
