import React from 'react';

import PhotoGrid from './photoGrid'
import {Grid,Row,Col,Thumbnail,MenuItem,Button} from 'react-bootstrap'


export default class ProductDisplay extends React.Component{
    render(){
        return (<Grid>
                    <Row>
                        {this.props.myproducts.products.map(function(product,i){
                            return <PhotoGrid product={product} key={i}/>
                        })}
                        
                    </Row>
                </Grid>)
    }
}