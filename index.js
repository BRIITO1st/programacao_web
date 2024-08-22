let pagina = document;
let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

function submeter() {
    let nome = document.getElementById("nome").value;
    console.log(nome);

    let email = document.getElementById("email").value;
    console.log(email);

    let idade = document.getElementById("idade").value;
    console.log(idade);

    let cpf = document.getElementById("cpf").value;
    console.log(cpf);
    
    if(nome == "") {
        alert("Nome é obrigatorio!")
    }
}

function validaCPF(cpf){
    if(cpf == ""){
        return false;
    }

    return true;
}
