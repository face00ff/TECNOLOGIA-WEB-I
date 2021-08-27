
function Sumar()
{
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 =parseFloat(document.getElementById('num2').value);
    var numero3 =parseFloat(document.getElementById('num3').value);
    
    var resultado = numero1+numero2+numero3;

    document.getElementById('respu').value = resultado
    //return resultado;
}




