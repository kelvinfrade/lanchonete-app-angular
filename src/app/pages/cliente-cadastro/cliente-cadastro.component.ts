import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {
  sucesso = false;
  cliente = { nome: '', cpf: '', email: '', telefone: ''}

  constructor ( private clientesService: ClientesService ) { }

  insere () {
    if(this.clientesService.insertCliente(this.cliente).subscribe(cliente => this.cliente))
    this.sucesso = true;

  }

  ngOnInit() {

  }

}
