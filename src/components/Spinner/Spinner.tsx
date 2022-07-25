import './Spinner.sass'
export const Spinner: React.FC<{ propsMessage: string }> = ({ propsMessage }) => {
    console.log(`${propsMessage} Spinner`)
    return (<div className="spinner"></div>)
}