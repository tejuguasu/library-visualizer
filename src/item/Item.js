import React, { Component, PureComponent } from 'react';
import { Fade, Stagger }  from 'react-animation-components';

class Item extends PureComponent{
    getAuthor = (item) => item.author !== undefined && item.autor !== null ? item.author : '';
    getTitle = (item) => item.title !== undefined && item.title !== null ? item.title : '' ;

    render(){
        if (this.props.item != null){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <h3 className="library-item-author">{ this.getAuthor(this.props.item) }</h3>
                        </div>
                        <div className="col-12 col-md-8">
                            <h3 className="library-item-title">{ this.getTitle(this.props.item) }</h3>
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