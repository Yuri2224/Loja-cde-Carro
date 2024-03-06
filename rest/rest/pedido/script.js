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
    var selectPratos = document.getElementById("selectPrato")
    var selectBebidas = document.getElementById("selectBebida")
    var selectSobremesas = document.getElementById("selectSobremesa")
    var resultadoSpan = document.getElementById("resultado")

    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;

    switch (selectPratos.value) {
        case "BMW 330i":
            total += 160.000;
            prato = 160.000;
            break;
        case "911 TURBO S 2022":
            total += 1.200.000;
            prato = 1.200.000;
            break;
        case "CAYENNE 2024":
            total += 1.150.000;
            prato = 1.150.000;
            break;
        case "GT4 RS":
            total += 1.250.000;
            prato = 1.250.000;
            break;
    }
    switch (selectBebidas.value) {
        case "new tucson":
            total += 150.000;
            bebida = 150.000;
            break;
        case "creta n line":
            total += 170.000;
            bebida = 170.000;
            break;
        case "HRV 2017":
            total += 95.000;
            bebida = 95.000;
            break;

    }
    switch (selectSobremesas.value) {
        case "Mach 1 69":
            total += 1.200000;
            sobremesa = 1.200000;
            break;
        case "Opala comodoro 77":
            total += 150.000;
            sobremesa = 150.000;
            break;
        case "charger 69":
            total += 168.000;
            sobremesa = 168.000;
            break;
    }

    resultadoSpan.textContent = `R$ ${total.toFixed(2)}`
    document.getElementById("prato-pronto").innerHTML = prato.toFixed(2);
    document.getElementById("bebida-pronto").innerHTML = bebida.toFixed(2);
    document.getElementById("sobremesa-pronto").innerHTML = sobremesa.toFixed(2);
}

//arrow function
const limpar = () => {

   
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("SelectPratos").value = "Selecione um prato";
    document.getElementById("SelectBebida").value = "Selecione uma bebida";
    document.getElementById("SelectSobremesa").value = "Selecione um sobremesa";
    document.getElementById("prato-pronto").textContent = "";
    document.getElementById("bebida-pronto").textContent = "";
    document.getElementById("sobremesa-pronto").textContent = "";
}