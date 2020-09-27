import React, { Component, PureComponent } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Label, Col, Button } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { FadeTransform } from 'react-animation-components';
import { Loading } from '../components/LoadingComponent';

class Search extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            query: props.search.query,
            field: props.search.field
        };
    }

    handleSearch(search){
        this.props.searchLookup(search);
    }

    updateSearchQuery(event){
        this.setState({query: event.target.value});
    }

    updateSearchField(event){
        this.setState({field: event.target.value});
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
                                                <Control.text
                                                    className="form-control"
                                                    model=".query"
                                                    id="query"
                                                    name="query"
                                                    placeholder="Text to search..."
                                                    value={this.state.query}
                                                    onChange={e => this.updateSearchQuery(e)} />
                                            </Col>
                                            <Col md={2}>
                                                <Button type="submit" color="primary">Search</Button>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="field" md={2}>In</Label>
                                            <Col md={2}>
                                                <Label htmlFor="fieldAll">All</Label>
                                                <Control.radio
                                                    className="form-control"
                                                    model=".field"
                                                    name="field"
                                                    id="fieldAll"
                                                    value="all"
                                                    checked={this.state.field === 'all'}
                                                    onChange={e => this.updateSearchField(e)}
                                                    inline />
                                            </Col>
                                            <Col md={2}>
                                                <Label htmlFor="fieldTitle">Title</Label>
                                                <Control.radio
                                                    className="form-control"
                                                    model=".field"
                                                    name="field"
                                                    id="fieldTitle"
                                                    value="title"
                                                    checked={this.state.field === 'title'}
                                                    onChange={e => this.updateSearchField(e)}
                                                    inline />
                                            </Col>
                                            <Col md={2}>
                                                <Label htmlFor="fieldAuthor">Author</Label>
                                                <Control.radio
                                                    className="form-control"
                                                    model=".field"
                                                    name="field"
                                                    id="fieldAuthor"
                                                    value="author"
                                                    checked={this.state.field === 'author'}
                                                    onChange={e => this.updateSearchField(e)}
                                                    inline />
                                            </Col>
                                            <Col md={2}>
                                                <Label htmlFor="fieldISBN">ISBN</Label>
                                                <Control.radio
                                                    className="form-control"
                                                    model=".field"
                                                    name="field"
                                                    id="fieldIsbn"
                                                    value="isbn"
                                                    checked={this.state.field === 'isbn'}
                                                    onChange={e => this.updateSearchField(e)}
                                                    inline />
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