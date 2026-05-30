import { Box, Flex, Text } from "@chakra-ui/react";

// Composants globaux
import Header from "./components/header";

// Sections principales
import Home from "./sections/home";
import Ecosystem from "./sections/ecosystem";
import AthleteDashboard from "./sections/athletedashboard";
import Heritage from "./sections/Heritage";
import Innovations from "./sections/innovations";

export default function App() {
  return (
    <Box minH="100vh" bg="gray.50" color="gray.900">
      <Header />

      <Box as="main">
        <Home />
        <Ecosystem />
        <AthleteDashboard />
        <Heritage />
        <Innovations />
      </Box>

      <Box
        as="footer"
        borderTop="1px solid"
        borderColor="gray.200"
        bg="gray.950"
        py={10}
      >
        <Flex
          maxW="7xl"
          mx="auto"
          px={{ base: 6, lg: 8 }}
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "center" }}
          justify={{ lg: "space-between" }}
          gap={4}
          fontSize="sm"
          color="gray.400"
        >
          <Text>Projet React prêt pour déploiement.</Text>
          <Text>Dashboard athlète intégré.</Text>
        </Flex>
      </Box>
    </Box>
  );
}
