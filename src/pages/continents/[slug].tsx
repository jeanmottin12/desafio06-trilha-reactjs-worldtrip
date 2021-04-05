import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client';

import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/Continent/Banner";
import { ContinentBio } from "../../components/Continent/ContinentBio";
import { CitiesPlus100 } from "../../components/Continent/CitiesPlus100";

interface Continent {
  data: {
    title: string;
    intern_banner: {
      url: string;
    }
    description: string;
    continent_data: {
      data_number: string;
      data_text: string;
      tooltip_text?: string;
    }[];
    cities_plus_100: {
      city_image: {
        url: string;
      };
      country_flag: {
        url: string;
      };
      city_name: string;
      country: string;
    }[];
  }
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter();
  
  if (router.isFallback) {
    return (
      <h2>Carregando...</h2>
    );
  }
  return (
    <>
      <Header />
      <ContinentBanner title={continent.data.title} bg={continent.data.intern_banner.url} />
      <ContinentBio description={continent.data.description} datas={continent.data.continent_data} />
      {continent.data.cities_plus_100 && <CitiesPlus100 cities={continent.data.cities_plus_100} />}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const continents = await prismic.query([
    Prismic.predicates.at('document.type', 'continents')
  ]);

  const continent = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid
      }
    }
  })

  return {
    paths: continent,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();
  const { slug } = params;

  const response = await prismic.getByUID('continents', String(slug), {});

  return {
    props: {
      continent: response ? response : null
    },
    revalidate: 60 * 60 // 1 hora
  }
}