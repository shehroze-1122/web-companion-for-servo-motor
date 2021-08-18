import React from 'react';
import {Link} from 'react-router-dom';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

const Sidebar = ()=>{
    return(
    <SideNav style={{position: 'fixed',background: '#e44745'}}>
        <Toggle />
        <Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <Link to="/">
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </Link>
                </NavIcon>
                <NavText>
                    <Link to="/">
                        Home
                    </Link>
                    
                </NavText>
            </NavItem>
            <NavItem eventKey="scan">
                <NavIcon>
                    <Link to="/">
                        <i className="fa fa-fw fa-barcode-scan" style={{ fontSize: '1.75em' }} />
                    </Link>
                </NavIcon>
                <NavText>
                    <Link to="/">
                        Scan Slide
                    </Link>  
                </NavText>
            </NavItem>

            <NavItem eventKey="focus">
                <NavIcon>
                    <Link to="/">
                        <i className="fa fa-fw fa-bullseye" style={{ fontSize: '1.75em' }} />
                    </Link>
                </NavIcon>
                <NavText>
                    <Link to="/">
                        Auto-Focus
                    </Link>
                </NavText>
            </NavItem>
        </Nav>
    </SideNav>
    );
}

export default Sidebar;