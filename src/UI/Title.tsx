'use client'
import styled from 'styled-components';
import { Typography } from '@mui/material'

const Title = styled(Typography)`
    color: #FFFFFF !important;
    font-weight: 600!important;
    font-size: 36px !important;
    letter-spacing: 0 !important;
    line-height: 1em !important;
    @media (min-width: 479.99px) {
        font-size: 42px !important;
    }
    @media (min-width: 767.99px) {
        font-size: 48px !important;
    }
`;


export default Title