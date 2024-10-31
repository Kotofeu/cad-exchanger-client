'use client'
import { CardContent, Typography, Grid } from '@mui/material';
import Title from '@/UI/Title';
import { CustomCard, GridContainer, GridInner, GridSection } from './style';
import Container from '@/UI/Container';
import CustomLink from '@/UI/CustomLink';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2
        }
    }),
};

const mockData = [
    { title: 'Использование Framer Motion', description: 'Анимации и переходы, которые делают интерфейс более живым и интерактивным.' },
    { title: 'Красивые стили', description: 'Эстетически привлекательный дизайн, который улучшает пользовательский опыт.' },
    { title: 'Полное соответствие ТЗ', description: 'Все требования тестового задания выполнены в полном объеме.' },
    { title: 'Максимальная оптимизация', description: 'Оптимизированный код и ресурсы для быстрого времени загрузки.' },
    { title: 'SEO оптимизация', description: 'Оптимизированные метаданные и структура для повышения видимости в поисковых системах.' },
    { title: 'Использование Open Graph', description: 'Настроенные метатеги Open Graph для лучшего отображения в социальных сетях.' },
];

const CardGrid = () => {
    return (
        <GridSection>
            <Container>
                <GridInner>
                    <Title variant="h2" sx={{ textAlign: 'center' }}>Тоже важный заголовок</Title>
                    <GridContainer container spacing={3}>
                        {mockData.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.article
                                    initial="hidden"
                                    animate="visible"
                                    custom={index}
                                    variants={cardVariants}
                                    style={{ height: '100%' }}
                                >
                                    <CustomCard variant="outlined" sx={{ height: '100%' }}>
                                        <CardContent>
                                            <Typography variant="h6">{item.title}</Typography>
                                            <Typography variant="body2">{item.description}</Typography>
                                        </CardContent>
                                    </CustomCard>
                                </motion.article>
                            </Grid>
                        ))}
                    </GridContainer>
                    <CustomLink
                        href="/contact"
                        passHref
                        title='Страница связи'
                        aria-label='Страница связи'
                    >
                        Связаться
                    </CustomLink>
                </GridInner>
            </Container>
        </GridSection>
    );
};

export default CardGrid;