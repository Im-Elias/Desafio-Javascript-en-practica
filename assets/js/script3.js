let suma = document.querySelector("#btn-sumar");
let resta = document.querySelector("#btn-restar");

suma.addEventListener("click", () => {
  let valor1 = parseFloat(document.querySelector("#valor1").value);
  let valor2 = parseFloat(document.querySelector("#valor2").value);
  document.querySelector(".resultado").innerHTML = valor1 + valor2;
});

resta.addEventListener("click", () => {
  let valor1 = parseFloat(document.querySelector("#valor1").value);
  let valor2 = parseFloat(document.querySelector("#valor2").value);
  if (valor1 - valor2 < 0) {
    document.querySelector(".resultado").innerHTML = 0;
  } else {
    document.querySelector(".resultado").innerHTML = valor1 - valor2;
  }
});
