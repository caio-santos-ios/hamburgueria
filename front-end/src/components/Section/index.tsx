import { StyleSection } from "./style";
import React from "react";

type TProps = {
    children: any;
    typeSection: string;
}

export const Section: React.FC<TProps> = ({children, typeSection}) => {
    return(
        <StyleSection typeSection={typeSection}>{children}</StyleSection>
    )
}