import CustomLink from '@/UI/CustomLink';
import { Box, Button, Container, Typography } from '@mui/material';
export default function NotFound() {
    return (
        <Container
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                textAlign: 'center',
                padding: '120px 10px'
            }}
        >
            <Typography variant="h1" component="h1" sx={{ fontSize: '5rem', fontWeight: 'bold' }}>
                404
            </Typography>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                Упс! Страница не найдена.
            </Typography>
            <CustomLink
                href="/contact"
                passHref
                title='Главная страница'
                aria-label='Главная страница'
            >
                Вернуться на главную
            </CustomLink>

        </Container>

    );
};
