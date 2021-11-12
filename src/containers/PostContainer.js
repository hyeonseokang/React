import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getPost} from '../moduels/posts';
import Post from '../components/Post';

const PostContainer = ({postId}) => {
    const { data, loading, error } = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPost(postId));
    }, [postId, dispatch]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;

    return <Post post={data} />;
}

export default PostContainer;