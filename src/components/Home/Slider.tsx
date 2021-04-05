import { Box, Divider, Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from 'next/link';

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

interface Continent {
  uid: string;
  name: string;
  short_description: string;
  image: string;
}

interface HomeSliderProps {
  continents: Continent[];
}

export function HomeSlider({ continents }: HomeSliderProps) {
  return (
    <Box
      maxWidth={1240}
      mx="auto"
      mb="40px"
    >
      <Divider
        bg="brand_dark.500"
        w={["60px", "90px"]}
        h={["1px", "2px"]}
        mx="auto"
        mb={["24px", "52px"]}
      />
      <Heading
        as="h2"
        fontWeight="medium"
        fontSize={["20px", "36px"]}
        textAlign="center"
        mb={["20px", "52px"]}
        lineHeight={["30px", "54px"]}
        px="4px"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.uid}>
            <Link href={`/continents/${continent.uid}`} passHref>
              <ChakraLink
                _hover={{
                  textDecoration: 'none'
                }}
              >
                <Flex
                  bg={`url(${continent.image})`}
                  bgPos="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  h={["250", "450"]}
                  align="center"
                  justify="center"
                  direction="column"
                  transition=".2s all ease"
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                >
                  <Heading
                    fontSize={["24px", "48px"]}
                    lineHeight={["36px", "52px"]}
                    color="brand_light.900"
                    fontWeight="bold"
                  >
                    {continent.name}
                  </Heading>
                  <Text
                    color="brand_light.100"
                    fontSize={["14px", "24px"]}
                    lineHeight={["21px", "36px"]}
                    fontWeight="bold"
                    mt={["12px", "16px"]}
                    maxW={600}
                    textAlign="center"
                  >
                    {continent.short_description}
                  </Text>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}