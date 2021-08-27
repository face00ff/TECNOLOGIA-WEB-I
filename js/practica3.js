
function Sumar()
{
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 =parseFloat(document.getElementById('num2').value);
    var numero3 =parseFloat(document.getElementById('num3').value);
    
    var resultado = numero1+numero2+numero3;

    document.getElementById('resp').value = resultado
    //return resultado;
}
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
function factorial (){
    var factorial = 1;
     
    for (var i=1; i <= document.getElementById ('nume1').value; i++){
    factorial *= i;
     }
     
    document.getElementById ('resp').value = factorial;
     }

     function Fecha()
     {
         var fecha = new Date(); //Fecha actual
         var mes = fecha.getMonth()+1; //obteniendo mes
         var dia = fecha.getDate(); //obteniendo dia
         var ano = fecha.getFullYear(); //obteniendo año
      
         switch (mes) {
             case mes=1:
                 mes = "Enero";
               break;
             case  mes=2:
                 mes = "Febrero";
               break;
             case mes=3:
                 mes = "Marzo";
             break;
             case mes=4:
                 mes = "Abril";
             break;
             case mes=5:
                 mes = "Mayo";
               break;
               case mes=6:
                 mes = "Junio";
               break;
               case mes=7:
                 mes = "Julio";
               break;
               case mes=8:
                 mes = "Agosto";
               break;
               case mes=9:
                 mes = "Septiembre";
               break;
               case mes=10:
                 mes = "Octubre";
               break;
               case mes=11:
                 mes = "Noviembre";
               break;
               case mes=12:
                 mes = "Diciembre";
               break;
     
           }
           
         document.getElementById('respu').value=dia+" "+"de"+" "+mes+" "+"del"+" "+ano;
     
         
     }



