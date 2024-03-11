function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value; 
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "block";
        document.getElementById("exampleFormControlInput1").style.background = "none"
    }else{
        document.getElementById("error").style.display = "flex"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink"
}

function calcularTotal(){
    var selectEsportivos = document.getElementById("selectEsportivos")
    var selectSUVs = document.getElementById("selectSUVs")
    var selectAntigos = document.getElementById("selectAntigos")
    var selectSuperSports = document.getElementById("selectSuperSports")
    var selectVariados = document.getElementById("selectVariados")
    var resultadoSpan = document.getElementById("resultado")

    var total = 0;
    var Esportivo = 0;
    var SUV = 0;
    var Antigo = 0;
    var SuperSport = 0;
    var Variado = 0;

    switch (selectEsportivos.value) {
        case "BMW 330i":
            total += 1600000.00;
            Esportivo = 1600000.00;
            break;
        case "911 TURBO S 2022":
            total += 1200000.00;
            Esportivo = 1200000.00;
            break;
        case "CAYENNE 2024":
            total += 1150000.00;
            Esportivo = 1150000.00;
            break;
        case "GT4 RS":
            total += 1250000.00;
            Esportivo = 1250000.00;
            break;
        case "GT3 RS":
            total += 5250000.00;
            Esportivo =5250000.00;
            break;

        case "None":
            total += 0;
            Esportivo = 0;
            break;
    }
    switch (selectSUVs.value) {
        case "New tucson":
            total += 150000.00;
            SUV = 150000.00;
            break;
        case "creta n line":
            total += 170000.00;
            SUV = 170000.00;
            break;
        case "HRV 2018":
            total += 95000.00;
            SUV = 95000.00;
            break;
         case "Urus mansori":
            total += 1770000.00;
            SUV = 1770000.00;
             break;
        case "am dbx707":
             total +=9055000.00;
             SUV = 9055000.00;
            break;
        case "None":
            total += 0;
            SUV = 0;
            break;

    }
    switch (selectAntigos.value) {
        case "Mach 1 69":
            total += 1200000;
            Antigo = 1200000;
            break;
        case "Opala comodoro 77":
            total += 1500000;
            Antigo = 1500000;
            break;
        case "Charger 69":
            total += 1680000;
            Antigo = 1680000;
            break;
        case "ferrari 250 gtl":
            total += 1680000;
            Antigo = 1680000;
            break;
        case "lamborghini gt 350":
            total += 1680000;
            Antigo = 1680000;
            break;
        case "None":
            total += 0;
            Antigo = 0;
            break;
    }
    switch (selectSuperSports.value) {
        case "AMG GT BLACK SERIES":
            total += 1200000.00;
            SuperSport = 1200000.00;
            break;
        case "ford gt carbon":
            total += 11500000.00;
            SuperSport = 11500000.00;
            break;
        case "bugatti chiron":
            total += 1150000.00;
            SuperSport = 1150000.00;
            break;
        case "mc laren senna gtr":
            total += 1950000.00;
            SuperSport = 1950000.00;
            break;
        case "pagani huayra roadster":
            total += 1250000.00;
            SuperSport = 1250000.00;
            break;
        case "None":
            total += 0;
            SuperSport = 0;
            break;
    }
    switch (selectVariados.value) {
        case "vision gran turismo":
            total += 1600000.00;
            Variado = 1600000.00;
            break;
        case "zenvo tsr-s":
            total += 1200000.00;
            Variado = 1200000.00;
            break;
        case "aston martin db12":
            total += 1150000.00;
            Variado = 1150000.00;
            break;
        case "m3 2002":
            total += 1250000.00;
            Variado = 1250000.00;
            break;
        case "bmw m3 turing":
            total += 1250000.00;
            Variado = 1250000.00;
            break;
        case "None":
            total += 0;
            Variado = 0;
            break;
    }

    resultadoSpan.textContent = `R$ ${total.toFixed(2)}`
    document.getElementById("Esportivo-pronto").innerHTML = Esportivo.toFixed(2);
    document.getElementById("SUV-pronto").innerHTML = SUV.toFixed(2);
    document.getElementById("Antigo-pronto").innerHTML = Antigo.toFixed(2);
    document.getElementById("SuperSport-pronto").innerHTML = SuperSport.toFixed(2);
    document.getElementById("Variado-pronto").innerHTML = Variado.toFixed(2);


}

//arrow function
const limpar = () => {

   
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectEsportivos").value = "Selecione um Esportivo";
    document.getElementById("selectSUVs").value = "Selecione uma SUV";
    document.getElementById("selectAntigos").value = "Selecione um Antigo";
    document.getElementById("selectSuperSports").value = "Selecione um SuperSport";
    document.getElementById("selectVariados").value = "Selecione um Variado";
    document.getElementById("Esportivo-pronto").textContent = "";
    document.getElementById("SUV-pronto").textContent = "";
    document.getElementById("Antigo-pronto").textContent = "";
    document.getElementById("SuperSport-pronto").textContent = "";
    document.getElementById("Variado-pronto").textContent = "";
}

var nomeGlobal;
var mensagemGlobal;

function conferirMensagemWhatsApp(){
var nome = document.getElementById("nome").value;
var mensagem = document.getElementById("mensagem").value;
console.log(nome, mensagem)
nomeGlobal = nome;
mensagemGlobal = mensagem;

document.getElementById("confNome").textContent = nome;
document.getElementById("confMsg").textContent = mensagem;
}

function enviar(){
    var numeroTelefone = "5541999999999"

    var linkWhatsApp = "https://wa.me/" +
     numeroTelefone + 
     "?text=Nome: " + 
     nomeGlobal +
     " - " +
     mensagemGlobal;

    window.open(linkWhatsApp, "_blank");
}

function WhatsApp(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}
