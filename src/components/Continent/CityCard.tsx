import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FiAlertCircle } from 'react-icons/fi'

interface CityCardProps {
  city_image: string;
  country_flag: string;
  country: string;
  city_name: string;
}

export function CityCard({ city_image, country_flag, country, city_name }: CityCardProps) {
  return (
    <Box
      bg="brand_light.900"
      borderRadius={4}
      borderColor="yellow.50"
      borderWidth="1px"
    >
      <Image
        objectFit="cover"
        src={city_image}
        alt={city_name}
        width="100%"
        maxH="173px"
      />
      <Flex
        px="6"
        py="4"
        justify="space-between"
        align="center"
      >
        <Box>
          <Heading
            fontSize="20px"
            fontWeight="semibold"
            color="brand_dark.500"
          >
            {city_name}
          </Heading>
          <Text
            fontSize="16px"
            mt="3"
            fontWeight="medium"
            color="brand_dark.100"
          >
            {country}
          </Text>
        </Box>
        <Image
          src={country_flag}
          alt={country}
          boxSize="30px"
        />
      </Flex>
    </Box>
  )
}