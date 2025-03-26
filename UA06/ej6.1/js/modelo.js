class modelo{
    constructor(){
        this.tarea = [];
        this.cont = 0;
    }

getTasks(){
    return this.tarea;
}

añadir(descripcion){
    let obj ={
    id : this.cont++,
    descripcion : descripcion,
    estado : "sin hacer",
    date : new Date(),
    }

    this.tarea.push(obj);
}


eliminar(id){
    for (let i = 0; i < this.tarea.length; i++) {
        if(this.tarea[i].id == id){
            this.tarea.splice(i,1);
        }
    }
}

changeEstado(id){
    for (let i = 0; i < this.tarea.length; i++) {
        if(this.tarea[i].id == id){
            this.tarea[i].estado = "hecho";
        }
    }
}

}
