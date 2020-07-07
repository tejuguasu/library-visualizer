import React, { Component, PureComponent } from 'react';

class Item extends PureComponent{
    getValue = (value) => value !== undefined && value !== null ? value : '';

    render(){
        if (this.props.item != null){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <h3 className="library-item-author">{ this.getValue(this.props.author) }</h3>
                        </div>
                        <div className="col-12 col-md-8">
                            <h3 className="library-item-title">{ this.getTitle(this.props.title) }</h3>
                        </div>
                        <div className="col-12">
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