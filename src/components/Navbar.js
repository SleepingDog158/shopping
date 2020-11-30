import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import useDataProduct from "../useCustomHooks/useDataProducts"
import "../App.css";
import { Category } from "../Pages/Category";
import { Home } from "../Pages/Home";
import {Cart} from "../Pages/Cart";

export const NavBar = () => {
  const {category}=useDataProduct()
  return (
    <div>
      <Navbar bg="primary" variant="dark" style={{ marginBottom: "10px" }}>
        <Navbar.Brand href="/">Some Logo Here</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginLeft:"20px"}}>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {category?.map((c, i) => (
              <NavDropdown.Item as={Link}  to={`/${c.id}`} key={i}>
                {c.name}
              </NavDropdown.Item>))}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 w-100"
            />
            
          </Form>
          <Nav>
            <Nav.Link href="/cart" style={{color:"white"}}>Cart()</Nav.Link>
            <NavDropdown
              title="Account"
              id="basic-nav-dropdown"
              className="ml-2"
            >
              <NavDropdown.Item href="">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
      
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart}/>
        <Route path="/:id" children={<Category />} />
        
      </Switch>
    </div>
  );
};


