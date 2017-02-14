import React from 'react';
import {Grid,Image,Row,Col,Thumbnail,Button,Media} from 'react-bootstrap'
import {removefromCart} from '../actions/actionCreater'


export default class CartItems extends React.Component{
     constructor(props) {
        super(props)
    }
    removeItem(iterator){
        const { dispatch, selectedSubreddit } = this.props
        dispatch(removefromCart(iterator))
        console.log(iterator)
    }
    render(){
        console.log(this.props);
        return <Row>
                <Col xs={1} md={2}></Col>
                <Col xs={10} md={8}>
                    <Media>
                        <Media.Left>
                            <img width={120} height={120} src={this.props.product.imageUrl} alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>{this.props.product.title}</Media.Heading>
                            <p>{this.props.product.price}.</p>
                            <Button onClick={this.removeItem.bind(this,this.props.i)} className="pullright" bsStyle="warning">Remove</Button>
                        </Media.Body>
                    </Media>
                </Col>
                <Col xs={1} md={2}></Col>
            </Row>
    }
}