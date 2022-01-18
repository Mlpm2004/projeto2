import React from "react";
import { useEffect,useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../context/cart';
import {Imagem,ContainerHome,ItemLivro} from "./style";
import {ItemLivroName,Container,Botao} from "../../component/style";
function Home(){
    const { addItem } = useContext(CartContext)
    const params = useParams();
    const url='http://localhost:3333/books';
    const [livros,setLivros]=useState([]);
   // const [detalhes,setDetalhes]=useState([]);
    useEffect(()=>{
        async function handleGetLivro(){
            const response = await fetch(url);
            const data = await response.json();
            setLivros(data);
        }
        handleGetLivro(params.id);
    },[params.id])
    const dados = livros.map((livro)=>(
        <ItemLivro>
            <Imagem src={livro.image} alt="Foto do Livro"></Imagem>     
            <ItemLivroName><b>{livro.title}</b></ItemLivroName>
            <ItemLivroName>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(livro.price)}</ItemLivroName>
            <ItemLivroName><Botao onClick={() => {addItem(livro)}}>Comprar</Botao></ItemLivroName>
            <ItemLivroName><Link  to={`/details/${livro.id}`}><Botao>Detalhes</Botao></Link></ItemLivroName>
        </ItemLivro>
    ))
  return (
    <Container>
        <h1>Total de Livros {livros.length}</h1>
        
        <ContainerHome>
            {dados}
        </ContainerHome>
    </Container>
  );
}
export default Home
