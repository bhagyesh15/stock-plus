import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar, Form, FormControl,Button} from 'react-bootstrap'; 
import SP from './StockPlus';


function Navigationbar(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className="container">

                    <Navbar.Brand href="/" className="h1 mb-0"><SP size="h4"/></Navbar.Brand>
                    <Navbar.Brand href="/" className="h1 mb-0">Stock<span className=" ml-1 p-1" style={{
                        backgroundColor: `#28a745`,
                        borderRadius: `0.5rem`
                    }}>Plus</span></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto text-left">
                            <Nav><Link to="/stocks" className="nav-link" style={{textDecoration: `none`}}>Stocks</Link></Nav>
                            <Nav><Link to="/indexes" className="nav-link" style={{textDecoration: `none`}}>Indexes</Link></Nav>
                            <Nav><Link to="/about" className="nav-link" style={{textDecoration: `none`}}>About</Link></Nav>
                        </Nav>
                    </Navbar.Collapse>
                        <Form inline>
                            <FormControl type="text" placeholder="Search for stocks and indexes" className="mr-sm-2" style={{width:`250px`}}/>
                            <Button variant="outline-success">Search</Button>
                        </Form>
                </div>
            </Navbar>  
        </div>
    );
}

export default Navigationbar;