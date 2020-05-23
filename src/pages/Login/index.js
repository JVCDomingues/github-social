import React, { useState } from 'react';

import './styles.css';

import logo from '../../assets/github-logo.webp';

import api from '../../services/api';

function Login({ history }) {
    const [username, setUsername] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.get(`/users/${username}`);

        const { login } = response.data;
        
        history.push(`/user/${login}`);
    }

    return (
        <div className="login-container">
            <img src={logo} alt="GitHub Logo"/>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Digite seu usuário"
                value={username}
                onChange={e => setUsername(e.target.value)}/>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;