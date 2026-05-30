import { Box, Grid, Text, Heading, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import { impactItems } from "../data/heritage";

const MotionBox = motion(Box);
const MotionText = motion(Text);

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
      {/* Mini sommaire */}
      <Flex gap={6} mb={10} wrap="wrap" fontSize="sm" color="gray.600">
        <a href="#territoire">Territoire</a>
        <a href="#temoignage">Témoignage</a>
        <a href="#avantapres">Avant / Après</a>
        <a href="#timeline">Timeline</a>
      </Flex>

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
          {impactItems.map((item, i) => (
            <MotionBox
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <StatCard item={item} />
            </MotionBox>
          ))}
        </Box>

        {/* Bloc narratif */}
        <MotionBox
          id="temoignage"
          rounded="2xl"
          p={8}
          color="white"
          bgGradient="linear(to-br, slate.800, slate.900, blue.950)"
          shadow="2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Text
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="0.25em"
            color="black"
          >
            Voix d'habitante
          </Text>

          <Heading mt={3} fontSize="3xl" fontWeight="black" color="black">
            Nadia, 38 ans, Saint-Denis
          </Heading>

          <Box
            mt={8}
            display="flex"
            flexDirection="column"
            gap={5}
            fontSize={{ base: "sm", sm: "md" }}
            lineHeight="1.75"
            color="black"
          >
            <MotionText
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              « Les JO ont apporté des investissements visibles : logements, écoles, crèches,
              gymnases, espaces verts et nouvelles connexions de mobilité. »
            </MotionText>

            <MotionText
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              « Mais je reste vigilante : qui habitera vraiment ces nouveaux logements,
              et qui profitera réellement de cet héritage ? »
            </MotionText>

            <MotionText
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              « L'olympisme social ne doit pas rester un slogan. Il faut une gouvernance
              transparente, un suivi de l'emploi local et une vraie accessibilité des équipements. »
            </MotionText>
          </Box>

          {/* Opportunités / Vigilance */}
          <Grid mt={8} gap={3} templateColumns={{ base: "1fr", sm: "1fr 1fr" }}>
            <Box
              rounded="2xl"
              p={4}
              bg="black"
              backdropFilter="blur(6px)"
            >
              <Text
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="0.2em"
                color="whiteAlpha.800"
              >
                Opportunités
              </Text>
              <Text mt={2} fontSize="sm" color="white">
                Logements, services publics, sport, mobilité, attractivité territoriale.
              </Text>
            </Box>

            <Box
              rounded="2xl"
              p={4}
              bg="black"
              backdropFilter="blur(6px)"
            >
              <Text
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="0.2em"
                color="whiteAlpha.800"
              >
                Points de vigilance
              </Text>
              <Text mt={2} fontSize="sm" color="white">
                Mixité sociale, accessibilité, gestion future, coûts, effets d'exclusion.
              </Text>
            </Box>
          </Grid>
        </MotionBox>
      </Grid>

      {/* Carte du territoire */}
      <MotionBox
        id="territoire"
        mt={20}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Heading fontSize="2xl" mb={4}>
          Le territoire transformé
        </Heading>
        <Image
          src="https://seinesaintdenis.fr/actualite/wp-content/uploads/2025/01/village-olympique-1b.jpg"
          alt="Vue aérienne de Saint-Denis et du Village Olympique"
          rounded="2xl"
          shadow="lg"
        />
      </MotionBox>

      {/* Avant / Après */}
      <MotionBox
        id="avantapres"
        mt={20}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Heading fontSize="2xl" mb={4}>
          Avant / Après les Jeux
        </Heading>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <Image
            src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80"
            alt="Quartier avant rénovation"
            rounded="2xl"
            shadow="md"
          />
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Quartier rénové après les Jeux"
            rounded="2xl"
            shadow="md"
          />
        </Grid>
      </MotionBox>

      {/* Timeline */}
      <MotionBox
        id="timeline"
        mt={20}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Heading fontSize="2xl" mb={6}>
          Timeline de l’héritage
        </Heading>

        <Grid gap={6}>
          <Box p={4} rounded="xl" bg="gray.100">
            <Heading fontSize="lg">2024 — Jeux Olympiques</Heading>
            <Text mt={2}>
              Livraison du Village, équipements sportifs, mobilités.
            </Text>
          </Box>

          <Box p={4} rounded="xl" bg="gray.100">
            <Heading fontSize="lg">2030 — Stabilisation urbaine</Heading>
            <Text mt={2}>
              Reconversion complète des logements, montée en puissance des services publics.
            </Text>
          </Box>

          <Box p={4} rounded="xl" bg="gray.100">
            <Heading fontSize="lg">2040 — Héritage durable</Heading>
            <Text mt={2}>
              Impact territorial mesuré : emploi, attractivité, qualité de vie.
            </Text>
          </Box>
        </Grid>
      </MotionBox>
    </Box>
  );
}
