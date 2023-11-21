import React, { useState } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import { useNavigate } from 'react-router-dom';

const LivroDados = () => {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();
  const navigate = useNavigate();

  // Obtém as opções para o combo de editoras
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  // Estado para as propriedades do livro
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  // Método para tratar a mudança na seleção da combo de editoras
  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  // Método para incluir um novo livro
  const incluir = (event) => {
    event.preventDefault();

    const novoLivro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    controleLivro.incluir(novoLivro);
    navigate('/');
  };
    
  return (
    <main className="container mt-4">
      <h1 className="text-dark">Incluir Novo Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo:</label>
          <textarea
            className="form-control"
            id="resumo"
            rows="4"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores (um por linha):</label>
          <textarea
            className="form-control"
            id="autores"
            rows="4"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="codEditora">Editora:</label>
          <select
            className="form-control"
            id="codEditora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Incluir Livro
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
