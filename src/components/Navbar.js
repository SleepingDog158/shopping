import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useDataProducts from "../useCustomHooks/useDataProducts";
import "../App.css";
export const NavBar = () => {
  const { category } = useDataProducts();
  return (
    <Navbar bg="primary" variant="dark" style={{marginBottom:"15px"}}>
      <Navbar.Brand href="#home">Some Logo Here</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            {category &&
              category.map((d,i) => (
                <NavDropdown.Item href="" key={i}>{d.name}</NavDropdown.Item>
              ))}
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 w-100"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Nav>
          <Nav.Link href="#Cart">Cart</Nav.Link>
          <NavDropdown title="Account" id="basic-nav-dropdown" className="ml-2">
            <NavDropdown.Item href="">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
