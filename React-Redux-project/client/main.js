
import React , { Component, PropTypes } from 'react'
import {Navbar,NavItem,Nav,NavDropdown,MenuItem,Button} from 'react-bootstrap';
import {fetchPostsIfNeeded} from './actions/actionCreater'
import {Link} from 'react-router';
export default class Main extends React.Component{
     constructor(props) {
            super(props)
            this.handleChange = this.handleChange.bind(this)
            this.handleRefreshClick = this.handleRefreshClick.bind(this)
        }

        componentDidMount() {
            const { dispatch, selectedSubreddit } = this.props
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = nextProps
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
            }
        }
         handleChange(nextSubreddit) {
            this.props.dispatch(selectSubreddit(nextSubreddit))
            this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
        }

        handleRefreshClick(e) {
            e.preventDefault()

            const { dispatch, selectedSubreddit } = this.props
            dispatch(invalidateSubreddit(selectedSubreddit))
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }


    render(){
        var cartquantity=null;
        console.log(this.props)
        if(this.props.AddedtoCart!=undefined){
            if(this.props.AddedtoCart.length !=0){
                cartquantity=this.props.AddedtoCart.length;
            }
        }
        return    (
            <div>
                <Navbar inverse fluid={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                             Online Shoping
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>

                                <Link className='pull-right' to='/cart'>
                                    <span className="glyphicon glyphicon-shopping-cart"></span> Cart
                                    <span className="button__badge">{cartquantity}</span>
                                </Link>
                    </Navbar.Collapse>
                </Navbar>
                {React.cloneElement(this.props.children,this.props)}
            </div>
                )
    }
}

Main.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}