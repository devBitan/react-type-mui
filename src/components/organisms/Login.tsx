import React from 'react';
import AuthTemplate from '../templates/AuthTemplate';
import LoginForm from './LoginForm';

const Login: React.FC = () => (
    <AuthTemplate>
        <LoginForm />
    </AuthTemplate>
);

export default Login;
