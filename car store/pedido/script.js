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
    var selectSuperSports = document.getElementById("selectSuperSports")
    var selectVariados = document.getElementById("selectVariados")
    var resultadoSpan = document.getElementById("resultado")

    var total = 0;
    var carrosEsportivo = 0;
    var SUV = 0;
    var Antigo = 0;
    var SuperSports = 0;
    var Variados = 0;

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
        case "GT3 RS":
            total += 5250000.00;
            carrosEsportivo =5250000.00;
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
           carrosEsportivo = 0;
            break;
    }
    switch (selectCarrosSuperSports.value) {
        case "AMG GT BLACK SERIES":
            total += 1200000.00;
            carrosSuperSports = 1200000.00;
            break;
        case "ford gt carbon":
            total += 11500000.00;
            carrosSuperSports = 11500000.00;
            break;
        case "bugatti chiron":
            total += 1150000.00;
            carrosSuperSports = 1150000.00;
            break;
        case "mc laren senna gtr":
            total += 1950000.00;
            carrosSuperSports = 1950000.00;
            break;
        case "pagani huayra roadster":
            total += 1250000.00;
            carrosSuperSports = 1250000.00;
            break;
        case "None":
            total += 0;
            carrosSuperSports = 0;
            break;
    }
    switch (selectCarrostVariados.value) {
        case "vision gran turismo":
            total += 1600000.00;
            carrosVariados = 1600000.00;
            break;
        case "zenvo tsr-s":
            total += 1200000.00;
            carrosVariados = 1200000.00;
            break;
        case "aston martin db12":
            total += 1150000.00;
            carrosVariados = 1150000.00;
            break;
        case "m3 2002":
            total += 1250000.00;
            carroVariados = 1250000.00;
            break;
        case "bmw m3 turing":
            total += 1250000.00;
            arroVariados = 1250000.00;
            break;
        case "None":
            total += 0;
            carrosVariados = 0;
            break;
    }

    resultadoSpan.textContent = `R$ ${total.toFixed(2)}`
    document.getElementById("carro-pronto").innerHTML = carrosEsportivo.toFixed(2);
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
    document.getElementById("selectCarroEspotivo").value = "Selecione um Esportivo";
    document.getElementById("selectSUV").value = "Selecione uma BMW";
    document.getElementById("selectAntigo").value = "Selecione um Antigo";
    document.getElementById("carro-pronto").textContent = "";
    document.getElementById("SUV-pronto").textContent = "";
    document.getElementById("Antigo-pronto").textContent = "";
}

