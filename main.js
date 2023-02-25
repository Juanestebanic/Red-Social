function boton(){
    var usuario = document.getElementById("Entrada_texto").value 
    localStorage.setItem("Entrada_texto", usuario)
    window.location = "index2.html"
}