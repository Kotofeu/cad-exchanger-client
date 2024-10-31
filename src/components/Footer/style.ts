'use client'
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const FooterComponent = styled(motion.footer)`
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #1E1E1E;
`;
export const FooterInner = styled.div`
    display: flex;
    padding: 20px 0;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Logo = styled(Typography)`
  font-size: 24px !important;;
  font-weight: bold !important;;
  color: #FFFFFF !important;;
`;