const saludo = "Hola Bienvenido";
document.write(saludo);
alert("Hola aler");
console.log(saludo);

let miCarro = new Object();
miCarro.brand = "Porsche";
miCarro.model = "Cayman";
miCarro.color = "Black";
miCarro.year = "2008";

console.log(miCarro);
//Notacion objeto
let miCarroDos = {
    brand : 'BMW',
    model : 'E46 M3 GTR',
    color : 'Silver',
    year  : 2008
};

console.log(miCarroDos);

//Notacion Corchete
miCarro['model']='NewRio';
miCarro['year']=2023;
miCarro['color']='Rojo';
console.log(miCarro);