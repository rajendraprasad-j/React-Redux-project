import React from 'react';

import {Grid,Row,Col,Thumbnail,MenuItem,Button} from 'react-bootstrap'

import {Link} from 'react-router';

export default class PhotoGrid extends React.Component{
    render(){
        console.log(this.props.product)
        return (
                    <Col xs={6} md={4}>
                    <Link to={`/Products/view/${this.props.product.title}`}>
                        <Thumbnail src={this.props.product.imageUrl} alt="242x200">
                            <h3>{this.props.product.title}</h3>
                            <p>{this.props.product.price}</p>
                        </Thumbnail>
                    </Link>
                   
                    </Col>
                );
    }
}