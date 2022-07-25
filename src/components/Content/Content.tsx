import { ContentInterface } from "./ContentInterface"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './Content.sass'
import DisplayPost from "../DisplayPost/DisplayPost";
import { Comment } from "../../Interfaces/Comment";
import { getComments } from "../../APIs/comments";
import { HandleDisplay } from "../handleDisplay/HandleDisplay";
import { Spinner } from "../Spinner/Spinner";
import { DisplayComment } from "../DisplayComment/DisplayComment";

export const Content: React.FC<ContentInterface> = ({ post, setShowError, propsMessage }) => {

    const [toggleComments, setToggleComments] = useState(false)
    const [comments, setComments] = useState<Comment[]>([])
    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate();
    const commentsDisplay = comments.map(comment => <DisplayComment propsMessage={propsMessage} key={comment.id} comment={comment}/>)

    console.log(`${propsMessage} Content`)

    const handleRedirect = () => {
        navigate('/post/' + post.id)
    }

    useEffect(() => {
        if (!loading && !loaded && toggleComments) {
            setLoading(true);
            getComments(post.id).then((res) => {
                if (res) {
                    setComments(res as Comment[])
                } else {
                    setShowError()
                }
                setLoaded(true)
                setLoading(false)
            });
        }
    }, [loaded, loading, post.id, setShowError, toggleComments])

    return (
        <div className='content-container'>
            <DisplayPost propsMessage={propsMessage} handleRedirect={handleRedirect} post={post} toggleComments={() => setToggleComments(!toggleComments)}>
                <HandleDisplay propsMessage={propsMessage} shouldDisplay={toggleComments}>
                    <div className={`${!loaded && 'loading'} comments-container`}>
                    {toggleComments && loaded ? commentsDisplay : <Spinner propsMessage={propsMessage}/>}
                    </div>
                </HandleDisplay>
            </DisplayPost>
        </div>
    )
}