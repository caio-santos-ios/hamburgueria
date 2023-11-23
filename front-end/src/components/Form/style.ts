import { css, styled } from "styled-components";

export const StyleForm = styled.form<{ typeForm: string | null }>`
    padding: 2rem;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    flex-flow: column;
    background-color: var(--primary-color);
    gap: 1rem;

    ${({ typeForm }) => {
        switch (typeForm){
            case "display_login":
                return css`
                    width: 25rem;
            `

            case "display_admin_add":
                return css`
                    width: 30rem;
                   
            `
            case "display_admin_list_food":
                return css`
                        padding: 1rem;
                        display: flex;
                        flex-flow: column;
                        gap: 1rem;
                        background-color: transparent;
                `

        }
    }}
`