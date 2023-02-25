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
  function Salir(){
    localStorage.removeItem("Entrada_texto")
    localStorage.removeItem("Entrada_texto2")
    window.location="index.html"
  }
  
  sala = localStorage.getItem("Entrada_texto2") 
  document.getElementById("sala_actual").innerHTML = "Bienvenido a la sala " + sala
  console.log(sala)
  var nombre_usuario = localStorage.getItem("Entrada_texto")

  function enviar_mensaje(){
    var mensajes = document.getElementById("texto_entrada").value 
    firebase.database().ref(sala).push({
      usuario: nombre_usuario,
      mensaje: mensajes,
      likes: 0
    })
    document.getElementById("texto_entrada").value = ""
  }

  function lectura_datos(){
    firebase.database().ref("/" + sala).on('value', function(funcion)
    {
      document.getElementById("mensaje_sala").innerHTML = ""
      funcion.forEach(function(funcionDos){
        var servidores = funcionDos.key
        var contenido = funcionDos.val()
        if(servidores!="contenido"){
          chat = servidores
          var contenido_mensaje = contenido
          usuario = contenido_mensaje['usuario']
          mensaje = contenido_mensaje['mensaje']
          likes = contenido_mensaje['likes']
          var usuario_name = "<h3 id='etiqueta_h3'>"+ usuario +"</h3>"
          var guardar_usuario = "<h3 id='h3'>"+ mensaje +"</h3>"
          var boton_like = "<button value="+ likes +" id="+ chat +" onclick='boton_Like(this.id)'>"
          var texto_boton = "<h5>like " + likes + "</h5></button>"
          var almacen = usuario_name + guardar_usuario + boton_like + texto_boton
          document.getElementById("mensaje_sala").innerHTML += almacen
        }
      })
    })
  }
  lectura_datos()
function  boton_Like(iniciar){
  var start = iniciar
  var conteo = document.getElementById(start).value
  var contador = Number(conteo) + 1
  firebase.database().ref(sala).child(start).update({likes:contador}) 
}