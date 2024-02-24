import React from "react";
import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";

const ContactSection = () => {
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box bg={bgColor} color={textColor} p={10} textAlign="center" borderRadius="lg" m={5}>
      <Heading as="h3" size="lg" mb={5}>
        Contact Me
      </Heading>
      <VStack spacing={5}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="teal" size="lg">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactSection;
