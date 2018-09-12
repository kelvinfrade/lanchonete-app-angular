import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from 'src/app/app.router';


import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HomeComponent,
    ErrorComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
