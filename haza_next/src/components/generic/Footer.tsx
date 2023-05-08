import Image from 'next/image';
import { Box, Container, Link, SimpleGrid, Stack, Text, Flex, useColorModeValue } from '@chakra-ui/react';

const Logo = () =>
  <Image
    src="/images/footerlogo.png"
    alt="sample haza logo image need to fix"
    width={100}
    height={50}
  />;

const ListHeader = ({ children }: React.PropsWithChildren) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb="2" as="abbr">
      {children}
    </Text>
  );
};

function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW="6xl" py="10">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing="8">
          <Stack align="flex-start">
            <ListHeader>Series</ListHeader>
            <Link href="#">Main</Link>
            <Link href="#">CommunityHAZA</Link>
            <Link href="#">SurveyHAZA</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>HAZA</ListHeader>
            <Link href="#">About Us</Link>
            <Link href="#">Press</Link>
            <Link href="#">Teams</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>도움말</ListHeader>
            <Link href="#">Cookies Policy</Link>
            <Link href="#">Login Policy</Link>
            <Link href="#">Status</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Follow Us</ListHeader>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Github</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align="center"
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize="sm" textAlign="center">
          © 2022 HAZA. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;





const temp: React.FC = () => {

  return (
    <footer className="bg-zinc-300/75 pt-3 pb-3 text-align">
      <div className=" text-center " >
        <ul className=" inline-flex uppercase space-x-4
                    font-roboto font-semibold text-black cursor-pointer divide-x-2 divide-gray-700">
          <li><a className=" px-2" href="#" /> 사이트 도움말</li>
          <li><a className=" px-2" href="#" /> 약관</li>
          <li><a className=" px-2" href="#" /> 개인정보 취급 방침</li>
          <li><a className=" px-2" href="#" /> Q&A </li>
          <li><a className=" px-2"href="#" /> 고객 센터</li>
        </ul>
        <address className="decoration-lime-600 not-italic pt-2">
          cg456456@naver.com
        </address>
        <div className="pt-2">
          copyright  {'\u00A9'} HAZA ALL RIGHTS RESERVED
        </div>

      </div>
    </footer>
  )
}

