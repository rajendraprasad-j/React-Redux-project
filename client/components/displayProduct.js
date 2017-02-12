import React from 'react';
import {Grid,Image,Row,Col,Thumbnail,Button} from 'react-bootstrap'


export default class PhotoGrid extends React.Component{

    render(){
        const {productId}= this.props.params;
        console.log(productId);
        const i=this.props.myproducts.products.findIndex((product)=>product.title==productId);
        const currentProduct=this.props.myproducts.products[i];
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
                                <p>only {currentProduct.price} is left </p>
                                <Button bsStyle="primary">ADD TO CART</Button>&nbsp;
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} md={2}></Col>
                </Row>
    }
}