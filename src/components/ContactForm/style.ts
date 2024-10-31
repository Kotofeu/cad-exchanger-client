import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

export const ContackInner = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 100px 0;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    max-width: 320px;
    width: 100%;
    border-radius: 10px;
    background-color:#1E1E1E;
`;

export const Title = styled(Typography)`
    font-size: 44px !important;
    text-align: center;
    font-weight: 700 !important;
    letter-spacing: 0 !important;
    max-width: 900px;
    line-height: 1.1em !important;
    @media (min-width: 479.99px) {
        font-size: 56px !important;
    }
    @media (min-width: 767.99px) {
        font-size: 65px !important;
    }
`; 
