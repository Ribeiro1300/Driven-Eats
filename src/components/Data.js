const MainDishes = [
  {
    id: 1,
    name: "Hamburguer Artesanal",
    img: "img/hamburguer.jpg",
    description: "O melhor Hamburguer Artesanal do Rio",
    price: 30.9,
  },
  {
    id: 2,
    name: "Yakisoba de Frango",
    img: "img/yakisoba.jpg",
    description: "O melhor Yakisoba do Rio",
    price: 20.9,
  },
  {
    id: 3,
    name: "Pizza de Calabresa",
    img: "img/pizza.jpg",
    description: "O melhor pizza do Rio",
    price: 40.9,
  },
];
const Drinks = [
  {
    id: 4,
    name: "Cerveja Império",
    img: "img/imperio.jpg",
    description: "Cerveja mais gelada do Rio",
    price: 6.9,
  },
  {
    id: 5,
    name: "Refrigerante jesus",
    img: "img/jesus.jpg",
    description: "Refrigerante mais gelado do Rio",
    price: 10.9,
  },
  {
    id: 6,
    name: "Água",
    img: "img/agua.jpg",
    description: "Água mais gelada do Rio",
    price: 4.9,
  },
];
const Deserts = [
  {
    id: 7,
    name: "Açaí",
    img: "img/acai.jpg",
    description: "O melhor Açaí do Rio",
    price: 15.9,
  },
  {
    id: 8,
    name: "Sorvete",
    img: "img/sorvete.jpg",
    description: "O melhor sorvete do Rio",
    price: 10.9,
  },
  {
    id: 9,
    name: "Bolo de Chocolate",
    img: "img/bolo.webp",
    description: "O melhor Bolo do Rio",
    price: 50.9,
  },
];
const Items = [];

const wppTxt = () => {
  let msg = `Olá, gostaria de fazer o pedido:
  `;
  let total = 0;
  Items.map((info) => {
    if (info.type == "MainDishes") {
      msg += `- Prato: ${info.name} (${info.qtd}x)
  `;
      total += info.price * info.qtd;
    }
    if (info.type == "Drinks") {
      msg += `- Bebida: ${info.name} (${info.qtd}x)
  `;
      total += info.price * info.qtd;
    }
    if (info.type == "Deserts") {
      msg += `- Sobremesa: ${info.name} (${info.qtd}x)
  `;
      total += info.price * info.qtd;
    }
  });
  msg += `Total: R$ ${total.toFixed(2)}`;
  let wppMsg = [msg, total.toFixed(2)];
  return wppMsg;
};
export { Deserts, Drinks, MainDishes, Items, wppTxt };
