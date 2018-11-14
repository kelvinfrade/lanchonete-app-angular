import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {
  sucesso = false;
  titulo = null;
  textBtn1 = null;
  id = null;
  produto: any = { id: null, descricao: '', valor: '', quantidade: '', }

  constructor(private produtosService: ProdutosService,
    private route: ActivatedRoute) { }

  salvaProduto() {
    if (this.id) {
      if (this.produtosService.updateProduto(this.produto).subscribe(produto => this.produto)) {
        this.sucesso = true;
      }
    }
    else {
      if (this.produtosService.insertProduto(this.produto).subscribe(produto => this.produto))
        this.sucesso = true;
      //this.cliente = { nome: '', cpf: '', email: '', telefone: ''}
    }

  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.id = res['id'];
    })

    if (this.id) {
      this.titulo = 'Editar produto';
      this.textBtn1 = 'Salvar';
      this.produtosService.getProduto(this.id).then(res => {
        console.log('res: ' + JSON.stringify(res));
        this.produto = res;
      })
    }
    else {
      this.titulo = 'Cadastro de produtos';
      this.textBtn1 = 'Cadastrar';
    }

  }

}
