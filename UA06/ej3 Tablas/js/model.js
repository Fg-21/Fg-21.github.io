const model = {
data : {
    items : [
        {nombre: "", apellido: "", edad: "",},
    ],  
},

addItem(item){
    this.data.items.push(item)},

getItems(){
    return this.data.items;
},

setEdad(edad){
    this.edad = edad;
}
}
