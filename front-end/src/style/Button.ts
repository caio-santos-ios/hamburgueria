import { css, styled } from "styled-components";

export const StyleButton = styled.button<{styleButton: string | null}>`
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: green;
    color: white;
    font-size: 1.2rem;

    ${({styleButton}) => {
        switch (styleButton){
            case "back":
                return css`
                    background-color: var(--bg-btn-back);
                    color: var(--primary-color);
                    font-weight: 600;
                    &:hover {
                        transition: 1s;
                        background-color: var(--bg-btn-back-hover);
                    }
                `
            case "save":
                return css`
                    width: 8rem;
                    background-color: var(--bg-btn-save);
                    &:hover {
                        transition: 1s;
                        background-color: var(--bg-btn-save-hover);
                        color: black;
                    }
                    `
            case "cancel":
                return css`
                    width: 8rem;
                    background-color: var(--bg-btn-cancel);
                    &:hover {
                        transition: 1s;
                        background-color: var(--bg-btn-cancel-hover);
                        color: black;
                    }
                    `
            case "update":
                return css`
                    width: 8rem;
                    background-color: var(--bg-btn-update);
                    &:hover {
                        transition: 1s;
                        background-color: var(--bg-btn-update-hover);
                        color: black;
                    }
                `           
            case "delete":
                return css`
                    width: 8rem;
                    background-color: var(--bg-btn-delete);
                    &:hover {
                        transition: 1s;
                        background-color: var(--bg-btn-delete-hover);
                        color: black;
                    }
                `
            case "login":
                return css`
                    color: white;
                    font-weight: 600;
                `
            case "display_finish_order":
                return css`
                    background-color: blue;
                    font-weight: 700;
                `
            case "display_modal_order":
                return css`
                    width: 4rem;
                    background-color: blue;
                    font-weight: 700;
                `
            case "display_insigths_icon":
                return css`
                    border-radius: 50%;
                    position: absolute;
                    bottom: 13rem;
                    background-color: #ffb914;
                `
            case "display_insigths_add":
                return css`
                    width: 100%;
                    max-width: 25rem;
                    height: 5rem;
                    font-size: 1.5rem;
                `
        }
    }}
`
