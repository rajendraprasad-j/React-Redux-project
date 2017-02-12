
import React from 'react';
import {Navbar,NavItem,Nav,NavDropdown,MenuItem,Button} from 'react-bootstrap';
import {fetchPostsIfNeeded} from './actions/actionCreater'

export default class Main extends React.Component{
     componentDidMount() {
         console.log("dsdss")
    const {products} = this.props
        fetchPostsIfNeeded(products)
    }
    render(){
        return    (
                    <div>
                        <Navbar inverse fluid={true}>
                            <Navbar.Header>
                            <Navbar.Brand>
                                Online Shoping
                            </Navbar.Brand>
                            </Navbar.Header>
                            <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</NavItem>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        {React.cloneElement(this.props.children,this.props)}
                    </div>
                )
    }
}