import { Box, Heading, Text, List, ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const colorMap = {
  red: "red.500",
  blue: "blue.500",
  green: "green.500",
  yellow: "yellow.500",
  purple: "purple.500",
  pink: "pink.500",
  indigo: "indigo.500",
  orange: "orange.500",
};

export default function FlipCard({ title, colorClass, items }) {
  const [flipped, setFlipped] = useState(false);
  const bgColor = colorMap[colorClass] || "blue.500";

  return (
    <Box
      h={{ base: "auto", md: "260px" }} // ✅ hauteur adaptative
      w={{ base: "100%", md: "280px" }} // ✅ largeur légèrement augmentée
      cursor="pointer"
      position="relative"
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: "1200px" }}
    >
      <MotionBox
        h="100%"
        w="100%"
        position="relative"
        transition="0.7s"
        animate={{ rotateY: flipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <Box
          position="absolute"
          inset="0"
          rounded="2xl"
          bg={bgColor}
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={6} // ✅ plus d’espace intérieur
          style={{ backfaceVisibility: "hidden" }}
        >
          <Heading size="md" textAlign="center">
            {title}
          </Heading>
          <Text mt={3} fontSize="sm" opacity={0.8} textAlign="center">
            Cliquer pour afficher les informations
          </Text>
        </Box>

        {/* BACK */}
        <Box
          position="absolute"
          inset="0"
          rounded="2xl"
          bg="white"
          color="gray.900"
          p={5}
          shadow="lg"
          overflowY="auto" // ✅ scroll si trop de texte
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <Heading size="md" mb={3} textAlign="center">
            {title}
          </Heading>

          <List styleType="disc" spacing={2} fontSize="sm" pl={3}>
            {items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </Box>
      </MotionBox>
    </Box>
  );
}
