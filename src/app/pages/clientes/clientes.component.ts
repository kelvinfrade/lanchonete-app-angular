import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes:any;
  constructor(private clienteService:ClientesService) {   }

    getClientes(){
      this.clienteService.getClientes().then(data =>{
        this.clientes = data;
      })
    }


  ngOnInit() {
    this.getClientes();
  }

}
