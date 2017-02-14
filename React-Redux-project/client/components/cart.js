import React from 'react';
import {Grid,Image,Row,Col,Thumbnail,Button,Media} from 'react-bootstrap'
import {addToCart} from '../actions/actionCreater'
import CartItems from './cartItems'

export default class Cart extends React.Component{
     constructor(props) {
        super(props)
    }
    
    render(){
        var props=this.props;
        return <Grid>
                    {this.props.AddedtoCart.map(function(product,i){
                            return <CartItems product={product} {...props} i={i} key={i}/>
                    })}
                </Grid>
    }
}