import { useBreakpointValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Prismic from '@prismicio/client';
import { getPrismicClient } from "../services/prismic";

import { Header } from "../components/Header";
import { HomeBanner } from "../components/Home/Banner";
import { HomeFeatures } from "../components/Home/Features";
import { HomeSlider } from "../components/Home/Slider";

interface Continent {
  uid: string;
  title: string;
  short_description: string;
  image: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <>
      <Header />
      <HomeBanner showMobile={isWideScreen} />
      <HomeFeatures showMobile={isWideScreen} />
      <HomeSlider continents={continents} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'continents')
  ]);

  const continents = response.results.map(continent => {
    return {
      uid: continent.uid,
      title: continent.data.title,
      short_description: continent.data.short_description,
      image: continent.data.home_banner.url
    }
  })

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 // 1 hora
  }
}