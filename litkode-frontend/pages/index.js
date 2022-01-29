import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import LeftPanel from "../components/left-panel/LeftPanel";
import Title from "../components/common/Title";
import Footer from "../components/common/Footer";
import RightPanel from "../components/right-panel/RightPanel";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Litkode🔥</title>
        <meta name="description" content="A journey to 6-figure salary..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="container.lg" my="1rem" as="main">
        <Title />
        <Flex mt="2rem" gap="2rem">
          <Box flex={1}>
            <LeftPanel />
          </Box>
          <Box width="25%">
            <RightPanel />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
}
