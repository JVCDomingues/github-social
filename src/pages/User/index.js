import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

function User({ match }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/users/${match.params.username}`);

      setUser(response.data);
    }
    
    loadUser();

  }, [match.params.username]);

  return (
    <div className="user-container">
      
      <article>
        <div className="card-header">
          <img src={user.avatar_url} alt="User Avatar" />
          <div className="card-title">
            <span className="card-title">{user.name}</span>
            <small className="description">{user.bio}</small>
          </div>
        </div>
        <div className="user-info">
          <div className="followers">
            <p>Seguidores</p>
            <p className="info">{user.followers}</p>
          </div>
          <div className="following">
            <p>Seguindo</p>
            <p className="info">{user.following}</p>
          </div>
          <div className="repositories">
            <p>Repositórios</p>
            <p className="info">{user.public_repos}</p>
          </div>
        </div>
        <a href={user.html_url} target="_blank">Acessar Perfil</a>
      </article>
    
      
    </div>
  );
}

export default User;