import React, { Component, PureComponent } from 'react';

class Item extends PureComponent{
    getValue = (value) => value !== undefined && value !== null ? value : '';

    render(){
        if (this.props.item != null){
            const { author, title } = this.props.item;
            return (
                <div className="container library-item">
                    <div className="row">
                        <div className="col-12 col-md-4 library-item-author">
                            <p>{ this.getValue(author) }</p>
                        </div>
                        <div className="col-12 col-md-8 library-item-title">
                            <p>{ this.getValue(title) }</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <p>More information will be populated here</p>
                        </div>
                    </div>
                </div>
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