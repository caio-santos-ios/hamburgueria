import { styled } from "styled-components";

export const StyleModalOrders = styled.div`
    background-color: var(--secundary-color);
    padding: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    width: 90vw;
    max-width: 25rem;
`

export const HeaderOrderModal = styled.header`
    background-color: var(--primary-color);
    height: 3rem;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.5rem;
    font-weight: 800;
`

export const OrderModal = styled.li`
    background-color: var(--primary-color);
    width: 100%;
    height: 3rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 3rem 1rem;
    border-radius: 0.5rem;

    > span {
        width: 33%;
        text-align: center;
    }
`