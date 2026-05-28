import { Box, Grid, Text, Heading, Link, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { ChevronRight } from "lucide-react";

const MotionBox = motion(Box);

export default function Home() {
  return (
    <Box as="section" id="home" position="relative" overflow="hidden">
      
      {/* Background gradients */}
      <Box
        position="absolute"
        inset="0"
        bg="
          radial-gradient(circle at top right, rgba(59,130,246,0.16), transparent 35%),
          radial-gradient(circle at bottom left, rgba(239,68,68,0.12), transparent 30%)
        "
      />

      <Grid
        position="relative"
        maxW="7xl"
        mx="auto"
        px={{ base: 6, lg: 8 }}
        py={{ base: 20, lg: 28 }}
        gap={10}
        templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }}
      >

        {/* LEFT SIDE — Text + CTA */}
        <Flex direction="column" gap={8}>
          
          {/* Badge animé */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            display="inline-flex"
            alignItems="center"
            gap={2}
            rounded="full"
            border="1px solid"
            borderColor="blue.200"
            bg="blue.50"
            px={4}
            py={2}
            fontSize="sm"
            fontWeight="medium"
            color="blue.800"
          >
            Projet Vibe Coding
          </MotionBox>

          {/* Titre + description */}
          <Flex direction="column" gap={5}>
            <Heading
              maxW="4xl"
              fontSize={{ base: "4xl", sm: "6xl" }}
              fontWeight="black"
              letterSpacing="-0.02em"
              color="gray.950"
            >
              Explorer l'écosystème, les performances, l'héritage et les innovations des JO Paris 2024.
            </Heading>

            <Text
              maxW="2xl"
              fontSize="lg"
              lineHeight="1.8"
              color="gray.600"
            >
              Cette webapp transpose les quatre exercices du projet en une expérience React moderne :
              navigation claire, cartes interactives, dashboard athlète, récit immersif et analyse des innovations.
            </Text>
          </Flex>

          {/* CTA */}
          <Flex wrap="wrap" gap={4}>
            <Link
              href="#ecosysteme"
              rounded="2xl"
              bg="gray.950"
              px={6}
              py={3}
              fontSize="sm"
              fontWeight="semibold"
              color="white"
              shadow="lg"
              transition="0.2s"
              _hover={{ transform: "translateY(-2px)" }}
            >
              Voir la démo
            </Link>

            <Link
              href="#innovations"
              rounded="2xl"
              border="1px solid"
              borderColor="gray.300"
              bg="white"
              px={6}
              py={3}
              fontSize="sm"
              fontWeight="semibold"
              color="gray.800"
              transition="0.2s"
              _hover={{ borderColor: "gray.400" }}
            >
              Aller aux innovations
            </Link>
          </Flex>
        </Flex>

        {/* RIGHT SIDE — Cards */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          display="grid"
          gap={4}
          rounded="2xl"
          border="1px solid"
          borderColor="gray.200"
          bg="white"
          p={5}
          shadow="2xl"
        >
          {/* Bloc structure attendue */}
          <Box
            rounded="1.5rem"
            bgGradient="linear(to-br, slate.950, blue.900, blue.600)"
            p={6}
            color="white"
          >
            <Text
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="0.25em"
              color="blue.100"
            >
              Structure attendue
            </Text>

            <Grid mt={6} gap={3}>
              {[
                "Accueil & navigation",
                "Écosystème JO interactif",
                "Dashboard athlète",
                "Récit sur l'héritage",
                "Rapport innovations",
              ].map((item) => (
                <Flex
                  key={item}
                  align="center"
                  justify="space-between"
                  rounded="2xl"
                  bg="whiteAlpha.200"
                  px={4}
                  py={3}
                  backdropFilter="blur(10px)"
                >
                  <Text fontSize="sm" fontWeight="medium">
                    {item}
                  </Text>
                  <ChevronRight size={16} />
                </Flex>
              ))}
            </Grid>
          </Box>

          {/* Deux petites cartes */}
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <Box rounded="1.5rem" bg="blue.50" p={5}>
              <Text fontSize="sm" color="gray.500">UX visée</Text>
              <Text mt={2} fontSize="2xl" fontWeight="bold">
                Simple, claire, responsive
              </Text>
            </Box>

            <Box rounded="1.5rem" bg="red.50" p={5}>
              <Text fontSize="sm" color="gray.500">Interactivité</Text>
              <Text mt={2} fontSize="2xl" fontWeight="bold">
                Filtres, hover, graphiques
              </Text>
            </Box>
          </Grid>
        </MotionBox>

      </Grid>
    </Box>
  );
}
