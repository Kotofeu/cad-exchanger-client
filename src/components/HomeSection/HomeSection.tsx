'use client'
import React from 'react';
import { Typography } from '@mui/material';
import { HomeSectionInner, TextBox, VideoWrapper } from './style';
import YouTube from 'react-youtube';
import Title from '@/UI/Title';
import Container from '@/UI/Container';

const HomeSection = () => {
    const videoOptions = {
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <section>
            <Container>
                <HomeSectionInner>
                    <TextBox
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        <Title variant="h1">Самый важный заголовок</Title>
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                            Never gonna give you up
                            Never gonna let you down
                            Never gonna run around and desert you
                            Never gonna make you cry
                            Never gonna say goodbye
                            Never gonna tell a lie and hurt you
                        </Typography>
                    </TextBox>
                    <VideoWrapper
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        <YouTube videoId="dQw4w9WgXcQ" opts={videoOptions} />
                    </VideoWrapper>
                </HomeSectionInner>
            </Container>
        </section>


    );
};

export default HomeSection;