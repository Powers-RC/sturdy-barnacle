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
        <div class="navbar">
          <span>
            <a href='#visual-intro'>Home</a>
            <a href='#content-section'>Content</a>
            <a href='#about-section'>About</a>
            <a href='#contact-section'>Contact</a>
          </span>
        </div>
      );
    }
 }

