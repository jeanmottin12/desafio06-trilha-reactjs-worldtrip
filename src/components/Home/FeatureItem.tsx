import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HomeFeaturedItemProps {
  title: string;
  children: ReactNode;
}

export function HomeFeatureItem({ title, children }: HomeFeaturedItemProps) {
  return (
    <Flex
      minWidth={["50%", "158", "158"]}
      direction={["row", "row", "column"]}
      align="center"
      mb={["4", "3", "0"]}
    >
      {children}
      <Text
        fontWeight={["medium", "semibold"]}
        fontSize={["18", "24"]}
        color="brand_dark.500"
        mt={["0", "0", "6"]}
        textAlign="center"
      >
        {title}
      </Text>
    </Flex>
  )
}