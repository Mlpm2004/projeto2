import React from "react";
import { useEffect,useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Botao from '../../style/botao/botao'
import { CartContext } from '../../context/cart';
import Imagem from "../../style/imagem";
import ContainerHome from "../../style/container-home";
import Container from "../../style/container";
import ItemLivro from "../../style/item-livro";
import ItemLivroName from "../../style/item-livro-name";
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
