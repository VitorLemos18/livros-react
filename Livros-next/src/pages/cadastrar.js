import Head from "next/head";
import { useState } from "react";
import { headers } from "../../next.config";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default function Cadastrar() {
  const [data, setData] = useState({
    titulo: "",
    resumo: "",
    autor: "",
    editor: [],
  });

  //Declarar a variavel para receber mensagem
  //const [mensage, setMenssage] = useState("");

  const valueInput = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  //async
  const addLivro = async (e) => {
    e.preventDefault();

    /*console.log("DALE CABRON")
    console.log("titulo" + data.titulo)
    console.log("resumo" + data.resumo)
    console.log("autor" + data.autor)
    console.log("editor" + data.editor)
    */
    
    //Criar a constante com os dados do cabeçalho
    const headers = {
        'headers': {
            // Indicar que será enviado os dados em formato de objeto
            'Content-type': 'application/json'
        }
    }
    
    await axios.post('http://localhost:8080/livroCad' , data, headers)
      .then((response) => {
        setMessage(response.data.mensagem);

        //Limpar formulario após cadastar se estiver ok
        setData({
          titulo: '',
          resumo: '',
          autor: '',
          editor: []
        })
      }).catch((err) => {
        if(err.response){
          setMessage("err.response.data.mensagem")
        }else{
          setMessage("Erro")
        }
      });
    
  };

  return (
    <>
      <Head>
        <title>Inserir Livros</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/cadastrar">Inserir</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


        <form onSubmit={addLivro} className="container mt-4">
          <div className="mb-3">
          <h2 className="mb-4">Cadastrar Livro</h2>
            <label htmlFor="titulo" className="form-label">
              Título
            </label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              name="titulo"
              placeholder="Digite o título"
              onChange={valueInput}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">
              Resumo
            </label>
            <input
              type="text"
              className="form-control"
              id="resumo"
              name="resumo"
              placeholder="Digite o resumo"
              onChange={valueInput}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="autor" className="form-label">
              Autor
            </label>
            <input
              type="text"
              className="form-control"
              id="autor"
              name="autor"
              placeholder="Digite o autor do livro"
              onChange={valueInput}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="editor" className="form-label">
              Editor
            </label>
            <input
              type="text"
              className="form-control"
              id="editor"
              name="editor"
              placeholder="Digite o editor do livro"
              onChange={valueInput}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </main>
    </>
  );
}
