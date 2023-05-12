function Prestamo1() {
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
    "Se ha realizado un Abono de $" +
      monto +
      " al prestamo. El saldo actual es de $" +
      nuevoSaldo +
      "."
  );
}
