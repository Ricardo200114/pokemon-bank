function login() {
  // Obtener los valores del usuario y la contraseña
  var usuario = document.getElementById("U").value;
  var contrasena = document.getElementById("C").value;

  // Verificar si el usuario y la contraseña son correctos
  if (usuario === "Ash Ketchum" && contrasena === "1234") {
    window.location = "index.html";
    alert(
      "Bienvenido " +
        usuario +
        "!" +
        "  Su numero de Cuenta es: 0987654321" +
        "   Y Su Saldo Inicial"
    );
  } else {
    alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
  }
}
