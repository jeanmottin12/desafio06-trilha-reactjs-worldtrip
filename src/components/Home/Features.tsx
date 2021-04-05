import { Box, Flex, Image, Text} from "@chakra-ui/react";
import { HomeFeatureItem } from "./FeatureItem";

interface HomeBannerProps {
  showMobile: boolean;
}

export function HomeFeatures({ showMobile }: HomeBannerProps) {
  return (
    <Flex
      justify="space-between"
      maxW={[330, 400, 1240]}
      mx="auto"
      mt={[6, 10, 24]}
      mb={[6, 10, 20]}
      px="4"
      wrap="wrap"
    >
      <HomeFeatureItem title="vida noturna">
        {showMobile && <Image src="/icon-cocktail.svg" alt="Vida noturna" mx="auto" /> }
        {!showMobile && <Box as="span" w="8px" h="8px" mr="8px" bg="yellow.900" borderRadius="50" display="inline-block"/> }
      </HomeFeatureItem>
      <HomeFeatureItem title="praia">
        {showMobile && <Image src="/icon-surf.svg" alt="praia" mx="auto" /> }
        {!showMobile && <Box as="span" w="8px" h="8px" mr="8px" bg="yellow.900" borderRadius="50" display="inline-block"/> }
      </HomeFeatureItem>
      <HomeFeatureItem title="moderno">
        {showMobile && <Image src="/icon-building.svg" alt="moderno" mx="auto" /> }
        {!showMobile && <Box as="span" w="8px" h="8px" mr="8px" bg="yellow.900" borderRadius="50" display="inline-block"/> }
      </HomeFeatureItem>
      <HomeFeatureItem title="clássico">
        {showMobile && <Image src="/icon-museum.svg" alt="clássico" mx="auto" /> }
        {!showMobile && <Box as="span" w="8px" h="8px" mr="8px" bg="yellow.900" borderRadius="50" display="inline-block"/> }
      </HomeFeatureItem>
      <HomeFeatureItem title="e mais..">
        {showMobile && <Image src="/icon-earth.svg" alt="e mais..." mx="auto" /> }
        {!showMobile && <Box as="span" w="8px" h="8px" mr="8px" bg="yellow.900" borderRadius="50" display="inline-block"/> }
      </HomeFeatureItem>
    </Flex>
  )
}