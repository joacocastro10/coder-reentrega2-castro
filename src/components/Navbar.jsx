import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Flex>
        <Box p="4">
          {/* Brand */}
          <Link to={"/"}>
            <h1><img class="logo" src="../public/images/bocalogopng.png" alt="" /></h1>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton className="btnCategorias">productos</MenuButton>
            <MenuList className="dropdownCategorias">
              <Link to={`/categoria/${"shorts"}`}>
                <MenuItem>shorts</MenuItem>
              </Link>
              <Link to={`/categoria/${"camisetas"}`}>
                <MenuItem>camisetas</MenuItem>
              </Link>
              <Link to={`categoria/${"buzos"}`}>
                <MenuItem>buzos</MenuItem>
              </Link>
          
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4">
          {/*Carrito */}
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
