import React, { useState } from 'react';
import Login from './login.jsx';
import '../style/user.scss';

const User = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleClick = () => {
        setLoggedIn(true);
    };

    if (loggedIn) {
        return <Login />;
    }

    return (
        <div className='user'>
            MEU PERFIL
            <div className="form">
            <input type="text" name="username" placeholder="Nome" />
                <input type="text" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Senha" />
                <button className="button" onClick={handleClick}>
                    <i className="bx bx-log-out-circle"></i>
                    <span>Sair</span>
                </button>
            </div>
        </div>
    );
};

export default User;
