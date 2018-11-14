import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos:any;
  constructor(private produtoService:ProdutosService) {   }

    getProdutos(){
      this.produtoService.getProdutos().then(data =>{
        this.produtos = data;
      })
    }

    exclui(produto){
      this.produtoService.deleteProduto(produto).subscribe(res =>{
        if(res == null ){
        console.log('Excluido com sucesso!')
        this.getProdutos();
      }
      })

    }

    ngOnInit() {
    this.getProdutos();
  }

}
