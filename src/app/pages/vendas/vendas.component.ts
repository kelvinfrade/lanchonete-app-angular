import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { ProdutosService } from '../../services/produtos.service';
import { VendasService } from '../../services/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})

export class VendasComponent implements OnInit {
  venda = { cliente: '', produto: '', quantidade: '' };
  titulo = 'Vendas';
  clientes: any;
  produtos: any;
  textBtn = 'Gravar';
  sucesso = false;
  total: any = 0;


  constructor(private clientesService: ClientesService, private produtosService: ProdutosService, private vendasService: VendasService) { }

  salva() {
    let objVenda = { 
      cliente: this.venda.cliente,
      produto: this.produtos[this.venda.produto].url,
      quantidade: this.venda.quantidade
    }
    if (this.vendasService.insertVenda(objVenda).subscribe(venda => objVenda)) {
      this.sucesso = true;
      //this.cliente = { nome: '', cpf: '', email: '', telefone: ''}
    }
  }

  calcTotal() {
    let prod = this.produtos[this.venda.produto];
    let qtd: any = this.venda.quantidade;
    if (prod && qtd)
      this.total = (prod.valor * qtd).toFixed(2);
  }


  getClientes() {
    this.clientes = [];
    this.clientesService.getClientes().then(data => {
      console.log(data)
      this.clientes = data;
    })
  }

  getProdutos() {
    this.produtos = [];
    this.produtosService.getProdutos().then(data => {
      console.log(data)
      this.produtos = data;
    })
  }

  ngOnInit() {
    this.getClientes();
    this.getProdutos();
  }

}
