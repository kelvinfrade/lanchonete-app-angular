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

    exclui(cliente){
      this.clienteService.deleteCliente(cliente).subscribe(res =>{
        if(res == null ){
        console.log('Excluido com sucesso!')
        this.getClientes();
      }
      })
      


    }

    ngOnInit() {
    this.getClientes();
  }

}
