export class Usuario{
    nombre:String="";
    apellidos:String="";
    nick:String=""
    correo:String="";
    telefono:String="";
    clave:String="";

    constructor(nombre:String, apellidos:String, nick:string, correo:String, telefono:String, clave:String){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.nick=nick;
        this.correo=correo;
        this.telefono=telefono;
        this.clave=clave;
    }

}