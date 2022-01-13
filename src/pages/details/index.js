import React from "react";
import {useParams} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
function Details(){
    const params = useParams();
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
        <div className="container desc-livro">
            <div className="container-foto">
                <img  src={livro.image} alt="Foto do Livro"></img> 
            </div> 
            <div className="container-desc">
                <span className="titulo-desc"><b>{livro.title}</b></span>
                <span className="preco-desc">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(livro.price)}</span>
                <div ><p className="paragrafo">{livro.description}</p></div>
                <div className="item-livro-name"><Link className="cat1" to={`/details/${livro.id}`}><button className="botao-cart" >Adicionar ao Carrinho</button></Link></div>
            </div>
        </div>
    ))

    return (
        <div>
            <Link to="/"><button className="botao-cart" >Home</button></Link>
            {dados}
        </div>
    );
}
export default Details