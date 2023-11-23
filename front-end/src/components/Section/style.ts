import { css, styled } from "styled-components";

export const StyleSection = styled.section<{ typeSection: string | null }>`
    height: 80vh;
    display: flex;

    ${({ typeSection }) => {
        switch (typeSection){
            case "display_login":
                return css`
                    justify-content: center;
                    align-items: center;
                `

            case "display_waiter_menu":
                return css`
                    margin: 1rem 0;
                    justify-content: space-around;
                    flex-flow: wrap;
                    gap: 1rem;
                `
            case "display_admin":
                return css`
                    justify-content: center;
                    flex-flow: wrap;
                `
            case "display_admin_add":
                return css`
                    margin: 2rem 0;
                    align-items: center;
                    flex-flow: column;
                    gap: 2rem;
                `
        }
    }}
`