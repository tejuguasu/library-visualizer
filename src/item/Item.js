import React, { Component, PureComponent } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Item extends PureComponent{
    getValue = (value) => value !== undefined && value !== null ? value : '';

    render(){
        if (this.props.item != null){
            const { author, title, ISBN } = this.props.item;
            return (
                <Card className="library-item">
                    <CardBody>
                        <CardTitle className="library-item-title">
                            <p>{ this.getValue(title) }</p>
                        </CardTitle>
                        <CardSubtitle className="library-item-author">
                            <p>{ this.getValue(author) }</p>
                        </CardSubtitle>
                        <CardText>
                            <p>ISBN: { this.getValue(ISBN) }</p>
                            <p>More information will be populated here</p>
                        </CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
}

export default Item;