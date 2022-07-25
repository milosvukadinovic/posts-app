import * as React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Post } from '../../Interfaces/Post';
import { getPosts, getPostsByAuthor } from '../../APIs/posts';
import { HomeInterface } from './HomeInterface';
import { Content } from '../../components/Content/Content';
import { Spinner } from '../../components/Spinner/Spinner';
import './Home.sass';

export const Home: React.FC<HomeInterface> = ({ setShowError, propsMessage }) => {

  const { username } = useParams();
  const [postsArray, setPostsArray] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loading && !loaded) {
      setLoading(true);
      if (username) {
        getPostsByAuthor(Number(username)).then((res) => {
          if (res) {
            setPostsArray(res as Post[])
          } else {
            setShowError()
          }
        });
      } else {
        getPosts().then((res) => {
          if (res) {
            setPostsArray(res as Post[])
          } else {
            setShowError()
          }
        });
      }
      setLoaded(true)
      setLoading(false)
    }
  }, [loaded, loading, setShowError, username])

  return (
    <div className={'posts-container'}>
      {postsArray.length && loaded ? postsArray.map((post) => (
        <Content propsMessage={propsMessage} setShowError={setShowError} key={post.id} post={post} />
      )): <Spinner propsMessage={propsMessage}/>
    }
    </div>
  )
}