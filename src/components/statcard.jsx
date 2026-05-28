import { Box, Text, Heading } from "@chakra-ui/react";

export default function StatCard({ item }) {
  const Icon = item.icon;

  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      rounded="3xl"
      p={6}
      shadow="sm"
      transition="0.2s"
      _hover={{ shadow: "md" }}
    >
      {/* Icône */}
      <Box
        mb={4}
        h="48px"
        w="48px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        rounded="2xl"
        bg="gray.100"
      >
        <Icon size={24} color="#334155" />
      </Box>

      {/* Titre */}
      <Text fontSize="sm" color="gray.500">
        {item.title}
      </Text>

      {/* Valeur */}
      <Heading mt={2} fontSize="3xl" fontWeight="bold" color="gray.900">
        {item.value}
      </Heading>

      {/* Note */}
      <Text mt={3} fontSize="sm" lineHeight="1.6" color="gray.600">
        {item.note}
      </Text>
    </Box>
  );
}
