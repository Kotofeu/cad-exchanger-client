import {FC} from 'react';
import Link from 'next/link';
import { HeaderContainer, HeaderNavigation, Logo } from './style';
import Container from '@/UI/Container';
import CustomLink from '@/UI/CustomLink';

const Header: FC = () => {
    return (
        <HeaderContainer>
            <Container>
                <HeaderNavigation>
                    <Link href="/" passHref>
                        <Logo>CADEX</Logo>
                    </Link>
                    <CustomLink href="/contact" passHref>
                        Контакты
                    </CustomLink>
                </HeaderNavigation>
            </Container>
        </HeaderContainer>
    );
};

export default Header;