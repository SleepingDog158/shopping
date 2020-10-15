import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Switch, Route, Link, Router, useParams, useRouteMatch } from "react-router-dom";
import useDataProducts from "../useCustomHooks/useDataProducts";
import "../App.css";
import { Category } from "../Pages/Category";
import { Home } from "../Pages/Home";
import {Child} from "../Pages/Child"
export const NavBar = () => {
  const { category } = useDataProducts();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Navbar bg="primary" variant="dark" style={{ marginBottom: "15px" }}>
        <Navbar.Brand href="/">Some Logo Here</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/grocery">Grocery</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/cars">Cars</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/drugs">Drugs</Link>
              </NavDropdown.Item>
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
        <Route path="/:id" children={<Category />} />
      </Switch>
    </div>
  );
};


