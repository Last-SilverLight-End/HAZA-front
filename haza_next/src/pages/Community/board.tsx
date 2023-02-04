import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { TokenProp } from "@/libs/oAuth";

import { Box, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Center } from "@chakra-ui/react"

export default function Board(props: TokenProp) {
  return (
    <>
      <Header />
      <Center width="100%">
        <Box maxW="lg" p={4} borderWidth="2px">
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" />
            <FormHelperText>We will never share your email.</FormHelperText>
          </FormControl>
      </Box>
      </Center>
      <Footer />
    </>
  )
}