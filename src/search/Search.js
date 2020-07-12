import React, { Component, PureComponent } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Label, Col, Button } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { FadeTransform } from 'react-animation-components';
import { Loading } from '../components/LoadingComponent';

class Search extends PureComponent{
    handleSearch(search){
        this.props.searchLookup(search);
    }

    render(){
        const { search, userConfiguration, isLoading, errMess } = this.props;

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
                                <CardText>
                                    <LocalForm onSubmit={ (values) => this.handleSearch(values)}>
                                        <Row className="form-group">
                                            <Label htmlFor="query" md={2}>Search</Label>
                                            <Col md={8}>
                                                <Control.text model=".query" id="query" name="query"
                                                        placeholder="Text to search..."
                                                        className="form-control"
                                                         />
                                            </Col>
                                            <Col md={2}>
                                                <Button type="submit" color="primary">Search</Button>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="field" md={2}>In</Label>
                                            <Col md={2}>
                                                <Label htmlFor="fieldAll">All</Label>
                                                <Control.radio model=".field" name="field" id="fieldAll" value="all" className="form-control" inline />
                                            </Col>
                                            <Col md={2}>
                                                <Label htmlFor="fieldTitle">Title</Label>
                                                <Control.radio model=".field" name="field" id="fieldTitle" value="title" className="form-control" inline />
                                            </Col>
                                            <Col md={2}>
                                                <Label htmlFor="fieldAuthor">Author</Label>
                                                <Control.radio model=".field" name="field" id="fieldAuthor"  value="author" className="form-control" inline />
                                            </Col>
                                            <Col md={2}>
                                                <Label htmlFor="fieldISBN">ISBN</Label>
                                                <Control.radio model=".field" name="field" id="fieldISBN"  value="isbn" className="form-control" inline />
                                            </Col>
                                            <Col md={2}/>
                                        </Row>
                                    </LocalForm>
                                </CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                );
            }
        }
    }
}

export default Search;