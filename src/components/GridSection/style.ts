import styled from 'styled-components';
import { Card, Grid } from '@mui/material';

export const GridSection = styled.section`
    padding: 45px 0;
    display: flex;
    background-color: #1E1E1E;

`;


export const GridInner = styled.section`
    padding: 45px 0;
    display: flex;
    background-color: #1E1E1E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const GridContainer = styled(Grid)`
    padding: 45px 0;
`;

export const CustomCard = styled(Card)`
    background-color: #212121;
`;

