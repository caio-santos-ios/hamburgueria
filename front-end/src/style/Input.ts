import { css, styled } from "styled-components";

export const StyleInput = styled.input<{styleInput: string | null}>`
    padding: 0 1rem;
    border: none;
    outline: none;
    height: 2.5rem;
    
    ${({styleInput}) => {
        switch (styleInput){
            case "login":
                return css`
                    background-color: transparent;
                    border-bottom: 0.02rem solid;
                    color: black;
                    font-size: 1.3rem;
                    font-weight: 300;
                    border-radius: 0;
                `
            case "display_admin_add":
                return css`
                    border-radius: 0.5rem;
                    font-size: 1.3rem;
                    font-weight: 300;
                    border: 1px solid var(--secundary-color);
                `
        }
    }}
`
