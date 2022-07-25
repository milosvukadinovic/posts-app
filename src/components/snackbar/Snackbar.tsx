import { SnackbarInterface } from "./SnackbarInterface";
import './Snackbar.sass'

export const Snackbar: React.FC<SnackbarInterface> = ({text, propsMessage}) => {
    console.log(`${propsMessage} Snackbar`)
    return (<div id="snackbar">{text}</div>)
}