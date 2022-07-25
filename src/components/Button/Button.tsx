import { ButtonInterface } from "./ButtonInterface";

export const Button: React.FC<ButtonInterface> = ({ text, onClick, propsMessage }) => {
    console.log(`${propsMessage} Button`)
    return (<button onClick={onClick}>{text}</button>)
}