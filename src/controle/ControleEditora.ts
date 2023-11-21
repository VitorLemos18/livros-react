// ControleEditora.ts
import { Editora } from '../modelo/Editora';

export class ControleEditora {
  private editoras: Array<Editora>;

  constructor() {
    // Inicializar o vetor de editoras com pelo menos três elementos (formato JSON)
    this.editoras = [
      { codEditora: 1, nome: 'Editora A' },
      { codEditora: 2, nome: 'Editora B' },
      { codEditora: 3, nome: 'Editora C' },
    ];
  }

  // Método para obter todas as editoras
  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  // Método para obter o nome da editora com base no código da editora
  getNomeEditora(codEditora: number): string | undefined {
    // Utilizando a operação filter para encontrar a editora com o código correspondente
    const editoraEncontrada = this.editoras.find((editora) => editora.codEditora === codEditora);

    // Retornar o nome da editora se encontrada, caso contrário, retornar undefined
    return editoraEncontrada?.nome;
  }
}
