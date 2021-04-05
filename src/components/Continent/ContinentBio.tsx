import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import { RichText } from "prismic-dom";

interface ContinentData {
  data_number: string;
  data_text: string;
  tooltip_text?: string;
}

interface ContinentBioProps {
  description: string;
  datas: ContinentData[];
}

export function ContinentBio({ description, datas }: ContinentBioProps) {
  return (
    <Flex
      maxW={1240}
      mx="auto"
      my={["6", "12", "20"]}
      px="4"
      align={["flex-start", "flex-start", "center"]}
      justify="space-between"
      direction={["column", "column", "row"]}
    >
      <Box maxW={["100%", "100%", "600px"]}>
        <Text
          fontSize={["14px", "16px", "24px"]}
          lineHeight={["21px", "24px", "36px"]}
          color="brand_dark.500"
          textAlign="justify"
          // dangerouslySetInnerHTML={{ __html: RichText.asHtml(description) }}
        >
          {RichText.asText(description)}
        </Text>
      </Box>

      <Box mt={["4", "6", "0"]} ml={["0", "0", "6"]}>
        <HStack spacing={["6", "8", "12", "16"]}>
          {datas.map((data, index) => (
            <Box
              key={index}
              textAlign={["left", "left", "center"]}
            >
              <Heading
                fontSize={["24px", "28px", "48px"]}
                color="yellow.900"
                fontWeight="semibold"
              >
                {data.data_number}
              </Heading>
              <Text
                fontSize={["18px", "20px", "24px"]}
                color="brand_dark.500"
                fontWeight={["regular", "semibold"]}
                display="flex"
                alignItems="center"
              >
                {data.data_text}
                {data.tooltip_text && (
                  <Tooltip
                    hasArrow
                    label={data.tooltip_text}
                    placement="auto"
                    aria-label="tooltip"
                    p="4"
                  >
                    <Image src="/icon-info.svg" alt="Information icon" ml="2"/>
                  </Tooltip>
                )}
              </Text>
            </Box>
          ))}
        </HStack>
      </Box>
    </Flex>
  )
}