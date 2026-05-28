import { Box, Flex, Grid, Text, Heading } from "@chakra-ui/react";
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
          description="Transposition du tableau analytique en dashboard interactif avec graphiques, animation et possibilité de tri ou de filtre."
        />

        <Grid
          mt={12}
          gap={6}
          templateColumns={{ base: "1fr", xl: "0.85fr 1.15fr" }}
        >

          {/* Bloc bio */}
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
              Profil d'exemple
            </Text>

            <Heading mt={3} fontSize="3xl" fontWeight="black">
              Athlète olympique
            </Heading>

            <Text mt={4} fontSize="sm" lineHeight="1.7" color="gray.300">
              Cette section est prête pour accueillir les données réelles de votre exercice 2.
              Elle inclut un encart bio, des métriques clés et deux graphiques interactifs.
            </Text>

            <Grid mt={8} templateColumns="repeat(3, 1fr)" gap={3}>
              <Box bg="whiteAlpha.200" p={4} rounded="2xl">
                <Text fontSize="xs" color="gray.400">Discipline</Text>
                <Text mt={2} fontSize="lg" fontWeight="bold">Sprint</Text>
              </Box>

              <Box bg="whiteAlpha.200" p={4} rounded="2xl">
                <Text fontSize="xs" color="gray.400">Objectif</Text>
                <Text mt={2} fontSize="lg" fontWeight="bold">Finale</Text>
              </Box>

              <Box bg="whiteAlpha.200" p={4} rounded="2xl">
                <Text fontSize="xs" color="gray.400">Forme</Text>
                <Text mt={2} fontSize="lg" fontWeight="bold">92%</Text>
              </Box>
            </Grid>
          </Box>

          {/* Graphiques */}
          <Grid gap={6}>

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
                  <BarChart data={athleteData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="event" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="consistency"
                      radius={[8, 8, 0, 0]}
                      fill="#1e293b"
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
                  <LineChart data={athleteTrend}>
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
