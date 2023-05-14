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
  // local storage
  localStorage.setItem("nuevoSaldo", nuevoSaldo);

  // Actualizar el valor del saldo en el campo de texto
  document.getElementById("CP").value = nuevoSaldo;

  // local storage
  var storedNuevoSaldo = localStorage.getItem("nuevoSaldo");
  if (storedNuevoSaldo) {
    document.getElementById("CP").value = storedNuevoSaldo;
  }

  // Mostrar un mensaje de éxito
  alert(
    "Se ha realizado un depósito de $" +
      monto +
      " a la cuenta propia. El saldo actual es de $" +
      nuevoSaldo +
      "."
  );
}

function DepositoTarjeta() {
  // Obtener el valor de la tarjeta de crédito
  var tarjeta = parseFloat(document.getElementById("TC").value);

  // Obtener el monto a depositar
  var deposito = parseFloat(document.getElementById("MDTarjete").value);

  // Verificar si el monto a depositar es válido
  if (isNaN(deposito) || deposito <= 0) {
    alert("Ingrese un monto válido para el depósito.");
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
  alert("Depósito realizado correctamente. Nuevo saldo: " + saldo);
}

function Prestamo1() {
  // Obtener el monto a depositar
  var montoDeposito = document.getElementById("MDpropia").value;

  // Convertir el monto a número
  var monto = parseInt(montoDeposito);

  // Obtener el saldo actual de la cuenta propia
  var saldoCuentaPropia = parseInt(document.getElementById("CP").value);

  // Realizar el depósito sumando el monto al saldo actual
  var nuevoSaldo = saldoCuentaPropia + monto;

  // Local Storage
  localStorage.setItem("nuevoSaldo", nuevoSaldo);

  // Actualizar el valor del saldo en el campo de texto
  document.getElementById("CP").value = nuevoSaldo;

  // local Storage
  var storedNuevoSaldo = localStorage.getItem("nuevoSaldo");
  if (storedNuevoSaldo) {
    document.getElementById("CP").value = storedNuevoSaldo;
  }
  // Mostrar un mensaje de éxito
  alert(
    "Se ha realizado un Abono de $" +
      monto +
      " al prestamo. El saldo actual es de $" +
      nuevoSaldo +
      "."
  );
}
////// RETIROS ///////

function RetiroCorriente() {
  // Obtener el valor del retiro de cuenta corriente
  var retiro = parseInt(document.getElementById("RetiroCcorriente").value);

  // Obtener el monto a depositar
  var deposito = parseInt(document.getElementById("MDcorriente").value);

  // Verificar si el monto a depositar es válido
  if (isNaN(deposito) || deposito <= 0) {
    alert("Ingrese un monto válido para el depósito.");
    return;
  }

  // Verificar si el retiro es mayor o igual al monto a depositar
  if (retiro < deposito) {
    alert("El monto de retiro debe ser igual o mayor al monto a depositar.");
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
  alert("Retiro realizado correctamente. Nuevo saldo: " + saldo);
}

function RetiroTarjeta() {
  // Obtener el valor del retiro de la tarjeta de crédito
  var retiro = parseFloat(document.getElementById("Rtarjeta").value);

  // Obtener el monto a retirar
  var retiroCantidad = parseFloat(document.getElementById("MRtarjeta").value);

  // Verificar si el monto a retirar es válido
  if (isNaN(retiroCantidad) || retiroCantidad <= 0) {
    alert("Ingrese un monto válido para el retiro.");
    return;
  }

  // Verificar si el retiro es mayor o igual al monto a retirar
  if (retiro < retiroCantidad) {
    alert("El monto de retiro debe ser igual o mayor al monto a retirar.");
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
  alert("Retiro realizado correctamente. Nuevo saldo: " + saldo);
}
//alvaro

function caess() {
 // Obtener el monto a pagar  y NPE
 var depocaess = document.getElementById("pago1").value;
 var NPECAESS= document.getElementById('NPE1').value;
 // Convertir el monto a número
 var pagocaess= parseInt(depocaess);
 var NPE1=parseInt(NPECAESS);
 
 // Obtener el saldo actual de la cuenta propia
 var saldoCuentaPropia = parseInt(document.getElementById("CP").value);

 // Realizar el pago  restando el monto al saldo actual
 var nuevoSaldo = saldoCuentaPropia - pagocaess ;

 // Local Storage
 localStorage.setItem("nuevoSaldo", nuevoSaldo);

 // Actualizar el valor del saldo en el campo de texto
 document.getElementById("CP").value = nuevoSaldo;

 // local Storage
 var storedNuevoSaldo = localStorage.getItem("nuevoSaldo");
 if (storedNuevoSaldo) {
   document.getElementById("CP").value = storedNuevoSaldo;
 }
 if (isNaN(pagocaess) || nuevoSaldo<= 0) {
  alert("usted no cuenta con suficiente saldo para realizar este pago");
  return;
}
 // Mostrar un mensaje de éxito
 alert(
  "Se ha realizado un pago de $" +
    pagocaess +
    " al NPE:" +
    NPE1 +  " .El saldo actual es de $" +
    nuevoSaldo +
    "."
 );
 
}
function ANDA() {
  // Obtener el monto a pagar  y NPE
  var depoanda = document.getElementById("pago2").value;
  var NPEanda= document.getElementById('NPE2').value;
  // Convertir el monto a número
  var pagoanda= parseInt(depoanda);
  var NPE2=parseInt(NPEanda);
  
  // Obtener el saldo actual de la cuenta propia
  var saldoCuentaPropia = parseInt(document.getElementById("CP").value);
 
  // Realizar el pago  restando el monto al saldo actual
  var nuevoSaldo = saldoCuentaPropia - pagoanda ;
 
  // Local Storage
  localStorage.setItem("nuevoSaldo", nuevoSaldo);
 
  // Actualizar el valor del saldo en el campo de texto
  document.getElementById("CP").value = nuevoSaldo;
 
  // local Storage
  var storedNuevoSaldo = localStorage.getItem("nuevoSaldo");
  if (storedNuevoSaldo) {
    document.getElementById("CP").value = storedNuevoSaldo;
  }
  if (isNaN(pagoanda) || nuevoSaldo<= 0) {
   alert("usted no cuenta con suficiente saldo para realizar este pago");
   return;
 }
  // Mostrar un mensaje de éxito
  alert(
   "Se ha realizado un pago de $"  +
     pagoanda  +
     " al NPE :" +
     NPE2  +  " .El saldo actual es de $ " +
     nuevoSaldo  +
     "."
  );
 
  
 }
 




 


