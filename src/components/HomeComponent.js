import React from 'react';
import { Loading } from './LoadingComponent';
import { Fade, Stagger }  from 'react-animation-components';
import Item from '../item/Item';
import Search from '../search/Search';

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
            <div className="row">
                <div className="col-12">
                    <Search search={props.search} searchLookup={props.searchLookup}
                            userConfiguration={props.userConfiguration} isLoading={props.userConfigurationIsLoading} errMess={props.userConfigurationErrMess} />
                </div>
            </div>
            <div className="row">
                <RenderItems items={props.search.items} isLoading={props.itemsIsLoading} errMess={props.itemsErrMess} />
            </div>
        </div>
    );
}

export default Home;