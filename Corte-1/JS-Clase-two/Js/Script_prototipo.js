class Persona {
    constructur(nombreCompletom, email, comentarios, fechaNace) {
        this.nombreCompleto = nombreCompletom;
        this.email = email;
        this.comentarios = comentarios;
        this.fechaNace = fechaNace;

    }

    hablar(){
        return `Hola mi nombre es: `+ this.nombreCompleto;
    }

}
