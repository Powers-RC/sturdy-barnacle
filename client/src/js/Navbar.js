import React, { Component } from 'react';
import {
 Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem} from 'reactstrap';
import { NavLink as RRNavLink} from "react-router-dom";
import { About } from "./About";

 export class NavigationBar extends Component{
  constructor(props){
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed:true
    }
  }

   toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }

    render(){
      return(
        <div id="nav-bar">
            <Navbar color="faded" dark>
              <NavbarBrand href="/">dQA</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar >
                  <Nav navbar>
                    <NavItem>
                      <NavLink activeClassName="active" to="/" tag={ RRNavLink }>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink activeClassName="active" to="/about" tag={ RRNavLink }>About</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink activeClassName="active" to="/contact" tag={ RRNavLink }>Contact</NavLink>
                    </NavItem>
                  </Nav>
              </Collapse>
            </Navbar>
        </div>
      );
    }
 }

