import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import FlipCard from "../components/FlipCard";
import SectionTitle from "../components/SectionTitle";
import { ecosystemData } from "../data/ecosystem";

export default function Ecosystem() {
  return (
    <Box as="section" id="ecosysteme" py={20} bg="white">
      <Box maxW="7xl" mx="auto" px={{ base: 6, lg: 8 }}>

        <SectionTitle
          eyebrow="Section 1"
          title="Infographie interactive de l'écosystème des JO Paris 2024"
          description="Transposition du schéma d’écosystème en cartes interactives : gouvernance, sites, budget et héritage."
        />

        {/* Grid des FlipCards */}
        <Grid
          mt={12}
          gap={8}
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          placeItems="center"
        >
          {ecosystemData.map((card) => (
            <FlipCard
              key={card.title}
              title={card.title}
              colorClass={card.color}
              items={card.items}
            />
          ))}
        </Grid>

        {/* Centre visuel */}
        <Box mt={16} textAlign="center">
          <Heading fontSize="4xl" fontWeight="black" color="gray.900">
            JO Paris 2024
          </Heading>
          <Text mt={2} color="gray.600">
            Écosystème
          </Text>
        </Box>

      </Box>
    </Box>
  );
}
