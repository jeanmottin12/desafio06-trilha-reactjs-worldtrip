import { Box, Flex, Heading } from "@chakra-ui/react";

interface ContinentBannerProps {
  title: string;
  bg: string;
}

export function ContinentBanner({ title, bg }: ContinentBannerProps) {
  return (
    <Box
      bg={`url(${bg})`}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h={["150", "300", "500"]}
    >
      <Flex
        maxW={1240}
        mx="auto"
        px="4"
        h="100%"
        align={["center", "center", "flex-end"]}
        justify={["center", "center", "flex-start"]}
      >
        <Heading
          fontSize={["28px", "34px", "48px"]}
          color="brand_light.900"
          fontWeight="semibold"
          mb={["0", "0", "14"]}
        >
          {title}
        </Heading>
      </Flex>
    </Box>
  )
}