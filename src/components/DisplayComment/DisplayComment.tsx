import { DisplayCommentInterface } from "./DisplayCommentInterface"

export const DisplayComment: React.FC<DisplayCommentInterface> = ({ comment, propsMessage }) => {
    const {name, body, email} = comment
    console.log(`${propsMessage} DisplayComment`)
    return (
        <>
            <div className='content-header comments'>
                {`user ${email} commented: `}
                <span>{name}</span>
            </div>
            <div className='content-body'>
                <p>{body}</p>
            </div>
        </>
    )
}