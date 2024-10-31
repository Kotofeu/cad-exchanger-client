import { Container, Typography, Button } from '@mui/material';

const HomePage: React.FC = () => {
    return (
        <Container >
            <Typography variant="h4">Welcome to My Next App</Typography>
            <Button variant="contained" color="primary" href="/contact">
                Contact Us
            </Button>
        </Container>
    );
};

export default HomePage;