import React from 'react';

interface ContainerImgProps {
    src: string;
    alt: string;
}

const ContainerImg: React.FC<ContainerImgProps> = ({ src, alt }) => {
    return (
        <img width={'50px'} src={src} alt={alt} />
    );
};

export default ContainerImg;
