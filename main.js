const nome = prompt("Insira seu nome")
const res = document.getElementById("nome")
res.innerHTML = `Olá, ${nome}!`
const confirmar = confirm("Deseja fazer a prova?")
if (confirmar == false) {
const cancel = document.getElementById("confirmar")
cancel.innerHTML = `Prova cancelada com sucesso!`
}
else {
    var resultado = 0
    const resp1 = 4
    const per1 = prompt("Pergunda 1: Quanto é 2 + 2? \n A) 10 \n B) 8 \n C) 4 \n D) 2")
    if (per1 == resp1) {
        document.getElementById("certa2").innerHTML = ("1 Resposta certa")
        resultado++
    }else { 
        document.getElementById("errada2").innerHTML = ("1 Resposta errada")
    }
    const resp2 = 5
    const per2 = prompt("Pergunda 2: Quanto é 3 + 2? \n A) 5 \n B) 8 \n C) 9 \n D) 2")
    if (per2 == resp2) {
        document.getElementById("certa3").innerHTML = ("1 resposta certa")
        resultado++
    }else { document.getElementById("errada3").innerHTML = ("1 Resposta errada")
    }
    const resp3 = 6
    const per3 = prompt("Pergunda 3: Quanto é 3 + 3? \n A) 7 \n B) 2 \n C) 3 \n D) 6")
    if (per3 == resp3) {
        document.getElementById("certa4").innerHTML = ("1 Resposta certa")
        resultado++
    } else { document.getElementById("errada4").innerHTML = ("1 Resposta errada") 
    }
    if(resultado==3){
        alert ("Parabéns " + nome + "! Você foi aprovadx.")
    }else {
        alert (nome + " , você não foi aprovadx.")}
    }