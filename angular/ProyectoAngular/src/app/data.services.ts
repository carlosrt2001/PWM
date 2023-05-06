import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "./usuario.model";

@Injectable()
export class DataServices{

    constructor(private httpClient: HttpClient){}

    

    cargarRegistro(){
        return this.httpClient.get('https://pwm-bd-default-rtdb.europe-west1.firebasedatabase.app//datos.json');

        
    }

    guardarRegistro(persona:Usuario[]){
        this.httpClient.put('https://pwm-bd-default-rtdb.europe-west1.firebasedatabase.app//datos.json', persona).subscribe(
            response=> console.log("Se ha guardado los usuarios" +  response),

            error=> console.log("Error" + error),
             
        );

    }
}
