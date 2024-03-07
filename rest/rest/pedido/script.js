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
    var selectCarrosEspotivos = document.getElementById("selectCarroEspotivo")
    var selectSUVs = document.getElementById("selectSUV")
    var selectAntigos = document.getElementById("selectAntigo")
    var resultadoSpan = document.getElementById("resultado")

    var total = 0;
    var carrosEsportivo = 0;
    var SUV = 0;
    var Antigo = 0;

    switch (selectCarrosEspotivos.value) {
        case "BMW 330i":
            total += 1600000.00;
            carrosEsportivo = 1600000.00;
            break;
        case "911 TURBO S 2022":
            total += 1200000.00;
            carrosEsportivo = 1200000.00;
            break;
        case "CAYENNE 2024":
            total += 1150000.00;
            carrosEsportivo = 1150000.00;
            break;
        case "GT4 RS":
            total += 1250000.00;
            carrosEsportivo = 1250000.00;
            break;
        case "None":
            total += 0;
            carrosEsportivo = 0;
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
        case "None":
           total += 0;
           carrosEsportivo = 0;
            break;
    }

    resultadoSpan.textContent = `R$ ${total.toFixed(2)}`
    document.getElementById("carro-pronto").innerHTML = carrosEsportivo.toFixed(2);
    document.getElementById("SUV-pronto").innerHTML = SUV.toFixed(2);
    document.getElementById("Antigo-pronto").innerHTML = Antigo.toFixed(2);
}

//arrow function
const limpar = () => {

   
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectCarroEspotivo").value = "Selecione um Esportivo";
    document.getElementById("selectSUV").value = "Selecione uma BMW";
    document.getElementById("selectAntigo").value = "Selecione um Antigo";
    document.getElementById("carro-pronto").textContent = "";
    document.getElementById("SUV-pronto").textContent = "";
    document.getElementById("Antigo-pronto").textContent = "";
}