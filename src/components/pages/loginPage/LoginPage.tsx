import React from 'react';
import Login from '../../organisms/Login';
import './style.css';


export const LoginPage: React.FC = () => (
    <div className="login-container">
        <div className="left-panel">
            <p className='one-text'>WELCOME TO</p>
            <p className='two-text'>CODIGO R</p>
        </div>
        <div className="right-panel">
            <Login />
        </div>
    </div>
);

