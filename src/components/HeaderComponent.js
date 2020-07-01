import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Jumbotron, NavItem, Collapse } from 'reactstrap'
import { NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler className="mr-2" onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.jpg" height="30" alt="Library Visualizer" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"> Home</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/configuration">
                                    <span className="fa fa-cog fa-lg"> Configuration</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-3">
                                <img src="assets/images/logo.jpg" width="100%" alt="Library Visualizer" />
                            </div>
                            <div className="col-12 col-sm-9">
                                <h1>Library Visualizer</h1>
                                <p>Find the resource you are looking for</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;