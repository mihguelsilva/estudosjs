/*
  OPERAÇÕES DE SOMA
*/
var soma = [
    document.querySelector("#number1"),
    document.querySelector("#number2"),
    document.querySelector("#id-div-resposta-soma")
]
var icon = [
    document.querySelector("#icon-number1"),
    document.querySelector("#icon-number2"),
    document.querySelector("#icon-result")
]

var imagem = "../img/operacoes/maca.png"

soma[0].value = "";
soma[1].value = "";

function result(ops) {
    // Realizando calculo
    if (ops == "soma") {
        let number1 = Number(soma[0].value);
        let number2 = Number(soma[1].value);
        let resultado = number1 + number2
        soma[2].innerHTML = resultado;
    }

    // Resetando representação do resultado final por ícone
    var img = document.querySelectorAll(".icon-result");
    for (let a = 0; a < img.length; a++) {
       img[a].classList.remove("icon-result")
    }

    // Representação gráfica do resultado final
    var divResult = []
    for (let a = 0; a < Number(soma[2].innerHTML); a++) {
        divResult.push(document.createElement("div"))
    }
    for (let a = 0; a < divResult.length; a++) {
        divResult[a].classList.add("icon-result");
        icon[2].appendChild(divResult[a])
    }
}

function graphNum1() {

    // Resetando representação gráfica
    let img = document.querySelectorAll(".icon-number-1");
    for (let a = 0; a < img.length; a++) {
        img[a].classList.remove("icon-number-1")
    }

    // Representação gráfica
    if (soma[0].value > 0) {
        var divNum1 = []
        for (let a = 0; a < soma[0].value; a++) {
            divNum1.push(document.createElement("div"))
        }
        for (let a = 0; a < divNum1.length; a ++) {
            divNum1[a].classList.add("icon-number-1")
            icon[0].appendChild(divNum1[a])
        }
    }
}

function graphNum2() {

    // Resetando representação gráfica
    let img = document.querySelectorAll(".icon-number-2");
    for (let a = 0; a < img.length; a++) {
        img[a].classList.remove("icon-number-2")
    }

    // Representação gráfica
    if (soma[1].value > 0) {
        var divNum2 = []
        for (let a = 0; a < soma[1].value; a++) {
            divNum2.push(document.createElement("div"))
        }
        for (let a = 0; a < divNum2.length; a ++) {
            divNum2[a].classList.add("icon-number-2")
            icon[1].appendChild(divNum2[a])
        }
    }
}
soma[0].addEventListener("keyup", (n) => {
    result("soma")
    graphNum1()
});
soma[1].addEventListener("keyup", (n) => {
    result("soma")
    graphNum2()
});
soma[0].addEventListener("change", (n) => {
    result("soma")
    graphNum1()
});
soma[1].addEventListener("change", (n) => {
    result("soma")
    graphNum2()
});

/*
  OPERAÇÕES DE SUBTRAÇÃO
*/

var sub = [
    document.querySelector("#number1"),
    document.querySelector("#number2"),
    document.querySelector("#id-div-resposta-soma")
]

sub[0].addEventListener("keyup", (n) => {
    result("soma")
    graphNum1()
});
sub[1].addEventListener("keyup", (n) => {
    result("soma")
    graphNum2()
});
sub[0].addEventListener("change", (n) => {
    result("soma")
    graphNum1()
});
sub[1].addEventListener("change", (n) => {
    result("soma")
    graphNum2()
});