import React from "react";
import {useParams} from 'react-router-dom';
import {useEffect,useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/cart";
import Container from "../../style/container";
import ItemLivroName from "../../style/item-livro-name";
import Paragrafo from "../../style/paragrafo";
import TituloDescricao from "../../style/titulo-desc";
import ContainerFoto from "../../style/container-foto";
import DescLivro from "../../style/desc-livro";
import ContainerDesc from "../../style/container-desc";
import BotaoDesc from "../../style/botao-cart";
function Details(){
    const params = useParams();
    const { addItem } = useContext(CartContext)
    const url=`http://localhost:3333/books?id=${params.id}`;
    const [book,setLivro]=useState([]);
    useEffect(()=>{
        async function handleGetLivro(){
            const response = await fetch(url);
            const data = await response.json();
            setLivro(data);
        }
        handleGetLivro();
    },[])
    const dados = book.map((livro)=>(

        <DescLivro>
            <ContainerFoto>
                <img  src={livro.image} alt="Foto do Livro"></img> 
            </ContainerFoto> 
            <ContainerDesc>
                <TituloDescricao><b>{livro.title}</b></TituloDescricao>
                <TituloDescricao>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(livro.price)}</TituloDescricao>
                <Paragrafo>{livro.description}</Paragrafo>
                <ItemLivroName><Link className="cat1" to={`/details/${livro.id}`}><BotaoDesc onClick={() => {addItem(livro)}}>Adicionar ao Carrinho</BotaoDesc></Link></ItemLivroName>
            </ContainerDesc>
        </DescLivro>
    ))

    return (
        <Container>
             {dados}
        </Container>
    );
}
export default Details