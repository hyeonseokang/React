import * as postsAPI from '../api/posts';
import { createPromiseThunk, handleAsyncAction, handleAsyncActionsById, reducerUtils } from '../lib/asyncUtils';
import {call, put, takeEvery} from 'redux-saga/effects';
import { hydrate } from 'react-dom';


const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST';


export const getPosts = () => ({type: GET_POSTS});
export const getPost = id => ({type: GET_POST, payload: id, meta: id});


function* getPostsSaga(){
    try{
        const posts = yield call(postsAPI.getPosts);
        yield put({
            type: GET_POSTS_SUCCESS,
            payload: posts
        });

    } catch (e) {
        yield put({
            type: GET_POSTS_ERROR,
            error: true,
            payload: e
        });
    }
}

function* getPostSaga(action) {
    const param = action.payload;
    const id = action.meta;
    console.log(`id는 ${id}`);

    try {
        const post = yield call(postsAPI.getPostById, param);
        yield put({
            type: GET_POST_SUCCESS,
            payload: post,
            meta: id
        });
    } catch (e) {
        yield put({
            type: GET_POST_ERROR,
            error: true,
            payload: e,
            meta: id
        });
    }
}

export function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeEvery(GET_POST, getPostSaga);
}

export const goToHome = () => (dispatch, getState, {history}) => {
    history.push('/');
};

const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncAction(GET_POSTS, 'posts', true)(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
        default:
            return state;
    }
}