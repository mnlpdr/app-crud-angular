import { Component } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-crud';
  nome = '';
  descricao = '';
  preco: number = 0;
  produtos: Produto[] = [];
  idCounter = 1;

  adicionarProduto() {
    const novoProduto = new Produto(this.idCounter++, this.nome, this.descricao, this.preco);
    this.produtos.push(novoProduto);
    this.limparCampos();
  }

  editarProduto(produto: Produto) {
    this.nome = produto.nome;
    this.descricao = produto.descricao;
    this.preco = produto.preco;
  }

  removerProduto(id: number) {
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
  }

  limparCampos() {
    this.nome = '';
    this.descricao = '';
    this.preco = 0;
  }
}
