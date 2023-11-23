import { StyleForm } from "./style";
import React from "react";

type TProps = {
    children: any;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    typeForm: string; 
}

export const Form: React.FC<TProps> = ({children, typeForm, onSubmit}) => {
    
    return(
        <StyleForm onSubmit={onSubmit} typeForm={typeForm}>{children}</StyleForm>
    )
}