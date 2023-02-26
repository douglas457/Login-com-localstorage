var loginEntrar = document.getElementById("loginEntrar");
var passwordEntrar = document.getElementById("passwordEntrar");
var loginCadastrar = document.getElementById("loginCadastrar");
var passwordCadastrar = document.getElementById("passwordCadastrar");
var nomeCadastrar = document.getElementById("nomeCadastrar");
var btnEntrar = document.getElementById("btnEntrar");
var btnCadastrar = document.getElementById("btnCadastrar");


const usuarios = [
    {
        bNome: "douglas",
        bLogin: "douglas@douglas",
        bPassword: "douglas"
    },
    {
        bNome: "admin",
        bLogin: "admin@admin",
        bPassword: "admin"
    }
];

function logar() {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].bLogin === loginEntrar.value && usuarios[i].bPassword === passwordEntrar.value) {
            localStorage.setItem("acesso", true);
            alert('Ok');

            window.location.href = "index.html"
        }   
    }
}

btnEntrar.onclick = function () {
    logar();
};

btnCadastrar.onclick = function () {
    usuarios.push({bNome: nomeCadastrar.value, bLogin: loginCadastrar.value, bPassword: passwordCadastrar.value});
    alert("Cadastrado com sucesso!")
    nomeCadastrar.value = "";
    loginCadastrar.value = "";
    passwordCadastrar.value = "";

};

