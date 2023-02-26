var btnSair = document.getElementById("btnSair");
var logado = false;

if (localStorage.getItem("acesso") == "true") {
    logado = true;
    console.log("entrou")
}

btnSair.onclick = function () {
    localStorage.clear()
    alert('Você não esta atenticado!')
    window.location.href = "login.html"
}

if (logado != true) {
    alert('Você não esta atenticado!')
    window.location.href = "login.html"
}