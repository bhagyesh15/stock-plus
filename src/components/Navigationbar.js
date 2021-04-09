import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar, Form, Button} from 'react-bootstrap'; 
import SP from './StockPlus';
import Search from './Search';


function Navigationbar(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className="container">

                    <Navbar.Brand href="/" className="h1 mb-0"><SP size="h4"/></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto text-left">
                            <Nav><Link to="/stocks" className="nav-link" style={{textDecoration: `none`}}>Stocks</Link></Nav>
                            <Nav><Link to="/indexes" className="nav-link" style={{textDecoration: `none`}}>Indexes</Link></Nav>
                            <Nav><Link to="/crypto" className="nav-link" style={{textDecoration: `none`}}>Cryptocurrencies</Link></Nav>
                            <Nav><Link to="/about" className="nav-link" style={{textDecoration: `none`}}>About</Link></Nav>
                        </Nav>
                    </Navbar.Collapse>
                        <Form inline>
                            {/* <FormControl type="text" placeholder="Search for stocks and indexes" className="mr-sm-2" style={{width:`250px`}}/> */}
                            <Search/>
                            <Button variant="outline-success">Search</Button>
                        </Form>
                </div>
            </Navbar>  
        </div>
    );
}

export default Navigationbar;