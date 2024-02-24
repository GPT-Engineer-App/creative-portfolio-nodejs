import React from "react";
import { Box, Button, Heading, useColorModeValue } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const ResumeDownloadSection = () => {
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box bg={bgColor} color={textColor} p={10} textAlign="center" borderRadius="lg" m={5}>
      <Heading as="h3" size="lg" mb={5}>
        Download My Resume
      </Heading>
      <Button leftIcon={<FaDownload />} colorScheme="teal" size="lg">
        Download Resume
      </Button>
    </Box>
  );
};

export default ResumeDownloadSection;
