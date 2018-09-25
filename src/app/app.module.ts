import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from 'src/app/app.router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms' 

import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ClienteCadastroComponent } from './pages/cliente-cadastro/cliente-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HomeComponent,
    ErrorComponent,
    ProdutosComponent,
    ClienteCadastroComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule

    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
