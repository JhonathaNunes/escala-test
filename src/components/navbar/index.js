import React, {Component} from 'react'
import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    NavLink} from 'reactstrap';

    import {InternalNavbar, NavObject, Logo, Logout} from "./style.js"

    class EscalaNav extends Component{
        constructor(props) {
            super(props);
    
                this.toggle = this.toggle.bind(this);
    
                this.state = {
                    isOpen: false
                };
    
            }
    
            toggle() {
            this.setState({
                isOpen: !this.state.isOpen
            });
    
        }

        render(){
            return(
            <InternalNavbar  expand="md">
                <NavbarBrand href="/"><Logo src="/image/logo_escala.svg"/>|suporte</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <div>
                        <input className="input" type="text" placeholder="Pesquise e-mail, usuário, escala ou company"></input>
                    </div>
                    <NavObject navbar>
                    <NavItem>
                        <NavLink href="/">Jhonatha Nunes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/"><Logout src="/image/logout.svg"/></NavLink>
                    </NavItem>
                    </NavObject>
                </Collapse>
            </InternalNavbar>
            )
        }
    } 
export default EscalaNav;