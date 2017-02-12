import fetch from 'isomorphic-fetch'

export function addingToCart(){
    return{
        type:'ADD_TO_CART',
        index
    }
}

function fetchPosts(products) {
  return dispatch => {
    dispatch(requestPosts(products))
    return fetch(`https://localhost:8085/data`)
      .then(response => response.json())
  }
}
export function fetchPostsIfNeeded(products) {
  return (dispatch, getState) => {
      return dispatch(fetchPosts(products));
  }
}
