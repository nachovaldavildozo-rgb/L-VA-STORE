const phone = "59164030721";

let msg = "Pedido LOVA:%0A";

cart.forEach(p => {
  msg += `- ${p.type} (${p.size})%0A`;
});

window.open(`https://wa.me/${phone}?text=${msg}`);
const container = document.getElementById("cartItems");

if (container) {

  let total = 0;

  cart.forEach((p, index) => {

    const div = document.createElement("div");

    div.className = "card p-4";

    div.innerHTML = `
      <p><strong>Tipo:</strong> ${p.type}</p>
      <p><strong>Talla:</strong> ${p.size}</p>
      <p><strong>Precio:</strong> 100 Bs</p>
      <button onclick="removeItem(${index})">❌ Eliminar</button>
    `;

    total += 100;

    container.appendChild(div);
  });

  document.getElementById("total").innerText = "Total: " + total + " Bs";
}
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
