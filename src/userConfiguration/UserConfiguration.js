import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Row, Label, Col,
    Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from '../components/LoadingComponent';
import { FadeTransform, Fade, Stagger }  from 'react-animation-components';

    function RenderConfiguration({configuration}){
        return (
            <div className="col-12 col-md-5 m-1">
                <FadeTransform in 
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    <Card>
                        <CardBody>
                            <CardTitle>Configure</CardTitle>
                            <CardText>Some content will be here.</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>
        );
    }

    const UserConfiguration = (props) => {
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
        else if (props.configuration != null){
            return (
                <div className="container">
                    <div className="row">
                        <RenderConfiguration configuration={props.configuration} />
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

export default UserConfiguration;