import styled from "styled-components";

export const Table = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: column;
`
export const HeaderTable = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
`
export const ItenHeader = styled.li`
    width: 100%;
    background-color: var(--secundary-color);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0.5rem;
`

export const BodyTable = styled.div`
    padding: 1rem;
    display: flex;
    flex-flow: column;
    gap: 1rem;
`
export const ItenBody = styled.li`
    background-color: var(--primary-color);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0.5rem;
`

export const TitleTable = styled.h3`
   text-align: center;
   width: 10%;
`
export const CollomnTable = styled.input`
   text-align: center;
   width: 15%;
   height: 4rem;
   border-radius: 0.5rem;
   background-color: transparent;
   border: 0.1rem solid var(--secundary-color);
`

export const TitleSection = styled.h1`
    padding: 1rem 0;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
`