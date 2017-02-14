import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
  REQUEST_POSTS, RECEIVE_POSTS,ADD_TO_CART,REMOVE_FROM_CART
} from '../actions/actionCreater'

function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
  case SELECT_SUBREDDIT:
    return action.subreddit
  default:
    return state
  }
}
function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        AddedtoCart:[]
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        AddedtoCart:[],
        lastUpdated: action.receivedAt
      })
      case ADD_TO_CART:
      console.log(state);
      console.log(action)
      return Object.assign({}, state, {
        items:[
          ...state.items.slice(0,action.index),
          {...state.items[action.index],quantity:state.items[action.index].quantity-1},
          ...state.items.slice(action.index+1)
        ],
        lastUpdated: Date.now(),
        AddedtoCart:[
          ...state.AddedtoCart,
          state.items[action.index]
        ]
        
      }); 
      break;
    case REMOVE_FROM_CART:
      return Object.assign({}, state, {
        AddedtoCart: [...state.AddedtoCart.slice(0, action.index), ...state.AddedtoCart.slice(action.index + 1)]
        
      }); 
    break;   
    default:
      return state
  }
}

function postsBySubreddit(state = { }, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    break;
    case ADD_TO_CART:
      console.log("Prasad");
      console.log(action)
      console.log(state);
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action),
      });
    break;
    case REMOVE_FROM_CART:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action),
      });
    break;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer