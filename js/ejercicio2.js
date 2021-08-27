// Ejercicio 2
function Temp()
{
    var numero1 = parseFloat(document.getElementById('Temper').value);
    if (numero1<15 ) {
         resultado = "Frio";
    } 
    else if (numero1>15 || numero1<25) {
        resultado = "Templado";
    } 
     if (numero1>=26) {
        resultado = "Calor";
    } 
    document.getElementById('result').value = resultado
}