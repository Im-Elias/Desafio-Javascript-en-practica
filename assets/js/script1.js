let form = document.querySelector("#formulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  limpiaErrores();

  let txtNombre = document.querySelector("#nombre").value;
  let txtAsunto = document.querySelector("#asunto").value;
  let txtMensaje = document.querySelector("#mensaje").value;

  let resultado = validar(txtNombre, txtAsunto, txtMensaje);

  if (resultado) {
    document.querySelector(".resultado").innerHTML =
      "Mensaje enviado con éxito!!!";
  }
});

const limpiaErrores = () => {
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
  document.querySelector(".resultado").innerHTML = "";
};

const validar = (nombre, asunto, mensaje) => {
  let validacion = true;

  let patronNombre = /[a-z]/gim;
  if (!patronNombre.test(nombre)) {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
    validacion = false;
  }

  let patronAsunto = /[a-z]/gim;
  if (!patronAsunto.test(asunto)) {
    document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
    validacion = false;
  }

  let patronMensaje = /[a-z]/gim;
  if (!patronMensaje.test(mensaje)) {
    document.querySelector(".errorMensaje").innerHTML =
      "El mensaje es requerido";
    validacion = false;
  }
  return validacion;
};
