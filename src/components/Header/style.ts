'use client'
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    background-color: #1E1E1E;
`;
export const HeaderNavigation = styled.nav`
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Logo = styled(Typography)`
  font-size: 24px !important;;
  font-weight: bold !important;;
  color: #FFFFFF !important;;
`;