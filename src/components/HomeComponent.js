import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';
import { Fade, Stagger }  from 'react-animation-components';
import Item from '../item/Item';

function RenderSearch({userConfiguration, isLoading, errMess}){
    if (isLoading){
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else {
        if (userConfiguration.library == null){
            return (
                <h4>No library selected</h4>
            )
        }
        else {
            return (
                <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        <CardBody>
                            <CardTitle>Search in {userConfiguration.library.name}</CardTitle>
                            <CardText>Some search components will be here</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            );
        }
    }
}

function RenderItems({items, isLoading, errMess}){
    if (isLoading){
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else {
        return (
            <Stagger in>
                { items.map((item) => {
                    return(
                        <Fade in>
                            <div className="col-12 col-md-4">
                                <Item item={item} />
                            </div>
                        </Fade>
                    );
                })}
            </Stagger>
        );
    }
}

function Home(props){
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12">
                    <RenderSearch userConfiguration={props.userConfiguration} isLoading={props.userConfigurationIsLoading} errMess={props.userConfigurationErrMess} />
                </div>
            </div>
            <div className="row">
                <RenderItems items={props.items} isLoading={props.itemsIsLoading} errMess={props.itemsErrMess} />
            </div>
        </div>
    );
}

export default Home;