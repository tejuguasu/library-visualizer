import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import LibraryDetails from './LibraryDetailsComponent';
import Library from '../library/Library';
import UserConfiguration from '../userConfiguration/UserConfiguration';
import { librariesAdd } from '../library/state/libraryReducer';
import { itemsAdd, itemsFetch } from '../item/state/itemReducer';
import { userConfigurationSet, userConfigurationInitialize } from '../userConfiguration/state/userConfigurationReducer';
import { searchLookup } from '../search/state/searchReducer';
import GoogleLogin from '../googleLogin/GoogleLogin';

const mapStateToProps = state => {
    return {
        libraries: state.libraries,
        userConfiguration: state.userConfiguration,
        items: state.items,
        search: state.search
    }
};

const mapDispatchToProps = (dispatch) => ({
    librariesAdd: () => {dispatch(librariesAdd())},
    itemsAdd: () => {dispatch(itemsAdd())},
    itemsFetch: () => {dispatch(itemsFetch())},
    userConfigurationSet: () => {dispatch(userConfigurationSet())},
    userConfigurationInitialize: () => {dispatch(userConfigurationInitialize())},
    searchLookup: (search) => {dispatch(searchLookup(search))}
});

class Main extends Component {

    componentDidMount(){
        this.props.librariesAdd();
        this.props.userConfigurationSet();
    }

    componentDidUpdate(){
        this.props.userConfigurationInitialize();
    }

    render(){

        const HomePage = () => {
            return(
                <Home userConfiguration={this.props.userConfiguration.userConfiguration} userConfigurationIsLoading={this.props.userConfiguration.isLoading} userConfigurationErrMess={this.props.userConfiguration.errMess}
                      items={this.props.items.items} itemsIsLoading={this.props.items.isLoading} itemsErrMess={this.props.items.errMess}
                      search={this.props.search} searchLookup={this.props.searchLookup}
                 />
            );
        };

        const LibraryWithId = ({match}) => {
            return (
                <LibraryDetails library={this.props.libraries.libraries.filter((library) => library.id === parseInt(match.params.libraryId, 10))[0]}
                    isLoading={this.props.libraries.isLoading}
                    errMess={this.props.libraries.errMess}
                />
            );
        };

        return (
            <div>
                <Header />
                <GoogleLogin />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/configuration" component={() => <UserConfiguration libraries={this.props.libraries} />} />
                            <Route exact path="/library" component={() => <Library libraries={this.props.libraries} />} />
                            <Route path="/library/:libraryId" component={LibraryWithId} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
