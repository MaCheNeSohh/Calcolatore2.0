let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
}

function generaFrasi(opzione) {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var input3 = document.getElementById('input3').value;
    var input4 = document.getElementById('input4').value;
    var input5 = document.getElementById('input5').value;
    var input6 = document.getElementById('input6').value;
    var input7 = document.getElementById('input7').value;
    var input8 = document.getElementById('input8').value;
    var input9 = document.getElementById('input9').value;
    var input10 = document.getElementById('input10').value;
    var input11 = document.getElementById('input11').value;
    var input12 = document.getElementById('input12').value;
    var input13 = document.getElementById('input13').value;
    var frasiGenerare = "";
    var frasiGenerare2 = "";
    var frasiGenerare3 = "";
    var frasiGenerare4 = "";
    var frasiGenerare5 = "";
    var frasiGenerare6 = "";
    var frasiGenerare7 = "";
    var frasiGenerare8 = "";
    var frasiGenerare9 = "";
    var frasiGenerare10 = "";
    var frasiGenerare11 = "";
    var frasiGenerare12 = "";
    var frasiGenerare13 = "";
    var frasiGenerare14 = "";
    var frasiGenerare15 = "";
    var frasiGenerare16 = "";
    var frasiGenerare17 = "";
    var frasiGenerare18 = "";
    var frasiGenerare19 = "";
    var frasiGenerare20 = "";
    var frasiGenerare21 = "";

    var parts = input13.split("/");
    var day = parseInt(parts[0]);
    var month = parseInt(parts[1]) - 1;
    var year = parseInt(parts[2]);

    var inputDate = new Date(year, month, day);
    var resultDate = new Date(inputDate.getTime() + (90 * 24 * 60 * 60 * 1000));

    var resultDay = resultDate.getDate();
    var resultMonth = resultDate.getMonth() + 1;
    var resultYear = resultDate.getFullYear();

    var input99 = (resultDay + "/" + resultMonth + "/" + resultYear);

    var cifra = 600;
    var risultato = cifra + (input12 * 100)

if (opzione === 1) {
    frasiGenerare = "Il sottoscritto KillerWord in quanto officiante abilitato dallo stato di Metropolis, dichiara " + input1 + " e " + input2 + " civilmente uniti ai sensi della legge sulle unioni civili del 05/10/2020" + ".";
    frasiGenerare2 = "/marry marry " + input1 + " " + input2;
    frasiGenerare3 = "/scontrino Segreteria 2500 " + input1 + " Unione Civile";
    frasiGenerare4 = "/Unione civile " + input1 + " " + input2;
    frasiGenerare5 = "Il sottoscritto, in quanto officiante abilitato dallo stato di Metropolis, dichiara " + input1 + " e " + input2 + " civilmente uniti in data " + input3 + " ai sensi della legge sulle unioni civili del 05/10/2020" + ".";
    frasiGenerare6 = "Si attesta inoltre, la presenza all'atto dell'unione, dei testimoni " + input4 + " e " + input5 + ".";
    frasiGenerare7 = "Si certifica inoltre che entrambe le parti non sono coinvolte in altre unioni civili riportate negli archivi comunali e si provvede immediatamente a registrare l'atto nei suddetti registri."

}

else if (opzione === 2) {
    frasiGenerare8 = "/scontrino Segreteria 1000 " + input6 + " Divorzio";
    frasiGenerare9 = "Il sottoscritto, in quanto officiante abilitato dallo stato di Metropolis, dichiara: " + input6 + " e " + input7 + " divorziati ai sensi della legge sulle unioni civili del 05/10/2020.";
    frasiGenerare10 = "Cittadino 1: " + input6 + " Cittadino 2: " + input7 + " Officiante: KillerWord " + " Data e Ora: " + input8;  
    frasiGenerare11 = "/marry divorce " + input6 + " oppure " + input7;
    frasiGenerare12 = " ";
    frasiGenerare13 = " ";
    frasiGenerare14 = " ";
}

if (opzione === 3) {
    var frasiGenerare15 = "/scontrino segreteria " + risultato + " " + input9 + " Registrazione Famiglia/Rinnovo Famiglia " + input10;
    var frasiGenerare16 = "Nome Famiglia: " + input10 + " N. Capofamiglia: " + input9 + " Componenti: " + input11 + " Data di registrazione: " + input13 + " Data di scadenza: " + input99 + " (la data potrebbe non essere corretta)";
    var frasiGenerare17 = " Con questo documento la segreteria di Metropolis attesta che la seguente famiglia " + input10 + " con a capo " + input9 + " la quale presenta " + input12 + " membri " + " è riconosciuta dallo Stato.";
    var frasiGenerare18 = " Data di rilascio: " + input13 + " Firma segretario: KillerWord " + " Firma CapoFamiglia: " + input9 + " Data di scadenza: " + input99 + " (la data potrebbe non essere corretta)";
    var frasiGenerare19 = "Nome Famiglia: " + input10 + " N. Capofamiglia: " + input9 + " Componenti: " + input11 + " Data di registrazione: " + input13 + " Data di scadenza: " + input99 + " (la data potrebbe non essere corretta)";
    var frasiGenerare20 = " ";
    var frasiGenerare21 = " ";
}

    document.getElementById('frasiGenerare').textContent = frasiGenerare;
    document.getElementById('frasiGenerare2').textContent = frasiGenerare2;
    document.getElementById('frasiGenerare3').textContent = frasiGenerare3;
    document.getElementById('frasiGenerare4').textContent = frasiGenerare4;
    document.getElementById('frasiGenerare5').textContent = frasiGenerare5;
    document.getElementById('frasiGenerare6').textContent = frasiGenerare6;
    document.getElementById('frasiGenerare7').textContent = frasiGenerare7;
    document.getElementById('frasiGenerare8').textContent = frasiGenerare8;
    document.getElementById('frasiGenerare9').textContent = frasiGenerare9;
    document.getElementById('frasiGenerare10').textContent = frasiGenerare10;
    document.getElementById('frasiGenerare11').textContent = frasiGenerare11;
    document.getElementById('frasiGenerare12').textContent = frasiGenerare12;
    document.getElementById('frasiGenerare13').textContent = frasiGenerare13;
    document.getElementById('frasiGenerare14').textContent = frasiGenerare14;
    document.getElementById('frasiGenerare15').textContent = frasiGenerare15;
    document.getElementById('frasiGenerare16').textContent = frasiGenerare16;
    document.getElementById('frasiGenerare17').textContent = frasiGenerare17;
    document.getElementById('frasiGenerare18').textContent = frasiGenerare18;
    document.getElementById('frasiGenerare19').textContent = frasiGenerare19;
    document.getElementById('frasiGenerare20').textContent = frasiGenerare20;
    document.getElementById('frasiGenerare21').textContent = frasiGenerare21;
}

document.getElementById('opzione1').addEventListener('click', function () {
    generaFrasi(1);
});

document.getElementById('opzione2').addEventListener('click', function () {
    generaFrasi(2);
});

document.getElementById('opzione3').addEventListener('click', function () {
    generaFrasi(3);
});