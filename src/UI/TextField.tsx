'use client';
import styled from 'styled-components';
import { TextField as MaterialTextField } from '@mui/material'

const TextField = styled(MaterialTextField)`
  && {
    .MuiOutlinedInput-root {
      background-color: transparent;
      fieldset {
            border-color: #E5E5E5 ;
            transition: border-color 0.2s ease;

      }

      &:hover fieldset {
        border-color: #E4890A;
      }

      &.Mui-focused fieldset {
        border-color: #E4890A;
      }

      &.Mui-disabled fieldset {
        border-color: #2B2B2B};
      }
    }

    .MuiInputLabel-root {
      color: #E5E5E5;
      line-height: 1em;
      &.Mui-focused {
        color: #E4890A;
      }
    }
    .MuiInputBase-multiline{
        padding: 13px 15px;
    }
    .MuiInputBase-root {
      color: #E5E5E5;
      transition: color 0.2s ease;    
      input {
        padding: 13px 15px;
        background-color: transparent;
        color: #E5E5E5;
        font-family: inherit;
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active{
            -webkit-background-clip: text;
            -webkit-text-fill-color: #E5E5E5;
            transition: background-color 5000s ease-in-out 0s;
            box-shadow: inset 0 0 20px 20px  #1E1E1E;
        }
    }
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.5);
    }
  }
`;
export default TextField