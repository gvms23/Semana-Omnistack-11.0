import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiPower } from 'react-icons/fi'
import './styles.css';
import '../../global.css';

import logoImg  from '../../assets/logo.svg';

export default function Cadastro(){
    return (
     <div className="perfil-container">
         <header>
            <img src={logoImg} alt="Be the Hero"/>
            <span>Bem vinda, APAD</span>

            <Link className="button" to="/casos/novo">
                Cadastrar novo caso
            </Link>
            <button type="button">
                <FiPower size={18} color="#E02041" />
            </button>

         </header>

         
         <h1>Casos cadastrados</h1>

        <ul>
            <li>
                <strong>CASO:</strong>
                <p>Caso 1</p>

                <strong>DESCRIÇÃO</strong>
                <p>Descrição caso 1</p>

                <strong>VALOR:</strong>
                <p>R$ 120,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>
            <li>
                <strong>CASO:</strong>
                <p>Caso 1</p>

                <strong>DESCRIÇÃO</strong>
                <p>Descrição caso 1</p>

                <strong>VALOR:</strong>
                <p>R$ 120,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>
            <li>
                <strong>CASO:</strong>
                <p>Caso 1</p>

                <strong>DESCRIÇÃO</strong>
                <p>Descrição caso 1</p>

                <strong>VALOR:</strong>
                <p>R$ 120,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>
            <li>
                <strong>CASO:</strong>
                <p>Caso 1</p>

                <strong>DESCRIÇÃO</strong>
                <p>Descrição caso 1</p>

                <strong>VALOR:</strong>
                <p>R$ 120,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>
            <li>
                <strong>CASO:</strong>
                <p>Caso 1</p>

                <strong>DESCRIÇÃO</strong>
                <p>Descrição caso 1</p>

                <strong>VALOR:</strong>
                <p>R$ 120,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>
           
        </ul>
     </div>
    );
}