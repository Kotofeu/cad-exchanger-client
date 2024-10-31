import React from 'react';
import { FooterComponent, FooterInner, Logo } from './style';
import Container from '@/UI/Container';
const Footer: React.FC = () => {
    return (
        <FooterComponent
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <Container>
                <FooterInner>
                    <Logo>Petrov for CADEX 2024</Logo>
                </FooterInner>
            </Container>
        </FooterComponent>
    );
};

export default Footer;
