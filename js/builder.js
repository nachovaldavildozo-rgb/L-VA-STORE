const upload = document.getElementById("upload");
const design = document.getElementById("design");
const product = document.getElementById("product");
const type = document.getElementById("type");
const color = document.getElementById("color");

upload.onchange = e => {
  design.src = URL.createObjectURL(e.target.files[0]);
};

type.onchange = () => {
  product.src = "assets/" + type.value + ".png";
};

color.oninput = () => {
  product.style.filter = `drop-shadow(0 0 0 ${color.value})`;
};

// drag
design.onmousedown = () => {
  document.onmousemove = e => {
    design.style.left = e.pageX + "px";
    design.style.top = e.pageY + "px";
  };
};
