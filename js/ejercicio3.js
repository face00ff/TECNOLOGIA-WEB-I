function factorial (){
    var factorial = 1;
     
    for (var i=1; i <= document.getElementById ('nume1').value; i++){
    factorial *= i;
     }
     
    document.getElementById ('resp').value = factorial;
     }