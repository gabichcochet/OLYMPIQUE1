import { Box, Flex, HStack, Text, Link } from "@chakra-ui/react";

const olympicPalette = [
  "blue.600",
  "yellow.400",
  "black",
  "green.500",
  "red.500",
];

export default function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="40"
      bg="whiteAlpha.800"
      backdropFilter="blur(20px)"
      borderBottom="1px solid rgba(255,255,255,0.2)"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, lg: 8 }}
        py={4}
        align="center"
        justify="space-between"
      >
        {/* Logo + titre */}
        <Link href="#home" display="flex" alignItems="center" gap={3} fontWeight="semibold">
          <HStack spacing="6px">
            {olympicPalette.map((color, i) => (
              <Box
                key={i}
                w="14px"
                h="14px"
                rounded="full"
                bg={color}
              />
            ))}
          </HStack>
          <Text>JO Paris 2024 — Webapp</Text>
        </Link>

        {/* Navigation */}
        <HStack
          spacing={6}
          display={{ base: "none", md: "flex" }}
          fontSize="sm"
          fontWeight="medium"
          color="gray.600"
        >
          <Link href="#ecosysteme" _hover={{ color: "gray.900" }}>
            Écosystème
          </Link>
          <Link href="#athlete" _hover={{ color: "gray.900" }}>
            Athlète
          </Link>
          <Link href="#heritage" _hover={{ color: "gray.900" }}>
            Héritage
          </Link>
          <Link href="#innovations" _hover={{ color: "gray.900" }}>
            Innovations
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
