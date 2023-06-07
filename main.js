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

function generateReceipt(...fields) {
  const { jsPDF } = window.jspdf;
  var doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Banco Pokemón", 10, 10);

  doc.setFontSize(10);

  fields.forEach((field, index) => {
    doc.text(field.toString(), 10, 20 + index * 10);
  });

  doc.save("recibo.pdf");
}

function DepositoCuentaPropia() {
  // Obtener el monto a depositar
  var montoDeposito = document.getElementById("MDpropia").value;

  // Validar si el monto de depósito es un número
  if (isNaN(montoDeposito)) {
    // Mostrar un mensaje de error
    swal("Error", "Ingrese un monto válido", "error");
    return;
  }

  // Convertir el monto a número
  var monto = parseInt(montoDeposito);

  // Obtener el saldo actual de la cuenta propia
  var saldoCuentaPropia = parseInt(document.getElementById("CP").value);

  // Realizar el depósito sumando el monto al saldo actual
  var nuevoSaldo = saldoCuentaPropia + monto;

  // Actualizar el valor del saldo en el campo de texto
  document.getElementById("CP").value = nuevoSaldo;

  // local storage
  localStorage.setItem("nuevoSaldo", nuevoSaldo);

  // Mostrar un mensaje de éxito
  swal("¡Exitoso!", "Depósito recibido", "success").then((value) => {
    generateReceipt(
      "Referencia: 123456789",
      "Depósito a cuenta propia",
      `Monto: $${monto}`,
      `Saldo: $${nuevoSaldo}`,
      `Fecha: ${new Date().toLocaleDateString()}`
    );
  });
}

function DepositoTarjetaCredito() {
  // Obtener el valor de la tarjeta de crédito
  var tarjeta = parseFloat(document.getElementById("TC").value);

  // Obtener el monto a depositar
  var deposito = parseFloat(document.getElementById("MDTarjete").value);

  // Verificar si el monto a depositar es válido
  if (isNaN(deposito) || deposito <= 0) {
    swal("Error", "Ingrese un monto válido", "error");
    return;
  }
  // Calcular el saldo después del depósito
  var saldo = tarjeta + deposito;

  // Local Storage
  localStorage.setItem("saldoTarjeta", saldo);

  // Actualizar el valor de la tarjeta en la interfaz
  document.getElementById("TC").value = saldo;

  // Local Storage
  var storedSaldo = localStorage.getItem("saldoTarjeta");
  if (storedSaldo) {
    document.getElementById("TC").value = storedSaldo;
  }

  // Mostrar un mensaje de éxito
  swal("¡Exitoso!", "Depósito recibido", "success").then((value) => {
    generateReceipt(
      "Referencia: 123456789",
      "Depósito a tarjeta de crédito",
      `Monto: $${deposito}`,
      `Saldo: $${saldo}`,
      `Fecha: ${new Date().toLocaleDateString()}`
    );
  });
}

function DepositoPrestamoBancario() {
  // Obtener el monto a depositar
  var montoDeposito = document.getElementById("MDpropia").value;

  // Validar si el monto de depósito es un número
  if (isNaN(montoDeposito)) {
    // Mostrar un mensaje de error
    swal("¡Error!", "Ingrese un monto válido", "error");
    return;
  }

  // Convertir el monto a número
  var monto = parseInt(montoDeposito);

  // Obtener el saldo actual de la cuenta propia
  var saldoCuentaPropia = parseInt(document.getElementById("CP").value);

  // Realizar el depósito sumando el monto al saldo actual
  var nuevoSaldo = saldoCuentaPropia - monto;

  // Local Storage
  localStorage.setItem("nuevoSaldo", nuevoSaldo);

  // Actualizar el valor del saldo en el campo de texto
  document.getElementById("CP").value = nuevoSaldo;

  // Local Storage
  var storedNuevoSaldo = localStorage.getItem("nuevoSaldo");
  if (storedNuevoSaldo) {
    document.getElementById("CP").value = storedNuevoSaldo;
  }

  // Mostrar un mensaje de éxito
  swal(
    "¡Exitoso!",
    "Se ha realizado un Abono de $" +
      monto +
      " al préstamo. El saldo actual es de $" +
      nuevoSaldo +
      ".",
    "success"
  ).then((value) => {
    generateReceipt(
      "Referencia: 123456789",
      "Depósito a préstamo bancario",
      `Monto: $${monto}`,
      `Saldo: $${nuevoSaldo}`,
      `Fecha: ${new Date().toLocaleDateString()}`
    );
  });
}

////// RETIROS ///////

function RetiroCorriente() {
  // Obtener el valor del retiro de cuenta corriente
  var retiro = parseInt(document.getElementById("RetiroCcorriente").value);

  // Obtener el monto a depositar
  var deposito = parseInt(document.getElementById("MDcorriente").value);

  // Verificar si el monto a depositar es válido
  if (isNaN(deposito) || deposito <= 0) {
    swal("¡Error!", "Ingrese un monto válido para el depósito.", "error");
    return;
  }

  // Verificar si el retiro es mayor o igual al monto a depositar
  if (retiro < deposito) {
    swal(
      "¡Alerta!",
      "El monto de retiro debe ser igual o mayor al monto a depositado.",
      "warning"
    );
    return;
  }

  // Calcular el saldo después del retiro
  var saldo = retiro - deposito;

  //local Storage
  localStorage.setItem("saldoCorriente", saldo);

  // Actualizar el valor del retiro en la interfaz
  document.getElementById("RetiroCcorriente").value = saldo;

  // local storage
  var storedSaldo = localStorage.getItem("saldoCorriente");
  if (storedSaldo) {
    document.getElementById("RetiroCcorriente").value = storedSaldo;
  }

  // Mostrar un mensaje de éxito
  swal(
    "¡Exitoso!",
    "Retiro realizado correctamente. Nuevo saldo: " + saldo,
    "success"
  ).then((value) => {
    generateReceipt(
      "Referencia: 123456789",
      "Retiro de cuenta corriente",
      `Monto: $${deposito}`,
      `Saldo: $${saldo}`,
      `Fecha: ${new Date().toLocaleDateString()}`
    );
  });
}

function RetiroTarjeta() {
  // Obtener el valor del retiro de la tarjeta de crédito
  var retiro = parseFloat(document.getElementById("Rtarjeta").value);

  // Obtener el monto a retirar
  var retiroCantidad = parseFloat(document.getElementById("MRtarjeta").value);

  // Verificar si el monto a retirar es válido
  if (isNaN(retiroCantidad) || retiroCantidad <= 0) {
    swal("¡Error!", "Ingrese un monto válido para el retiro.", "error");
    return;
  }

  // Verificar si el retiro es mayor o igual al monto a retirar
  if (retiro < retiroCantidad) {
    swal(
      "¡Alerta!",
      "El monto de retiro debe ser igual o mayor al monto a depositado.",
      "warning"
    );
    return;
  }

  // Calcular el saldo después del retiro
  var saldo = retiro - retiroCantidad;

  //Local Storage
  localStorage.setItem("saldoTarjeta", saldo);

  // Actualizar el valor del retiro en la interfaz
  document.getElementById("Rtarjeta").value = saldo;

  //Local Storage
  var storedSaldo = localStorage.getItem("saldoTarjeta");
  if (storedSaldo) {
    document.getElementById("Rtarjeta").value = storedSaldo;
  }

  // Mostrar un mensaje de éxito
  swal(
    "¡Exitoso!",
    "Retiro realizado correctamente. Nuevo saldo: " + saldo,
    "success"
  ).then((value) => {
    generateReceipt(
      "Referencia: 123456789",
      "Retiro de tarjeta de crédito",
      `Monto: $${retiroCantidad}`,
      `Saldo: $${saldo}`,
      `Fecha: ${new Date().toLocaleDateString()}`
    );
  });
}
//alvaro

function ServicioColegiatura() {
  // Obtener el monto a pagar  y Cuenta
  var numeroCuenta = document.getElementById("numeroCuenta").value;
  var monto = document.getElementById("monto").value;

  swal("¡Exitoso!", "Pago realizado correctamente", "success").then((value) => {
    generateReceipt(
      "Referencia: 123456789",
      "Pago de colegiatura",
      `Cuenta: ${numeroCuenta}`,
      `Monto: $${monto}`,
      `Fecha: ${new Date().toLocaleDateString()}`
    );
  });
}

function ServicioCaess() {
  // Obtener el monto a pagar  y NPE
  var depocaess = document.getElementById("pago1").value;
  var NPECAESS = document.getElementById("NPE1").value;
  // Convertir el monto a número
  var pagocaess = parseInt(depocaess);
  var NPE1 = parseInt(NPECAESS);

  // Obtener el saldo actual de la cuenta propia
  var saldoCuentaPropia = parseInt(document.getElementById("CP").value);

  // Realizar el pago  restando el monto al saldo actual
  var nuevoSaldo = saldoCuentaPropia - pagocaess;

  // Local Storage
  localStorage.setItem("nuevoSaldo", nuevoSaldo);

  // Actualizar el valor del saldo en el campo de texto
  document.getElementById("CP").value = nuevoSaldo;

  // local Storage
  var storedNuevoSaldo = localStorage.getItem("nuevoSaldo");
  if (storedNuevoSaldo) {
    document.getElementById("CP").value = storedNuevoSaldo;
  }
  if (isNaN(pagocaess) || nuevoSaldo <= 0) {
    swal(
      "¡Error!",
      "Usted no cuenta con suficiente saldo para realizar este pago",
      "error"
    );
    return;
  }
  // Mostrar un mensaje de éxito
  swal(
    "¡Exitoso!",
    "Se ha realizado un pago de $" +
      pagocaess +
      " al NPE:" +
      NPE1 +
      " .El saldo actual es de $" +
      nuevoSaldo +
      ".",
    "success"
  ).then((value) => {
    generateReceipt(
      "Referencia: 123456789",
      "Pago de CAESS",
      `NPE: ${NPE1}`,
      `Monto: $${pagocaess}`,
      `Saldo: $${nuevoSaldo}`,
      `Fecha: ${new Date().toLocaleDateString()}`
    );
  });
}
function ServicioANDA() {
  // Obtener el monto a pagar  y NPE
  var depoanda = document.getElementById("pago2").value;
  var NPEanda = document.getElementById("NPE2").value;
  // Convertir el monto a número
  var pagoanda = parseInt(depoanda);
  var NPE2 = parseInt(NPEanda);

  // Obtener el saldo actual de la cuenta propia
  var saldoCuentaPropia = parseInt(document.getElementById("CP").value);

  // Realizar el pago  restando el monto al saldo actual
  var nuevoSaldo = saldoCuentaPropia - pagoanda;

  // Local Storage
  localStorage.setItem("nuevoSaldo", nuevoSaldo);

  // Actualizar el valor del saldo en el campo de texto
  document.getElementById("CP").value = nuevoSaldo;

  // local Storage
  var storedNuevoSaldo = localStorage.getItem("nuevoSaldo");
  if (storedNuevoSaldo) {
    document.getElementById("CP").value = storedNuevoSaldo;
  }
  if (isNaN(pagoanda) || nuevoSaldo <= 0) {
    swal(
      "¡Error!",
      "Usted no cuenta con suficiente saldo para realizar este pago",
      "error"
    );
    return;
  }
  // Mostrar un mensaje de éxito
  swal(
    "¡Exitoso!",
    "Se ha realizado un pago de $" +
      pagoanda +
      " al NPE :" +
      NPE2 +
      " .El saldo actual es de $ " +
      nuevoSaldo +
      ".",
    "success"
  ).then((value) => {
    generateReceipt(
      "Referencia: 123456789",
      "Pago de ANDA",
      `NPE: ${NPE2}`,
      `Monto: $${pagoanda}`,
      `Saldo: $${nuevoSaldo}`,
      `Fecha: ${new Date().toLocaleDateString()}`
    );
  });
}

function ServicioClaro() {
  // Obtener el monto a pagar  y Cuenta
  var numeroCuenta = document.getElementById("phone").value;
  var monto = document.getElementById("monto").value;

  swal("¡Exitoso!", "Pago realizado correctamente", "success").then((value) => {
    generateReceipt(
      "Referencia: 123456789",
      "Pago de servicio Claro",
      `Cuenta: ${numeroCuenta}`,
      `Monto: $${monto}`,
      `Fecha: ${new Date().toLocaleDateString()}`
    );
  });
}
