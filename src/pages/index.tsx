// pages/index.js
import Head from "next/head";
import { BRAND } from "../../data/consts";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "@/components/uiComponents/navbar";
import Pricing from "@/components/pricing";
import theme from "@/styles/chakraTheme";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Head>
          <title>{BRAND.NAME}</title>
          <meta
            name="description"
            content="Generate AI-powered LinkedIn replies effortlessly."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Hero />

        <main>{/* Your main content goes here */}</main>
        <Pricing />
        <Footer />
      </div>
    </ChakraProvider>
  );
}
