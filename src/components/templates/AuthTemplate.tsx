import React, { ReactNode } from 'react';
import { Container, CssBaseline } from '@mui/material';

interface AuthTemplateProps {
    children: ReactNode;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => (
    <>
        <CssBaseline />
        <Container maxWidth="xs" style={{ marginTop: '64px' }}>
            {children}
        </Container>
    </>
);

export default AuthTemplate;
