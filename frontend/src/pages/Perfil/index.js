import { useEffect, useState } from 'react';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiTrash2, FiPower } from 'react-icons/fi'
import logoImg  from '../../assets/logo.svg';
import '../../global.css';
import './styles.css';
import api from '../../services/api';

export default function Cadastro(){

    const history = useHistory();
    const [casos, setCasos] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongNome = localStorage.getItem('ongNome');

    useEffect(() => {
        api.get(`ongs/${ongId}/casos`)
        .then(response => {
            setCasos(response.data);
        })
        .catch(error => {
            if (error && error.response && error.response.data)
                alert(error.response.data.error);
        })
    }, [ongId]);


    async function handleDelete(id) {
        try {
            await api.delete(`casos/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            setCasos(casos.filter(caso => caso.id !== id));

        } catch (error) {
            if (error && error.response && error.response.data)
                alert(error.response.data.error);
        }
    }

    async function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
     <div className="perfil-container">
         <header>
            <img src={logoImg} alt="Be the Hero"/>
            <span>Bem vinda, {ongNome}</span>

            <Link className="button" to="/casos/novo">
                Cadastrar novo caso
            </Link>
            <button type="button" onClick={handleLogout}>
                <FiPower size={18} color="#E02041" />
            </button>

         </header>

         <h1>Casos cadastrados</h1>

        <ul>
          {casos.map(caso => (
            <li key={caso.id}>
                <strong>CASO:</strong>
                <p>{caso.titulo}</p>

                <strong>DESCRIÇÃO</strong>
                <p>{caso.descricao}</p>

                <strong>VALOR:</strong>
                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.valor)}</p>

                <button type="button" onClick={() => handleDelete(caso.id)}>
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>
            ))}
        </ul>
     </div>
    );
}