import { Box, Text, Heading } from "@chakra-ui/react";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <Box maxW="3xl" display="flex" flexDirection="column" gap={3}>
      
      {/* Eyebrow */}
      <Text
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="0.25em"
        color="blue.700"
      >
        {eyebrow}
      </Text>

      {/* Title */}
      <Heading
        fontWeight="bold"
        letterSpacing="-0.02em"
        color="gray.900"
        fontSize={{ base: "3xl", sm: "4xl" }}
      >
        {title}
      </Heading>

      {/* Description */}
      <Text
        fontSize={{ base: "md", sm: "lg" }}
        lineHeight="1.75"
        color="gray.600"
      >
        {description}
      </Text>
    </Box>
  );
}
