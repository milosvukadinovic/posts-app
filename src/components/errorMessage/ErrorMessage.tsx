import { ErrorMessageInterface } from "./ErrorMessageInterface";
import './ErrorMessageInterface'

export const ErrorMessage: React.FC<ErrorMessageInterface> = ({ title, body, onClose, propsMessage }) => {
    console.log(`${propsMessage} ErrorMessage`)
    return (
        <div className={'overlay'}>
            <div className={'popup'}>
                <h2>{title}</h2>
                <span className={'close'} onClick={onClose}>
                    &times;
                </span>
                <div className={'content'}>
                    <h2>{body}</h2>
                </div>
            </div>
        </div>
    )
}