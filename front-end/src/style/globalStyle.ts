import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #dee7ed;
        --secundary-color: #90d4ff;

        --bg-btn-back: #1e6495;
        --bg-btn-back-hover: #5191c1;

        --bg-btn-update: #0071a4;
        --bg-btn-update-hover: #3eb8ef;

        --bg-btn-delete: #ef1126;
        --bg-btn-delete-hover: #fb7267;

        --bg-btn-cancel: #c4772e;
        --bg-btn-cancel-hover: #ffbe73;

        --bg-btn-save: #49af67;
        --bg-btn-save-hover: #83e99c;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
    }

    main {
        width: 80vw;
        margin: 0 auto;
    }

    li, a {
        text-decoration: none;
        list-style: none;
    }

    input {
        outline: none;
    } 

    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    select {
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Estilo das opções */
select option {
  background-color: #f4f4f4;
  color: #333;
  font-size: 14px;
}
`