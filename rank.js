let vitoriasRank = document.querySelector("#vitoriasRank");
let derrotasRank = document.querySelector("#derrotasRank");
let saldoDeVitorias
let saldoDeDerrotas
let saldoRank

let btn = document.querySelector("#send")
btn.addEventListener('click', function(e){
    e.preventDefault();
    saldoDeVitorias = Number(vitoriasRank.value);
    saldoDeDerrotas = Number(derrotasRank.value);
    saldoRank = CalcularNivel(saldoDeVitorias);
    exibirMensagem(saldoDeVitorias, saldoRank)
});


function CalcularNivel(vitoriasRank) {
    switch (true) {
        case vitoriasRank <= 10:
            return "Ferro";
        case vitoriasRank >= 11 && vitoriasRank <= 20:
            return "Bronze";
        case vitoriasRank >= 21 && vitoriasRank <= 50:
            return "Prata";
        case vitoriasRank >= 51 && vitoriasRank <= 80:
            return "Ouro";
        case vitoriasRank >= 81 && vitoriasRank <= 90:
            return "Diamante";  
        case vitoriasRank >= 91 && vitoriasRank <= 100:
            return "Lendario";
        case vitoriasRank >= 101:
            return "Imortal";
        default: 
            return "Saldo Inválida";
    }};


function exibirMensagem(vitoriasRank, saldo) {
    var mensagemElement = document.getElementById("mensagem")
    mensagemElement.innerHTML = "O heroi tem saldo de " + vitoriasRank + " esta no nivel " + saldo
};
