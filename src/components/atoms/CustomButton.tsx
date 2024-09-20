import React from 'react';
import { Button, CircularProgress, ButtonProps } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: '#6B5CFF',
    color: 'background',
    '&:hover': {
        backgroundColor: '#5944D9',
    },
}));


interface CustomButtonProps extends ButtonProps {
    loading?: boolean;
}

const CustomButtonWithLoader: React.FC<CustomButtonProps> = ({ loading, children, ...props }) => {
    return (
        <CustomButton {...props}>
        {loading ? <CircularProgress size={24} /> : children}
        </CustomButton>
    );
};

export default CustomButtonWithLoader;
