import React, { Component, PureComponent } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

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
                            <Button
                                className="library-item-openlibrary"
                                color="primary"
                                onClick={ () => this.props.itemsViewInOpenLibrary(this.props.item) }>
                                Open Library
                            </Button>
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