import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

interface City {
  city_image: {
    alt?: string;
    url: string;
  };
  country_flag: {
    alt?: string;
    url: string;
  };
  country: string;
  city_name: string;
}

interface CitiesPlus100Props {
  cities: City[];
}

export function CitiesPlus100({ cities }: CitiesPlus100Props) {
  return (
    <Box
      maxW={1240}
      mx="auto"
      mb="12"
      px="4"
    >
      <Heading
        fontSize={["24px", "28px", "36px"]}
        lineHeight={["36px", "40px", "54px"]}
        color="brand_dark.500"
        fontWeight="medium"
        mb={["4", "10"]}
      >
        Cidades +100
      </Heading>

      <SimpleGrid minChildWidth="256px" spacing={["10px", "20px", "40px"]} >
        {cities.length > 0 ? cities.map((city, index) => (
          <CityCard
            key={index}
            city_image={city.city_image.url}
            country_flag={city.country_flag.url}
            country={city.country}
            city_name={city.city_name}
          />
        )) : (
          <Text>Nenhuma cidade entre as cidades +100.</Text>
        )}
      </SimpleGrid>
    </Box>
  )
}