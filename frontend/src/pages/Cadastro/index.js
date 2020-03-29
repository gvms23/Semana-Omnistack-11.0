import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';
import '../../global.css';


import logoImg  from '../../assets/logo.svg';

export default function Cadastro(){
    return (
     <div className="cadastro-container">
         <div className="content">
             <section>
                <img src={logoImg} alt="Be the Hero"/>

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de suas ONGs.</p>
             
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Já sou cadastrado
                </Link>
             </section>



             <form action="">
                <input placeholder="Nome da ONG"/>
                <input type="email" placeholder="Nome da ONG"/>
                <input placeholder="WhatsApp"/>

                <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" style={{width: 80}}/>
                </div>

                <button className="button" type="submit">Cadastrar</button>
             </form>
         </div>
     </div>
    );
}