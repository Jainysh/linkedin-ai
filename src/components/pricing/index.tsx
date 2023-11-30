import { Box, Heading, Stack, VStack, Text } from "@chakra-ui/react";
import PricingContainer from "../uiComponents/pricingContainer";

const Pricing = () => {
  return (
    <Box py={12}>
      <VStack spacing={2} padding={4} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          We are free until we figure out our pricing.
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          No Credit Card needed, Sign Up and get started!
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PricingContainer
          heading="Free Plan"
          features={[
            // "Sign Up and get started",
            "15 Tokens per month",
            "Generate posts",
            "Generate post replies",
            "Generate reply to messages",
          ]}
          pricing={{ actualPrice: "0.00", currency: "INR" }}
          button={{ text: "Sign Up" }}
        />

        {/* <PricingContainer
          heading="Standard Plan"
          colorScheme="blue"
          features={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ]}
          pricing={{ actualPrice: "49.99", frequency: "month" }}
          button={{ text: "Get Started" }}
        /> */}

        {/* <Box borderWidth="1px" borderRadius="lg" p={8} mb={4}>
          <Heading as="h2" size="lg" mb={4}>
            Premium Plan
          </Heading>
          <Text fontSize="xl" mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Badge colorScheme="purple" mb={4}>
            $99.99/month
          </Badge>
          <Link href="#">
            <Button colorScheme="purple">Get Started</Button>
          </Link>
        </Box> */}
      </Stack>
    </Box>
  );
};
export default Pricing;
