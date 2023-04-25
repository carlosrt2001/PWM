

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "./usuario.model";

@Injectable()
export class DataServices{

    constructor(private httpClient: HttpClient){}

    guardarRegistro(persona:Usuario[]){
        this.httpClient.put('https://console.firebase.google.com/u/0/project/pwm-bd/database/pwm-bd-default-rtdb/data/~2F?hl=es/datos.json', persona);

    }
}
