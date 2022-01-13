import React from "react";
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import Details from "../details";
function Home(){
    const url='http://localhost:3333/books';
    const [livros,setLivros]=useState([]);
    const [detalhes,setDetalhes]=useState([]);
    useEffect(()=>{
        async function handleGetLivro(){
            const response = await fetch(url);
            const data = await response.json();
            setLivros(data);
        }
        handleGetLivro();
    },[])
    function handleClick(indice) {
        console.log(indice)
    }
    const dados = livros.map((livro)=>(
      <div className="item-livro">
        <img className="imagem " src={livro.image} alt="Foto do Livro"></img>     
        <span className="item-livro-name"><b>{livro.title}</b></span>
       <span className="item-livro-name">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(livro.price)}</span>
        <div className="item-livro-name"><button className="botao" >Comprar</button></div>
        <div className="item-livro-name"><button className="botao" onClick={() => handleClick(livro.id)}>Detalhes</button></div>
    </div>
    ))
  return (
    <div className="container">
        <h1>Total de Livros {livros.length}</h1>
        <div className="container-home">
            {dados}
        </div>
    </div>
  );
}
export default Home
