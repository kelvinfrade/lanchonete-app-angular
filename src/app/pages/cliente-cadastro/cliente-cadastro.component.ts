import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {
  sucesso = false;
  titulo = null;
  textBtn = null;
  id = null;
  cliente: any = { id: null, nome: '', cpf: '', email: '', telefone: '', }

  constructor(private clientesService: ClientesService,
    private route: ActivatedRoute) { }

  salva() {
    if (this.id) {
      if (this.clientesService.updateCliente(this.cliente).subscribe(cliente => this.cliente)) {
        this.sucesso = true;
      }
    }
    else {
      if (this.clientesService.insertCliente(this.cliente).subscribe(cliente => this.cliente))
        this.sucesso = true;
      //this.cliente = { nome: '', cpf: '', email: '', telefone: ''}
    }

  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.id = res['id'];
    })

    if (this.id) {
      this.titulo = 'Editar cliente';
      this.textBtn = 'Salvar';
      this.clientesService.getCliente(this.id).then(res => {
        console.log('res: ' + JSON.stringify(res));
        this.cliente = res;
      })
    }
    else {
      this.titulo = 'Cadastro de clientes';
      this.textBtn = 'Cadastrar';
    }

  }

}
