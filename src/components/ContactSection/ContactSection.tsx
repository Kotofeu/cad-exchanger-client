import React from 'react';
import Container from '@/UI/Container';
import Title from '@/UI/Title';
import { ContactInner } from './style';
import CustomLink from '@/UI/CustomLink';


const ContactSection = () => {
    return (
        <section>
            <Container>
                <ContactInner>
                    <Title variant="h3" sx={{textAlign: 'center'}}>Менее важный заголовок</Title>
                    <CustomLink
                        href="/contact"
                        passHref
                        title='Страница связи'
                        aria-label='Страница связи'
                    >
                        Связаться
                    </CustomLink>
                </ContactInner>
            </Container>

        </section>
    );
};

export default ContactSection;