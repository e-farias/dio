import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display:flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    flex:1;
    border: 0;
    height: 30px;
    
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin-top: -18px;
    margin-bottom: 20px;
    font-family: 'Open Sans';
    padding: 0.5rem 0;
`