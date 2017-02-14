import {connect} from 'react-redux';

import {bindActionCreators} from 'redux'

import * as actionCreator from './actions/actionCreater'
import Main from './main';

function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    AddedtoCart,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    AddedtoCart,
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}
const App=connect(mapStateToProps)(Main);

export default App;