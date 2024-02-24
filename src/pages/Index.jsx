import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, Image, SimpleGrid, Badge, Link, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Header from "../components/Header";
import { FaNodeJs, FaGithub, FaLinkedin, FaSun, FaMoon, FaProjectDiagram } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("gray.800", "gray.100");

  return (
    <Box bgColor={bgColor} color={color} minH="100vh">
      <Container maxW="container.xl">
        <Header />
        <VStack spacing={8} as="section" my={14}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1699885960867-56d5f5262d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOb2RlLmpzJTIwRGV2ZWxvcGVyfGVufDB8fHx8MTcwODc4ODM3NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Node.js Developer" _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }} />
          <Heading as="h2">John Doe</Heading>
          <Text fontSize="xl" textAlign="center">
            A passionate Node.js developer with a knack for building scalable backend systems.
          </Text>
          <HStack spacing={5}>
            <Link href="https://github.com" isExternal>
              <IconButton aria-label="GitHub Profile" icon={<FaGithub />} size="lg" variant="ghost" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton aria-label="LinkedIn Profile" icon={<FaLinkedin />} size="lg" variant="ghost" />
            </Link>
          </HStack>
        </VStack>

        <Heading as="h3" size="lg" mb={5}>
          Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projects.map((project, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} _hover={{ boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.05)", transform: "translateY(-5px)", transition: "box-shadow 0.2s, transform 0.2s" }}>
              <Heading as="h4" size="md" mb={2}>
                {project.title}
              </Heading>
              <Text mb={3}>{project.description}</Text>
              <HStack>
                <Badge colorScheme="green" _hover={{ transform: "rotate(-3deg)", transition: "transform 0.1s" }}>
                  Node.js
                </Badge>
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} _hover={{ transform: "rotate(3deg)", transition: "transform 0.1s" }}>
                    {tech}
                  </Badge>
                ))}
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
        <ResumeDownloadSection />
      </Container>
    </Box>
  );
};

import ResumeDownloadSection from "../components/ResumeDownloadSection";

// Sample projects data
const projects = [
  {
    title: "Real-time Chat Application",
    description: "A Node.js WebSocket-based chat application with a modern UI.",
    technologies: ["Socket.io", "React", "MongoDB"],
  },
  {
    title: "E-commerce API",
    description: "RESTful API for e-commerce platforms with JWT authentication and Stripe integration.",
    technologies: ["Express", "MongoDB", "Stripe"],
  },
  {
    title: "IoT Dashboard",
    description: "A dashboard for IoT device management and data visualization using MQTT protocol.",
    technologies: ["Mosca", "React", "InfluxDB"],
  },
  {
    title: "Task Management System",
    description: "A Kanban-style task management system with real-time collaboration features.",
    technologies: ["GraphQL", "Apollo", "PostgreSQL"],
  },
];

export default Index;
