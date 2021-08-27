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