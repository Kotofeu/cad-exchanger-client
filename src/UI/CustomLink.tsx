'use client'
import Link from 'next/link';
import styled from 'styled-components';


const CustomLink = styled(Link)`
  background-color: #FF990B !important;
  color: #FFFFFF !important;
  border: none;
  padding: 12px 25px;
  font-size: 18px;
  font-family: "Helvetica", sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 10px;
  &:focus-visible,
  &:target,
  &:hover {
    background-color: #E4890A !important;
  }
  
  &:disabled {
    background-color:  #2B2B2B !important;
  }
`;

export default CustomLink