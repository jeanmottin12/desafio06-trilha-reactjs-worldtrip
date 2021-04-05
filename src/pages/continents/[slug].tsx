import { GetStaticPaths, GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client';

import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/Continent/Banner";
import { ContinentBio } from "../../components/Continent/ContinentBio";
import { CitiesPlus100 } from "../../components/Continent/CitiesPlus100";

interface ContinentData {
  data_number: string;
  data_text: string;
}

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

interface Continent {
  name: string;
  intern_banner: string;
  description: string;
  continentData: ContinentData[];
  cities_plus_100: City[];
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header />
      <ContinentBanner title={continent.name} bg={continent.intern_banner} />
      <ContinentBio description={continent.description} datas={continent.continentData} />
      {continent.cities_plus_100 && <CitiesPlus100 cities={continent.cities_plus_100} />}
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

  const continent = {
    name: response.data.name[0].text,
    intern_banner: response.data.intern_banner.url,
    description: response.data.description,
    continentData: response.data.continent_data,
    cities_plus_100: response.data.cities_plus_100
  }

  return {
    props: {
      continent
    }
  }
}