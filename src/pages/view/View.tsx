import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './View.sass'
import { getPost } from '../../APIs/posts';
import { Post } from '../../Interfaces/Post';
import { ViewInterface } from './ViewInterface';
import { Spinner } from '../../components/Spinner/Spinner';

export const View: React.FC<ViewInterface> = ({setShowError, setSuccessMessage, propsMessage}) => {

    const { id } = useParams();
    const [postInfo, setPostInfo] = useState<Post>({} as Post)
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (id && !loaded && !loading) {
            setLoading(true);
            getPost(Number(id)).then((res: Post) => {
                if(res){
                    setPostInfo(res) 
                    setSuccessMessage()
                }else{
                    setShowError()
                }
                setLoaded(true);
                setLoading(false)
            });
        }
    }, [id, loaded, loading, postInfo, setShowError, setSuccessMessage])

    return (
        <div>
            {loaded ? 
            <div>
                {postInfo?.title}
            </div>: <Spinner propsMessage={propsMessage}/>}
        </div>
    );
}