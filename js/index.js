/*
  OPERAÇÕES DE SOMA
*/

// Resetar valores
document.querySelectorAll(".form-control").forEach((value, index) => {
    document.querySelectorAll(".form-control")[index].value = 0;
});

var number1 = 0;
var number2 = 0;

var p = document.querySelector("#id-div-resposta-soma");

var icon = [
    document.querySelector("#icon-number1-soma"),
    document.querySelector("#icon-number2-soma"),
    document.querySelector("#icon-result-soma")
]
var ops = "soma";
var imagem = "../img/operacoes/maca.png"

function resetNum() {
    number1 = 0;
    number2 = 0;
}

function change(ops) {
    p = document.querySelector("#id-div-resposta-"+ops)
    icon[0] = document.querySelector("#icon-number1-"+ops);
    icon[1] = document.querySelector("#icon-number2-"+ops);
    icon[2] = document.querySelector("#icon-result-"+ops);
}

function result(ops, number1, number2) {
    console.log(number1);
    console.log(number2)
    let resultado = ""

    // Realizando calculo
    if (ops == "soma") {
        resultado = number1 + number2
    } else if (ops == "sub") {
        resultado = number1 - number2
    } else if (ops == "mult") {
        resultado = number1 * number2
    } else if (ops == "div") {
        resultado = number1 / number2
    }
    p.innerHTML = resultado;

    // Resetando representação do resultado final por ícone
    var img = document.querySelectorAll(".icon-result");
    for (let a = 0; a < img.length; a++) {
       img[a].classList.remove("icon-result")
    }

    // Representação gráfica do resultado final
    var divResult = []
    for (let a = 0; a < Number(resultado); a++) {
        divResult.push(document.createElement("div"))
    }
    for (let a = 0; a < divResult.length; a++) {
        divResult[a].classList.add("icon-result");
        icon[2].appendChild(divResult[a])
    }
}

function graphNum1(number1) {

    // Resetando representação gráfica
    let img = document.querySelectorAll(".icon-number-1");
    for (let a = 0; a < img.length; a++) {
        img[a].classList.remove("icon-number-1")
    }

    // Representação gráfica
    if (number1 > 0) {
        var divNum1 = []
        for (let a = 0; a < number1; a++) {
            divNum1.push(document.createElement("div"))
        }
        for (let a = 0; a < divNum1.length; a ++) {
            divNum1[a].classList.add("icon-number-1")
            icon[0].appendChild(divNum1[a])
        }
    }
}

function graphNum2(number2) {

    // Resetando representação gráfica
    let img = document.querySelectorAll(".icon-number-2");
    for (let a = 0; a < img.length; a++) {
        img[a].classList.remove("icon-number-2")
    }

    // Representação gráfica
    if (number2 > 0) {
        var divNum2 = []
        for (let a = 0; a < number2; a++) {
            divNum2.push(document.createElement("div"))
        }
        for (let a = 0; a < divNum2.length; a ++) {
            divNum2[a].classList.add("icon-number-2")
            icon[1].appendChild(divNum2[a])
        }
    }
}

document.querySelectorAll(".form-control").forEach((value, index) => {
    document.querySelectorAll(".form-control")[index].addEventListener("keyup", (e) => {
        if(e.target.name == "num1") {
            number1 = Number(e.target.value);
        } else if (e.target.name == "num2") {
            number2 = Number(e.target.value);
        }
        result(ops, number1, number2)
        graphNum1(number1)
        graphNum2(number2)
    })
})

document.querySelectorAll(".ops").forEach((value, index) => {
    document.querySelectorAll(".ops")[index].addEventListener("click", (e) => {
        console.log(e.target.name)
        if (e.target.name == "soma") {
            resetNum()
            ops = "soma";
            change(ops);
        } else if (e.target.name == "sub") {
            resetNum()
            ops = "sub";
            change(ops);
        } else if (e.target.name == "div") {
            ops = "div";
        } else if (e.target.name == "mult") {
            ops = "mult";
        }
    });
});

/*
  OPERAÇÕES DE SUBTRAÇÃO
*/