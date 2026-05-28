import { Box, Grid, Text, Heading } from "@chakra-ui/react";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import { impactItems } from "../data/heritage";

export default function Heritage() {
  return (
    <Box
      as="section"
      id="heritage"
      maxW="7xl"
      mx="auto"
      px={{ base: 6, lg: 8 }}
      py={20}
    >
      <SectionTitle
        eyebrow="Section 3"
        title="Récit immersif sur l'héritage olympique"
        description="Témoignage d'habitante de Saint-Denis : logements reconvertis, équipements publics, mobilités, emploi et risques de gentrification."
      />

      <Grid
        mt={12}
        gap={6}
        templateColumns={{ base: "1fr", lg: "0.95fr 1.05fr" }}
      >
        {/* Cartes statistiques */}
        <Box display="flex" flexDirection="column" gap={6}>
          {impactItems.map((item) => (
            <StatCard key={item.title} item={item} />
          ))}
        </Box>

        {/* Bloc narratif */}
        <Box
          rounded="2xl"
          p={8}
          color="white"
          bgGradient="linear(to-br, slate.950, slate.900, blue.950)"
          shadow="2xl"
        >
          <Text
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="0.25em"
            color="gray.400"
          >
            Voix d'habitante
          </Text>

          <Heading mt={3} fontSize="3xl" fontWeight="black">
            Nadia, 38 ans, Saint-Denis
          </Heading>

          <Box
            mt={8}
            display="flex"
            flexDirection="column"
            gap={5}
            fontSize={{ base: "sm", sm: "md" }}
            lineHeight="1.75"
            color="gray.300"
          >
            <Text>
              « Les JO ont apporté des investissements visibles : logements, écoles, crèches,
              gymnases, espaces verts et nouvelles connexions de mobilité. »
            </Text>

            <Text>
              « Mais je reste vigilante : qui habitera vraiment ces nouveaux logements,
              et qui profitera réellement de cet héritage ? »
            </Text>

            <Text>
              « L'olympisme social ne doit pas rester un slogan. Il faut une gouvernance
              transparente, un suivi de l'emploi local et une vraie accessibilité des équipements. »
            </Text>
          </Box>

          <Grid mt={8} gap={3} templateColumns={{ base: "1fr", sm: "1fr 1fr" }}>
            <Box
              rounded="2xl"
              p={4}
              bg="whiteAlpha.200"
              backdropFilter="blur(10px)"
            >
              <Text
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="0.2em"
                color="gray.400"
              >
                Opportunités
              </Text>
              <Text mt={2} fontSize="sm" color="gray.200">
                Logements, services publics, sport, mobilité, attractivité territoriale.
              </Text>
            </Box>

            <Box
              rounded="2xl"
              p={4}
              bg="whiteAlpha.200"
              backdropFilter="blur(10px)"
            >
              <Text
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="0.2em"
                color="gray.400"
              >
                Points de vigilance
              </Text>
              <Text mt={2} fontSize="sm" color="gray.200">
                Mixité sociale, accessibilité, gestion future, coûts, effets d'exclusion.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
