import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    height: 5rem;
    position: relative;
`

export const Select = styled.select`
    height: 4rem;
    width: 40%;
    border-radius: 0.5rem;
    background-color: var(--primary-color);
    outline: none;
    font-weight: 900;
    padding: 1rem;
    position: absolute;
    right: 0;
`

export const Option = styled.option`
   height: 8rem;
   padding: 1rem;
   border: none;
`

export const ContainerValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 4rem;
    background-color: var(--primary-color);
    margin: 0 auto;
    padding: 1rem;
    font-weight: 900;
    position: absolute;
    left: 0;
    border-radius: 0.5rem;
`