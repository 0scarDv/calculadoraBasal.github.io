
const btnCalcular = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');
const resultado2 = document.getElementById('resultado2');
const resultado3 = document.getElementById('resultado3');
const labelAdv = document.getElementById('advertencia');
const metodoUtilizado = document.getElementById('metodoUtilizado');
const lista = document.getElementById('lista');
const sc = document.getElementById('sc');

let peso;
let dosis
let resultadoCalculo;

lista.style.display = 'none';
function limpiarEtiquetas() {
    //Limpian las etiquetas de los resultados
    resultado.innerHTML = "";
    resultado2.innerHTML = "";
    resultado3.innerHTML = "";

}
function obtenerDatos() {
    //obtiene el contenido del input
    peso = document.getElementById('peso').valueAsNumber;
}
function calcular() {
    obtenerDatos();

    //comprueba que el input contenga un valor
    if (isNaN(peso)) {

        labelAdv.innerHTML = "Complete todos los campos"; // alerta al usuario sobre el campo vacio
        limpiarEtiquetas();
        lista.style.display = 'none';
        metodoUtilizado.style.display = 'none';
        labelAdv.innerHTML = "";

    }
    else {
        labelAdv.innerHTML = "";

        //cuando el niño tiene hasta 10 kg
        if (peso <= 10) {
            metodoUtilizado.style.display = 'block';
            metodoUtilizado.innerHTML = "Metodo: Holliday-Segar"
            lista.style.display = 'block';
            sc.style.display = 'none';

            let volumenDiario = (peso * 100);
            resultadoCalculo = (volumenDiario / 24); //calculamos dosis por dia
            dosis = Math.round(resultadoCalculo); // redondeo del valor
            resultado.innerHTML = "Volumen diario: " + volumenDiario + "cc";
            resultado2.innerHTML = "Mantenimiento: " + (dosis) + " cc/hr";
            resultado3.innerHTML = "m + m/2: " + Math.round((dosis) + (dosis / 2)) + " cc/hr";
        }
        //cuando el niño tiene hasta 20 kg
        else if (peso > 10 && peso <= 20) {
            metodoUtilizado.innerHTML = "Metodo: Holliday-Segar"
            lista.style.display = 'block';
            sc.innerHTML = ""
            resultadoCalculo = 1000;
            peso = (peso - 10);   // se restan los 10 kg
            peso = (peso * 50);  // se hace el calculo con el valor restante
            let volumenDiario = (resultadoCalculo + peso);
            resultadoCalculo = (volumenDiario / 24); //calculamos la dosis por dia
            dosis = Math.round(resultadoCalculo); // redondeo del valor
            resultado.innerHTML = "Volumen diario: " + volumenDiario;
            resultado2.innerHTML = "Mantenimiento: " + (dosis) + " cc/hr";
            resultado3.innerHTML = "m + m/2: " + Math.round((dosis) + (dosis / 2)) + " cc/hr";


        }
        //cuando el niño tiene hasta 30 kg
        else if (peso > 20 && peso <= 30) {
            metodoUtilizado.innerHTML = "Metodo: Holliday-Segar"
            lista.style.display = 'block';
            sc.innerHTML = ""
            pesoAux = peso - 20;
            let volumenDiario = (1000 + 500 + (pesoAux * 20)); // suma de los pesos y se calcula la diferencia 
            resultadoCalculo = (volumenDiario / 24); //calculamos dosis por dia
            dosis = Math.round(resultadoCalculo); // redondeo del valor

            resultado.innerHTML = "Volumen diario: " + volumenDiario;
            resultado2.innerHTML = "Mantenimiento: " + (dosis) + " cc/hr";
            resultado3.innerHTML = "m + m/2: " + Math.round((dosis) + (dosis / 2)) + " cc/hr";

        }
        //cuando el niño tiene más de 30 kg
        else if (peso > 30) {

            metodoUtilizado.innerHTML = "Metodo: Superficie Corporal"
            metodoUtilizado.style.display = 'block';
            sc.style.display = 'block';
            lista.style.display = 'none';
            sc.innerHTML = "Superficie corporal = ( (peso * 4) + 7) / (peso + 90)"
            superficieCorporal = (((peso * 4) + 7) / (peso + 90));

            resultado.innerHTML = "SC * 1500: " + Math.round(superficieCorporal * 1500) + " cc";
            resultado2.innerHTML = "SC * 2000: " + Math.round(superficieCorporal * 2000) + " cc";
            resultado3.innerHTML = "";


        }

    }

}

btnCalcular.addEventListener('click', calcular);