function Persona(nombreCompletom, email, comentarios, fechaNace)
{
this.nombreCompleto = nombreCompletom;
this.email = email;
this.comentarios = comentarios;
this.fechaNace = fechaNace;
}


Persona.prototype.hablar = function(){
    return `Hola mi nombre es ... ${this.nombreCompleto}`
}
/*
let miPersona1 = new Persona('Felipe Vivas', "andres@gmail.com", 'Se dicen llamar raperos pero al so, tienen que demostrarselo primero', '16/01/2000');

console.log(miPersona1);*/

function validate_form()
{
    alert("Creacion de Objeto Persona")
    let valid = false;
    let miFormulario = document.formulario

    let nombreCompleto = miFormulario.nombreCompleto.value;
    let email = miFormulario.email.value;
    let comentarios = miFormulario.comentarios.value;
    let fechaNace = miFormulario.fechaNace.value;

    let miPersona = new Persona(nombreCompleto, email, comentarios, fechaNace);

    console.log(miPersona.hablar);

    return valid;

}
