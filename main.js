function login() {
  //Obtener los valores del usuario y la contraseña
  var usuario = document.getElementById("U").value;
  var contrasena = document.getElementById("C").value;

  //Verificar si el usuario y la contraseña son correctos
  if (usuario === "Ash Ketchum" && contrasena === "1234") {
    swal("Good job!", "You clicked the button!", "success");
    {
      window.location = "index.html";
    }
  } else {
    swal("Oops", "No se ingreso el usuario correcto", "error");
  }
}

function Formula() {
  // Obtener el monto a depositar
  var montoDeposito = document.getElementById("MDpropia").value;

  // Convertir el monto a número
  var monto = parseInt(montoDeposito);

  // Obtener el saldo actual de la cuenta propia
  var saldoCuentaPropia = parseInt(document.getElementById("CP").value);

  // Realizar el depósito sumando el monto al saldo actual
  var nuevoSaldo = saldoCuentaPropia + monto;

  // Actualizar el valor del saldo en el campo de texto
  document.getElementById("CP").value = nuevoSaldo;

  // Mostrar un mensaje de éxito
  alert(
    "Se ha realizado un depósito de $" +
      monto +
      " a la cuenta propia. El saldo actual es de $" +
      nuevoSaldo +
      "."
  );
}
