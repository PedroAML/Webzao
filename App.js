import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <body>
        <div id="wrapper-header">
          <div className="container">
            <div className="row align-items-center">
                <div className="col col-lg-2">
                  <a id="logo" href="#">
                     <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logomrca" />
                  </a>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col">
                      <form id="search-form">
                        <div className="input-group">
                          <input type="text" className="form-control"/>
                            <div className="input-group-append">
                              <span className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></span>
                            </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                  <div id="header-actions" className="col col-lg-2">
                    <div className="row">
                      <div className="col">
                        <a id="user" href="meusServicos.html">
                          <img src={process.env.PUBLIC_URL + '/img/male-user.png'} alt="Usuário"/>
                        </a>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
        
        <div className="menuHeader">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-link" href="index.html">Home</a>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorias</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <a className="dropdown-item" href="#">Categoria 01</a>
                          <a className="dropdown-item" href="#">Categoria 02</a>
                          <a className="dropdown-item" href="#">Categoria 03</a>
                        </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="cadastro.html">Cadastrar</a>
                    </li>
                    <li className="nav-item" id="itemMServc">
                      <a className="nav-link" href="meusServicos.html">Meus Serviços</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sobre</a>
                    </li>
                  </ul>
                </div>
            </nav>
          </div>
        </div>

        <div className="container">
          <div id="wrapper-content">
            <div className="card text-center">
              <div className="card-header"></div>
                <div className="card-body">
                  <h5 className="card-title"><p><span id="titAd">Cad</span><span id="titService">astro</span></p></h5>
                </div>
              <div className="card-footer text-muted"></div>
            </div>
          </div>
          <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputFirstName">Nome</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputLastName">Sobrenome</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
            </div>
            <div className="form-group">
                <label for="inputPhone">Telefone1</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="(dd)(telefone)"/>
            </div>
            <div className="form-group">
                    <label for="inputPhone">Telefone2</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="(dd)(telefone)"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputLastName">Endereço</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputLastName">Complemento</label>
                  <input type="password" className="form-control" id="inputPassword4"/>
                </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label for="inputCity">Cidade</label>
                <input type="text" className="form-control" id="inputCity"/>
              </div>
              <div className="form-group col">
                <label for="inputState">Estado</label>
                <select id="inputState" className="form-control">
                <option selected>...</option>
                  <option>Acre (AC)</option>
                  <option>Alagoas (AL)</option>
                  <option>Amapá (AP)</option>
                  <option>Amazonas (AM)</option>
                  <option>Bahia (BA)</option>
                  <option>Ceará (CE)</option>
                  <option>DistritoFederal (DF)</option>
                  <option>Espírito Santo (ES)</option>
                  <option>Goiás (GO)</option>
                  <option>Maranhão (MA)</option>
                  <option>Mato Grosso (MT)</option>
                  <option>Mato Grosso do Sul (MS)</option>
                  <option>Minas Gerais (MG)</option>
                  <option>Pará (PA)</option>
                  <option>Paraíba (PB)</option>
                  <option>Paraná (PR)</option>
                  <option>Pernambuco (PE)</option>
                  <option>Piauí (PI)</option>
                  <option>Rio de Janeiro (RJ)</option>
                  <option>Rio Grande do Norte (RN)</option>
                  <option>Rio Grande do Sul (RS)</option>
                  <option>Rondônia (RO)</option>
                  <option>Roraima (RR)</option>
                  <option>Santa Catarina (SC)</option>
                  <option>São Paulo (SP)</option>
                  <option>Sergipe (SE)</option>
                  <option>Tocantins (TO)</option>
                </select>
              </div>
            </div>
            <div className="form-group"></div>
          </form>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Endereço de Email </label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <small id="emailHelp" className="form-text text-muted">Enviaremos um e-mail de confirmação.</small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
              <small id="emailHelp" className="form-text text-muted">Escolha uma senha forte! Dica: Mais de 6 caracteres e com números</small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Confime sua Senha</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </body>
        <footer>
          <div id="wrapper-footer">
            <div className="container">
              <p>Copyright 2019 - by Startup que Criamos Agora ©</p>   
            </div>
          </div>
        </footer>
    </div>
  );
}
export default App;