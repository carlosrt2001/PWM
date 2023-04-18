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
import { LoginComponent } from './components/login/login.component'


const appRoutes:Routes=[
  {path:'', component: HomeComponent},
  {path:'inicio', component: HomeComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'ayuda', component:AyudaComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'hombre', component:HombreComponent},
  {path:'mujer', component:MujerComponent},
  {path:'login', component:LoginComponent}

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

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
