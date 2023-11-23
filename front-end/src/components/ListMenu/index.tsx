import { StyleListMenu } from "./style"

type TProps = {
    children: any;
}

export const Menu: React.FC<TProps> = ({children}) => {
    return(
        <StyleListMenu>{children}</StyleListMenu>
    )
}