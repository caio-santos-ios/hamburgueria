import { styled } from "styled-components";

export const ContainerHeaderInsights = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;
    width: 100%;
    height: 20rem;

    @media (min-width: 650px) {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }

    @media (min-width: 850px) {
        height: 20rem;
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #288d85;
        border-radius: 1rem;
        margin: 1rem;
    }
`
export const ContainerInsights = styled.div`
    background-color: #288d85;
    padding: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: wrap;
    border-radius: 1rem;
    gap: 1rem;

    @media (min-width: 500px) {
        width: 70%;
    }
`
export const CardInsights = styled.li`
    width: 15rem;
    height: 15rem;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--primary-color);

    &:hover {
        background-color: var(--secundary-color);
        transition: 1s;
    }
`
export const CountInsigths = styled.h1`
    color: #288d85;
    font-size: 3rem;
    font-weight: 500;
`