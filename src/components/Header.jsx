import React from "react";
import { Box, Flex, IconButton, Spacer, Heading, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { FaHome, FaUserAlt, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("gray.800", "gray.100");

  return (
    <Flex as="header" width="full" align="center" justifyContent="space-between" wrap="wrap" padding={6} bg={bgColor} color={color} borderBottomWidth="1px" borderBottomColor={useColorModeValue("gray.200", "gray.900")}>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Node.js Developer
        </Heading>
      </Flex>

      <Spacer />

      <IconButton aria-label="Toggle color mode" icon={useColorModeValue(<FaMoon />, <FaSun />)} onClick={toggleColorMode} isRound={true} size="lg" variant="ghost" ml={{ base: "0", md: "3" }} />

      <Box display={{ sm: "block", md: "none" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Flex align="center" justify={["center", "space-between", "flex-end", "flex-end"]} direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
          <IconButton as={Link} to="/" aria-label="Home" icon={<FaHome />} />
          <IconButton as={Link} to="/about" aria-label="About" icon={<FaUserAlt />} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
