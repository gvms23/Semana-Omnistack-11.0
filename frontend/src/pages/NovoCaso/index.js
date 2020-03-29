import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'

import './styles.css';

export default function NovoCaso() {
    return (
        <div className="novo-caso-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero logo" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/perfil">
                        <FiArrowLeft size={18} color="#e02041" />
                    Voltar para home
                </Link>
                </section>

                <form>
                    <input placeholder="Titulo do caso"/>
                    <textarea placeholder="Descrição" maxLength="255" />
                    <input placeholder="Valor em reais" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}