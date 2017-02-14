import React from 'react';
import {Grid,Image,Row,Col,Thumbnail,Button} from 'react-bootstrap'
import {addToCart} from '../actions/actionCreater'


export default class PhotoGrid extends React.Component{
     constructor(props) {
        super(props)
    }
    addtoCart(iterator){
        const { dispatch, selectedSubreddit } = this.props
        dispatch(addToCart(iterator))
        console.log(iterator)
    }
    render(){
        console.log(this.props);
        const {productId}= this.props.params;
        console.log(productId);
        const i=this.props.posts.findIndex((product)=>product.title==productId);
        const currentProduct=this.props.posts[i];
        return <Row className="show-grid">
                    <Col xs={2} md={2}></Col>
                    <Col xs={8} md={8}>
                        <Row>
                            <Col xs={6} md={6}>
                                <Image src={currentProduct.imageUrl} responsive />
                             </Col>
                            <Col xs={6} md={6}> 
                                <h3>{currentProduct.title}</h3>
                                <p>{currentProduct.price}</p>
                                <p>only {currentProduct.quantity} is left </p>
                                <Button onClick={this.addtoCart.bind(this,i)} bsStyle="primary">ADD TO CART</Button>&nbsp;
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} md={2}></Col>
                </Row>
    }
}