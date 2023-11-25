
import React, { useState, useEffect } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

function LinhaLivro({ livro, excluir }) {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        <button className="btn btn-danger" onClick={() => excluir(livro)}>
          Excluir
        </button>
      </td>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    atualizarLivros();
  }, [carregado]);

  const atualizarLivros = () => {
    const controleLivro = new ControleLivros();
    setLivros(controleLivro.obterLivros());
  };

  const excluir = (livro) => {
    console.log('Excluir livro:', livro);
    const controleLivro = new ControleLivros();
    controleLivro.excluir(livro.codigo); // Exclui permanentemente o livro
    atualizarLivros();
  };
  return (
    <main className="container mt-4">
      <h1 className="mb-4">Lista de Livros</h1>
      <table className="table table-striped">
        <thead className="thead-dark">  
          <tr>
            <th>Ações</th>
            <th>Código</th>
            <th>Título</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
}
