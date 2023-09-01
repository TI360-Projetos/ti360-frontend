function localizarCep(cep) {
    fetch("https://viacep.com.br/ws/" + cep +"/json/", {
        method: "GET",
        redirect: "follow"
    })
    .then(response => response.json())
    .then(data => {

        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "";

        if (cep == "04429280") {
            resultado.innerHTML = "<p>Volte mais tarde!!!</p>"
        } else {

            for(var i = 0; i <= 2; i++) {
                resultado.innerHTML += "<p>Linha: " + i + "</p>";
                resultado.innerHTML += "<p><strong>CEP: </strong>" + data.cep + "</p>";
                resultado.innerHTML += "<p><strong>Logradouro: </strong>" + data.logradouro + "</p>";
                resultado.innerHTML += "<p><strong>Complemento: </strong>" + data.complemento + "</p>";
                resultado.innerHTML += "<p><strong>Bairro: </strong>" + data.bairro + "</p>";
                resultado.innerHTML += "<p><strong>Localidade: </strong>" + data.localidade + "</p>";
                resultado.innerHTML += "<hr>";
            }
        }
    });
}

function buscarEndereco() {
    var cep = document.getElementById("cep").value;
    localizarCep(cep);
}