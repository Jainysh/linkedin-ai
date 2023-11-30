import { Box, Container, Heading, Link } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BRAND } from "../../../../data/consts";

export const NavBar = () => {
  return (
    <Container
      maxW="container.xl"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py={4}
    >
      <Heading as="h1" size="xl">
        {BRAND.NAME}
      </Heading>

      {/* Navbar */}
      <Box as="nav" display="flex" ml={3} justifyContent="space-between">
        <Box>
          <Link href="#pricing" mx={4} fontSize="lg">
            Pricing
          </Link>
          <Link href="#how-to-use" mx={4} fontSize="lg">
            How to Use
          </Link>
        </Box>
      </Box>
      <Button colorScheme="teal" mx={4} variant="solid">
        <Link href="#login" fontSize="lg">
          Login
        </Link>
      </Button>
    </Container>
  );
};
