import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  TextField, Typography, Alert } from '@mui/material';
import CustomButtonWithLoader from '../atoms/CustomButton'
import { login } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../../store/store';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!username || !password) {
      setError('Username y Password son obligatorios');
      setLoading(false);
      return;
    }

    try {
      const result = await dispatch(login({ username, password })).unwrap();

      setUsername('');
      setPassword('');
      setLoading(false);

      if (result.role === 'admin') {
        navigate('/dashboard');
      } else if (result.role === 'trainer') {
        navigate('/trainer');
      } else if (result.role === 'coder') {
        navigate('/coder');
      } else {
        navigate('/login');
      }

      console.log('Resultado del login:', result);
    } catch (error) {
      setLoading(false);
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Typography
        style={{ textAlign:'center'}}
        variant="h4"
        component="h1"
        gutterBottom
      >
        Login
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        fullWidth
      />
      <CustomButtonWithLoader
        type="submit"
        variant="contained"
        fullWidth
        style={{ marginTop: '16px' }}
        disabled={loading}
        loading={loading}
      >
        Login
      </CustomButtonWithLoader>
    </form>
  );
};

export default LoginForm;
