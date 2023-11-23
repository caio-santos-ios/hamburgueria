import { css, styled } from "styled-components";

export const StyleLabel = styled.label<{styleLabel: string | null}>`
    font-size: 1.5rem;
    
    ${({styleLabel}) => {
        switch (styleLabel){
            case "login":
                return css`
                   
                `
        }
    }}
`
