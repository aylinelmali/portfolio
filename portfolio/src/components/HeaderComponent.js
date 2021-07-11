import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutme">
                                    <span className="fa fa-home fa-lg"></span> About Me
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/mywork">
                                    <span className="fa fa-info fa-lg"></span> My Work
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/resume">
                                    <span className="fa fa-list fa-lg"></span> Resume
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactme">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Me
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;