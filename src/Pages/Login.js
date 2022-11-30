import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../Componentes/Header";
import "./Login.css";

export default function Login() {
  const[login, setLogin] = useState({email:"", senha:""})
  
  const navigate = useNavigate()

  function Logar(e) {
    e.preventDefault();
    alert("usuário logado");
    navigate("/home")
  }

  return (
    <div>
      <Header />
      <div className="formularioTodo">
        <div className="informativo">
          Login 
        </div>
        <form className="formulario" onSubmit={Logar}>
          {/* <label>
            Nome -
            <input
              className="typeNome"
              type="Nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label> */}
          <label>
            <div className="emailLogin">Email</div>
            <input
              className="typeEmail"
              type="email"
              required
              value={login.email}
              onChange={(e) => setLogin({...login, email: e.target.value})}
            />
          </label>
          <label>
            <div className="senha">Senha</div>
            <input
              className="typeSenha"
              type="password"
              minLength={8}
              required
              value={login.password}
              onChange={(e)=>{setLogin({...login, password: e.target.value})}}
            />
          </label>
          <button className="buttao" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
