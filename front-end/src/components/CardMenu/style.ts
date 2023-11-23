import { styled } from "styled-components";

export const StyleCardMenu = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: wrap;
    gap: 1rem;
    background-color: var(--primary-color);
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
`

export const NameFood = styled.p`
    max-width: 8rem;
    width: 40%;
`
export const PriceFood = styled.span`
    max-width: 8rem;
    width: 40%;
    font-weight: 700;
`