import { FETCH_POSTS } from '../actions/types';

const initialState = {
  action.type = FETCH_POSTS;
};

export default function (state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            return{
                ...state,
                items:action.payload
            };
        default: {
            return{
                ...state,
                items: action.payload
            }
        }
    }
}

