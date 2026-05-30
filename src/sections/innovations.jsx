import { useMemo, useState } from "react";
import {
  Box,
  Grid,
  Text,
  Heading,
  Button,
  Flex,
  HStack,
  Circle,
} from "@chakra-ui/react";
import SectionTitle from "../components/SectionTitle";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

import { innovationData } from "../data/innovations";

export default function Innovations() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const categories = ["Toutes", ...new Set(innovationData.map((i) => i.category))];

  const filteredInnovations = useMemo(() => {
    if (selectedCategory === "Toutes") return innovationData;
    return innovationData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // -----------------------------
  // 🔥 RADAR UNIFORME + COURBE ISOLÉE
  // -----------------------------

  const allInnovations = ["Vidéosurveillance", "3D", "Traduction", "Monitoring"];

  const radarData = allInnovations.map((name) => {
    const found = filteredInnovations.find((item) =>
      item.name.startsWith(name)
    );

    return {
      innovation: name,
      Score: found ? found.effectiveness : 0, // tu peux changer pour un score composite
    };
  });

  return (
    <Box
      as="section"
      id="innovations"
      borderTop="1px solid"
      borderColor="gray.200"
      bg="white"
    >
      <Box maxW="7xl" mx="auto" px={{ base: 6, lg: 8 }} py={20}>
        
        <SectionTitle
          eyebrow="Section 4"
          title="Rapport interactif sur les innovations technologiques"
          description="Analyse filtrable des innovations selon l'efficacité, l'acceptabilité et la pérennité, accompagnée d'une visualisation radar."
        />

        {/* Filtres */}
        <Flex mt={8} wrap="wrap" gap={3}>
          {categories.map((category) => (
<Button
  key={category}
  onClick={() => setSelectedCategory(category)}
  rounded="full"
  px={4}
  py={2}
  fontSize="sm"
  fontWeight="semibold"
  transition="background 0.2s ease, transform 0.2s ease"
  bg={selectedCategory === category ? "black" : ""}
  color={selectedCategory === category ? "white" : "black"}
  border="1px solid"
  borderColor={selectedCategory === category ? "gray.950" : "gray.300"}
  _hover={{
    bg: selectedCategory === category ? "gray.800" : "gray.50",
    transform: "translateY(-1px)",
  }}
>
  {category}
</Button>

          ))}
        </Flex>

        <Grid mt={10} gap={6} templateColumns={{ base: "1fr", xl: "1fr 1fr" }}>
          
          {/* Liste des innovations */}
          <Grid gap={4}>
            {filteredInnovations.map((item) => {
              const Icon = item.icon;
              return (
                <Box
                  key={item.name}
                  rounded="2xl"
                  border="1px solid"
                  borderColor="gray.200"
                  bg="gray.50"
                  p={6}
                >
                  <Flex align="start" gap={4}>
                    <Box rounded="2xl" bg="white" p={3} shadow="sm">
                      <Icon size={24} color="#334155" />
                    </Box>

                    <Box>
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        textTransform="uppercase"
                        letterSpacing="0.2em"
                        color="gray.400"
                      >
                        {item.category}
                      </Text>

                      <Heading
                        mt={1}
                        fontSize="xl"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {item.name}
                      </Heading>

                      <Text
                        mt={3}
                        fontSize="sm"
                        lineHeight="1.6"
                        color="gray.600"
                      >
                        {item.summary}
                      </Text>
                    </Box>
                  </Flex>

                  {/* Scores */}
                  <Grid mt={5} templateColumns="repeat(3, 1fr)" gap={3}>
                    <Box rounded="2xl" bg="white" p={4} textAlign="center" shadow="sm">
                      <Text fontSize="xs" color="gray.500">Efficacité</Text>
                      <Text mt={2} fontSize="2xl" fontWeight="black">{item.effectiveness}</Text>
                    </Box>

                    <Box rounded="2xl" bg="white" p={4} textAlign="center" shadow="sm">
                      <Text fontSize="xs" color="gray.500">Acceptabilité</Text>
                      <Text mt={2} fontSize="2xl" fontWeight="black">{item.acceptability}</Text>
                    </Box>

                    <Box rounded="2xl" bg="white" p={4} textAlign="center" shadow="sm">
                      <Text fontSize="xs" color="gray.500">Pérennité</Text>
                      <Text mt={2} fontSize="2xl" fontWeight="black">{item.durability}</Text>
                    </Box>
                  </Grid>
                </Box>
              );
            })}
          </Grid>

          {/* Radar isolé mais uniforme */}
          <Box
            rounded="2xl"
            border="1px solid"
            borderColor="gray.200"
            bg="gray.50"
            p={6}
          >
            <Text mb={2} fontSize="lg" fontWeight="bold">
              Visualisation d'impact
            </Text>

            <Text mb={4} fontSize="sm" color="gray.500">
              {selectedCategory === "Toutes"
                ? "Toutes les innovations"
                : `Catégorie sélectionnée : ${selectedCategory}`}
            </Text>

            <Box h="28rem">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="70%"
                  data={radarData}
                  style={{
                    transition: "all 0.6s ease-in-out",
                    transform: "rotate(0deg)", // jamais penchée
                  }}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="innovation" />
                  <PolarRadiusAxis domain={[0, 100]} />

                  {/* Courbe isolée */}
                  <Radar
                    name="Score"
                    dataKey="Score"
                    stroke="#1e3a8a"
                    fill="#1e3a8a"
                    fillOpacity={0.35}
                  />

                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </Box>

            {/* Légende */}
            <HStack mt={4} spacing={6} justify="center">
              <Flex align="center" gap={2}>
                <Circle size="10px" bg="#1e3a8a" />
                <Text fontSize="sm" color="gray.600">Score global</Text>
              </Flex>
            </HStack>

          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
