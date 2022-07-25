import { HandleDisplayInterface } from "./HandleDisplayInterface";

export const HandleDisplay: React.FC<HandleDisplayInterface> = ({children, shouldDisplay, propsMessage}) => {
        console.log(`${propsMessage} HandleDisplay`)
        return shouldDisplay ? children : null
    }