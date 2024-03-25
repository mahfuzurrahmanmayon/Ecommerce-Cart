import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";

import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <NavbarBrand>
          <Link to="/">Shopping Cart</Link>
        </NavbarBrand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <DropdownToggle>
              <FaCartPlus color="white" fontSize="25px" />
              <Badge>{10}</Badge>
            </DropdownToggle>

            <DropdownMenu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is empty!</span>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
