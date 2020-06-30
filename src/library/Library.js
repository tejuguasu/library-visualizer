import React, { Component, PureComponent } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Row, Label, Col,
    Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from '../components/LoadingComponent';
import { FadeTransform, Fade, Stagger }  from 'react-animation-components';

function RenderLibrary({library}){
    return (
        <div className="col-12 col-md-5 m-1">
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardBody>
                        <CardTitle>{library.name}</CardTitle>
                        <CardText>Some content will be here.</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}

class Library extends PureComponent{
    render(props){
        if (props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.library != null){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>{props.library.name}</h3>
                            <hr />
                        </div>
                        <renderLibrary library={props.library} />
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

export default Library;