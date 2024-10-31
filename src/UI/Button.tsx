'use client'
import styled from 'styled-components';
import { Button as MaterialButton } from '@mui/material'

const Button = styled(MaterialButton)`
     background-color: #FF990B !important;
     color: #FFFFFF !important;
     border: none;
     padding: 10px 20px!important;
     font-size: 18px!important;
     font-weight: 500!important;
     cursor: pointer;
     transition: background-color 0.3s ease;

     &:focus-visible,
     &:target,
     &:hover {
       background-color: #E4890A !important;
     }
     
     &:disabled {
       background-color:  #2B2B2B !important;
     }

`
  ;

export default Button