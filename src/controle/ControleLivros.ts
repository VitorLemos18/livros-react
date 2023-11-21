// ControleLivros.ts
import { Livro } from '../modelo/Livro';
// ControleLivros.ts

  
export class ControleLivros {
  private livros: Array<Livro>;

  constructor() {
    
    // Inicializar o vetor de livros com pelo menos três elementos (formato JSON)
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: 'Livro 1',
        resumo: 'Resumo do Livro 1',
        autores: ['Autor 1'],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: 'Livro 2',
        resumo: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
        autores: ['Autor 2'],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: 'Livro 3',
        resumo: 'Resumo do Livro 3',
        autores: ['Autor 3'],
      },
    ];
  }

  // Método para obter todos os livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // Método para incluir um novo livro
  incluir(novoLivro: Livro): void {
    // Encontrar o código mais alto do vetor e incrementá-lo de um
    const novoCodigo = Math.max(...this.livros.map((livro) => livro.codigo)) + 1;
    // Atribuir o novo código ao livro a ser incluído
    novoLivro.codigo = novoCodigo;
    // Adicionar o novo livro ao vetor de livros
    this.livros.push(novoLivro);
  }

  // Método para excluir um livro com base no código
  excluir(codigoLivro: number): void {
    // Encontrar o índice do livro com o código fornecido
    const indiceLivro = this.livros.findIndex((livro) => livro.codigo === codigoLivro);
    // Remover o livro usando splice se o índice for encontrado
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1);
    }
  }
}
