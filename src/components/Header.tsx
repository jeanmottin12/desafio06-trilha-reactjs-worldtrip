import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from 'next/link';

export function Header() {
  return (
    <Flex
      align="center"
      justify="center"
      h={["50", "100"]}
    >
      <Link href="/" passHref>
        <ChakraLink as="a" h={["6", "46"]}>
          <Image
            src="/logo.svg"
            alt="World Trip Logo"
            h="100%"
          />
        </ChakraLink>
      </Link>
    </Flex>
  )
}