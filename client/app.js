import {connect} from 'react-redux';

import {bindActionCreators} from 'redux'

import * as actionCreator from './actions/actionCreater'
import Main from './main';

function mapStateToProps(state){
    return{
        myproducts:state.products
    }
}

function mapDispatcherToProps(dispatch){
    return bindActionCreators(actionCreator,dispatch);
}
const App=connect(mapStateToProps,mapDispatcherToProps)(Main);

export default App;