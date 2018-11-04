import { FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch =>{
    fetch("https://backend.store1337.com/wp-json/wp/v2/posts")
        .then(responseFromWP => responseFromWP.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        )
};
