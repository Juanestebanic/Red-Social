const firebaseConfig = {
    apiKey: "AIzaSyDOO-i99g_zg50I0yvpCwdbVkJClMkrwKM",
    authDomain: "red-social-67cc7.firebaseapp.com",
    databaseURL: "https://red-social-67cc7-default-rtdb.firebaseio.com",
    projectId: "red-social-67cc7",
    storageBucket: "red-social-67cc7.appspot.com",
    messagingSenderId: "612727880762",
    appId: "1:612727880762:web:ce1f02ad0bf68d96114903"
  };
  firebase.initializeApp(firebaseConfig)
  var nombre_usuario = localStorage.getItem("Entrada_texto")
  document.getElementById("h1").innerHTML = "Hola " + nombre_usuario

  function Salir(){
    localStorage.removeItem("Entrada_texto")
    localStorage.removeItem("Entrada_texto2")
    window.location="index.html"
  }

  function Agregar_sala(){
     sala = document.getElementById("Entrada_texto2").value
    firebase.database().ref("/").child(sala).update({contenido:"Informacion de la sala"})
    localStorage.setItem("Entrada_texto2", sala)
    window.location="index3.html"
  }
function lecturaBase(){
  firebase.database().ref("/").on('value', function(funcion){
    document.getElementById("div1").innerHTML = ""
    funcion.forEach(function(funcionDos){
      salas = funcionDos.key
      guardar = "<div id="+ salas +" onclick='div2(this.id)'>" + salas + "</div>"
      document.getElementById("div1").innerHTML +=guardar+"<p></p>"
    })
  })
}
function div2(sala){
localStorage.setItem("Entrada_texto2", sala)
window.location="index3.html"
}

lecturaBase()