import styled from 'styled-components';
import { motion } from 'framer-motion';


export const HomeSectionInner = styled.div`
    padding: 120px 0 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    @media (min-width: 767.99px) {
        font-size: 48px !important;
        align-items: flex-start;
        flex-direction: row;
        gap: 45px;

    }    
`;

export const TextBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 13px;
    align-items: center;
    justify-content: center;
    max-width: 420px;
    width: 100%;
    @media (min-width: 767.99px) {
        gap: 24px;
    } 
`;

export const VideoWrapper = styled(motion.div)`
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    max-width: 530px;
    min-width: 300px;
    background-color: #1E1E1E;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;