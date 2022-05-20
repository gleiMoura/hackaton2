import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";



export default function PutContent() {

const [nome, setNome] = useState("");
const [titulo, setTitulo] = useState("");
const [descricao, setDescricao] = useState("");
const [artigo, setArtigo] = useState("");
const navigate = useNavigate();


function cadastro(event){
    event.preventDefault();
    
    const requisicao = axios.post("https://hackaton-driven.herokuapp.com/posts", {
      name: nome,
      articleName: titulo,
      description: descricao,
      article: artigo
});
    requisicao.then(() => {
        alert("Post cadastrado com sucesso!");
        navigate("/");
    });
    requisicao.cath(() => {
        alert("Erro ao cadastrar post!");
    });}   

    return (
        <Formularios>
            <h1>PUBLICAR ARTIGO</h1>
            <Formulario onSubmit={cadastro}>
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="text"
                placeholder="Titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
              <input
                type="text"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
              <input
                type="url"
                placeholder="link do artigo"
                value={artigo}
                onChange={(e) => setArtigo(e.target.value)}
              />
              <button type="submit">Cadastrar</button>
            </Formulario>
        </Formularios>
  );
}

const Formularios = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100vh;
  `

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  input{
    margin: 10px;
  }
  `