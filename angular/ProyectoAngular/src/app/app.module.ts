import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HombreComponent } from './components/hombre/hombre.component';
import { MujerComponent } from './components/mujer/mujer.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

import { DataServices } from './data.services';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrarComponent } from './components/registrar/registrar.component';
//import { UsuarioServices } from './usuario.services';





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
  {path:'app-registrar', component:RegistrarComponent}

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
    FavoritosComponent,
    RegistrarComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [DataServices, /*UsuarioServices*/],
  bootstrap: [AppComponent]
})
export class AppModule { 
    

}
