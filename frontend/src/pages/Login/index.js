import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import './styles.css';

import logoImg  from '../../assets/logo.svg';
import heroesImg  from '../../assets/heroes.png';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api';

export default function Login(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('auth/login', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', response.data.nome);

            history.push('/perfil');

        } catch (error) {
            if (error && error.response && error.response.data)
                alert(error.response.data.error);
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID" 
                    value={id}
                    onChange={e => setId(e.target.value)}
                    required/>

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