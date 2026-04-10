const phone = "59164030721";

let msg = "Pedido LOVA:%0A";

cart.forEach(p => {
  msg += `- ${p.type} (${p.size})%0A`;
});

window.open(`https://wa.me/${phone}?text=${msg}`);
