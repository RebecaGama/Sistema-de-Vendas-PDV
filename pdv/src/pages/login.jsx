import React, { useState } from 'react';
import '../style/login.scss';
import Vender from './vender.jsx';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleClick = () => {
        setLoggedIn(true);
    };

    if (loggedIn) {
        return <Vender />;
    }

    return (
        <div className='login'>
            LOGIN
            <div className="form">
                <input type="text" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Senha" />
                <button className="button" onClick={handleClick}>
                    <i className="bx bx-log-in-circle"></i>
                    <span>Entrar</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
