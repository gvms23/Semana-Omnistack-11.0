import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import './styles.css';

import logoImg  from '../../assets/logo.svg';
import heroesImg  from '../../assets/heroes.png';
import { Link } from 'react-router-dom';

export default function Login(){
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero" />

                <form action="">
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID"/>
                    <button type="submit" className="button" placeholder="Entrar">
                        Entrar
                    </button>

                    <Link className="back-link" to="/cadastro">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}