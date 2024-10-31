import React from 'react';
import { FooterContainer, FooterInner, Logo } from './style';
import Container from '@/UI/Container';
const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Container>
                <FooterInner>
                    <Logo>Petrov for CADEX 2024</Logo>
                </FooterInner>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
