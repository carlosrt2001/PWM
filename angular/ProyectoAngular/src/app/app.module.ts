import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { DataServices } from './data.services';
import { UsuarioServices } from './usuario.services';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CestaComponent } from './components/cesta/cesta.component';




import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MujerComponent } from './components/mujer/mujer.component';
import { LoginComponent } from './components/login/login.component';
import { HombreComponent } from './components/hombre/hombre.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ContenedorPerfilComponent } from './components/contenedor-perfil/contenedor-perfil.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';


const appRoutes:Routes=[
  {path:'', component: HomeComponent},
  {path:'inicio', component: HomeComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'ayuda', component:AyudaComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'hombre', component:HombreComponent},
  {path:'mujer', component:MujerComponent},
  {path:'login', component:LoginComponent},
  {path:'app-contenedor', component:ContenedorComponent},
  {path:'app-favoritos', component:FavoritosComponent},
  {path:'app-registrar', component:RegistrarComponent},
  {path:'app-perfil', component:PerfilComponent},
  {path:'app-cesta', component:CestaComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NosotrosComponent,
    AyudaComponent,
    ContactoComponent,
    HomeComponent,
    HombreComponent,
    MujerComponent,
    FooterComponent,
    LoginComponent,
    ContenedorComponent,
    RegistrarComponent,
    PerfilComponent,
    FavoritosComponent,
    ContenedorPerfilComponent,
    CestaComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [DataServices, UsuarioServices],
  bootstrap: [AppComponent]

})


export class AppModule { 

}
