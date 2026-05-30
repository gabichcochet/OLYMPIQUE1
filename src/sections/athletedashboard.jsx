import { useState, useMemo } from "react";
import { Box, Flex, Grid, Text, Heading, Select } from "@chakra-ui/react";
import SectionTitle from "../components/SectionTitle";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

import { athleteData, athleteTrend } from "../data/athlete";

export default function AthleteDashboard() {
  const [selectedEvent, setSelectedEvent] = useState("Toutes");
  const [selectedPeriod, setSelectedPeriod] = useState("Toutes");

  // Liste des épreuves
  const events = ["Toutes", ...new Set(athleteData.map((d) => d.event))];

  // Liste des périodes
  const periods = ["Toutes", ...athleteTrend.map((d) => d.period)];

  // Filtre BarChart
  const filteredBarData = useMemo(() => {
    if (selectedEvent === "Toutes") return athleteData;
    return athleteData.filter((d) => d.event === selectedEvent);
  }, [selectedEvent]);

  // Filtre LineChart
  const filteredLineData = useMemo(() => {
    if (selectedPeriod === "Toutes") return athleteTrend;
    return athleteTrend.filter((d) => d.period === selectedPeriod);
  }, [selectedPeriod]);

  return (
    <Box
      as="section"
      id="athlete"
      borderY="1px solid"
      borderColor="gray.200"
      bg="white"
    >
      <Box maxW="7xl" mx="auto" px={{ base: 6, lg: 8 }} py={20}>
        
        <SectionTitle
          eyebrow="Section 2"
          title="Dashboard de performance d'un athlète"
          description="Dashboard interactif avec filtres, graphiques dynamiques et visualisation des performances."
        />

        <Grid
          mt={12}
          gap={6}
          templateColumns={{ base: "1fr", xl: "0.85fr 1.15fr" }}
        >

          {/* Bloc bio — INTACT */}
{/* Bloc bio — AVEC PHOTO */}
{/* Bloc bio — PHOTO ENTRE TITRE ET DESCRIPTION */}
<Box
  bg="gray.900"
  color="white"
  p={8}
  rounded="2xl"
  shadow="2xl"
>
  <Text
    fontSize="sm"
    textTransform="uppercase"
    letterSpacing="0.25em"
    color="gray.400"
  >
    Profil de l'athlète
  </Text>

  <Heading mt={3} fontSize="3xl" fontWeight="black">
    Léon Marchand — JO Paris 2024
  </Heading>

  {/* PHOTO */}
  <Box
    mt={6}
    overflow="hidden"
    rounded="2xl"
    border="1px solid"
    borderColor="whiteAlpha.200"
    shadow="lg"
    maxW="sm"
  >
    <img
      src="https://imagine.bayard.io/unsafe/560x0/bayard-static/edition/intervenants/51662.jpg"
      alt="Léon Marchand"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </Box>

  {/* DESCRIPTION */}
  <Text mt={6} fontSize="sm" lineHeight="1.7" color="gray.300">
    Champion français de natation, spécialiste des épreuves de quatre nages et du papillon.
    Ce tableau présente ses performances aux Jeux Olympiques de Paris 2024 : quatre épreuves,
    deux médailles d’or et une progression constante sur la saison.
  </Text>

  {/* STATS */}
  <Grid mt={8} templateColumns="repeat(3, 1fr)" gap={3}>
    <Box bg="whiteAlpha.200" p={4} rounded="2xl">
      <Text fontSize="xs" color="gray.400">Discipline</Text>
      <Text mt={2} fontSize="lg" fontWeight="bold">Natation — 4 nages</Text>
    </Box>

    <Box bg="whiteAlpha.200" p={4} rounded="2xl">
      <Text fontSize="xs" color="gray.400">Objectif</Text>
      <Text mt={2} fontSize="lg" fontWeight="bold">Or olympique</Text>
    </Box>

    <Box bg="whiteAlpha.200" p={4} rounded="2xl">
      <Text fontSize="xs" color="gray.400">Forme</Text>
      <Text mt={2} fontSize="lg" fontWeight="bold">92%</Text>
    </Box>
  </Grid>
</Box>


          {/* Graphiques */}
          <Grid gap={6}>

            {/* Filtres */}
            <Flex gap={4}>
              <Box flex="1">
                <Text fontSize="sm" mb={1} color="gray.600">Filtrer par épreuve</Text>
                <Select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  bg="white"
                  borderColor="gray.300"
                >
                  {events.map((ev) => (
                    <option key={ev} value={ev}>{ev}</option>
                  ))}
                </Select>
              </Box>

              <Box flex="1">
                <Text fontSize="sm" mb={1} color="gray.600">Filtrer par période</Text>
                <Select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  bg="white"
                  borderColor="gray.300"
                >
                  {periods.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </Select>
              </Box>
            </Flex>

            {/* Bar chart */}
            <Box
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              p={6}
              rounded="2xl"
            >
              <Text mb={4} fontSize="lg" fontWeight="bold">
                Comparaison par épreuve
              </Text>

              <Box h="72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={filteredBarData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="event" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="consistency"
                      radius={[8, 8, 0, 0]}
                      fill="#1e293b"
                      animationDuration={600}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Box>

            {/* Line chart */}
            <Box
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              p={6}
              rounded="2xl"
            >
              <Text mb={4} fontSize="lg" fontWeight="bold">
                Progression sur 5 périodes
              </Text>

              <Box h="72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={filteredLineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="performance"
                      stroke="#1e40af"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      animationDuration={700}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Box>

          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
