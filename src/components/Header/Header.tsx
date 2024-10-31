import { FC } from 'react';
import Link from 'next/link';
import { HeaderContainer, HeaderNavigation, Logo } from './style';
import Container from '@/UI/Container';
import CustomLink from '@/UI/CustomLink';

const Header: FC = () => {
    return (
        <HeaderContainer
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <Container>
                <HeaderNavigation>
                    <Link
                        href="/"
                        passHref
                        title='Главная страница'
                        aria-label='Главная страница'
                    >
                        <Logo>CADEX</Logo>
                    </Link>
                    <CustomLink
                        href="/contact"
                        passHref
                        title='Страница связи'
                        aria-label='Страница связи'
                    >
                        Связаться
                    </CustomLink>
                </HeaderNavigation>
            </Container>
        </HeaderContainer>
    );
};

export default Header;