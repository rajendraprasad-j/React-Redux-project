import React from 'react';

import PhotoGrid from './photoGrid'
import {Grid,Row,Col,Thumbnail,MenuItem,Button} from 'react-bootstrap'


export default class ProductDisplay extends React.Component{
    render(){
        console.log(this.props)
        return (<Grid>
                    <Row>
                       {this.props.posts.map(function(product,i){
                            return <PhotoGrid product={product} key={i}/>
                        })}
                        
                    </Row>
                </Grid>)
    }
}
