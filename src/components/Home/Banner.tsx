import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface HomeBannerProps {
  showMobile: boolean;
}

export function HomeBanner({ showMobile }: HomeBannerProps) {
  return (
    <Box
      bg="url(/bg-home-banner.jpg)"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h={["auto", "335"]}
      py={['7', '0']}
    >
      <Flex
        maxW={1240}
        mx="auto"
        px="4"
        h="100%"
        align="center"
        justify="space-between"
      >
        <Box maxW={{ base: '100%', md: '400px', lg: '524px' }}>
          <Heading
            as="h1"
            color="brand_light.900"
            fontWeight="medium"
            fontSize={["20", "36"]}
          >
            5 Continentes,<br />
            infinitas possibilidades
          </Heading>
          <Text
            color="brand_light.100"
            fontSize={["14", "20"]}
            mt={["2", "5"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        {showMobile && (
          <Box
            position="relative"
            mb="-33"
            alignSelf="flex-end"
          >
            <Image src="/airplane.svg" alt="Airplane" />
          </Box>
        )}
      </Flex>
    </Box>
  )
}