// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu de Navegação */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                  Livros React
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/novo">
                  Novo
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/novo" element={<LivroDados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
