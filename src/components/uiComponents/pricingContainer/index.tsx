import {
  Box,
  Text,
  Button,
  HStack,
  useColorModeValue,
  VStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

type PricingContainerProps = {
  heading: string;
  features: string[];
  pricing: {
    currency?: string;
    actualPrice: string;
    discountedPrice?: string;
    frequency?: "month" | "year";
  };
  button?: { text: string; action?: () => {} };
  colorScheme?: string;
};
const PricingContainer = ({
  heading,
  features,
  pricing,
  button,
  colorScheme = "green",
}: PricingContainerProps) => {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      <Box py={4} px={12}>
        <Text fontWeight="500" fontSize="2xl">
          {heading}
        </Text>
        <HStack justifyContent="center">
          <Text fontSize="3xl" fontWeight="600">
            {pricing.currency || "$"}
          </Text>
          <Text fontSize="5xl" fontWeight="900">
            {/* TODO: Apply discount UI here (striked text) */}
            {pricing.discountedPrice
              ? pricing.discountedPrice
              : pricing.actualPrice}
          </Text>
          {pricing.frequency && (
            <Text fontSize="3xl" color="gray.500">
              /{pricing.frequency}
            </Text>
          )}
        </HStack>
      </Box>
      <VStack
        bg={useColorModeValue("gray.50", "gray.700")}
        py={4}
        borderBottomRadius={"xl"}
      >
        <List spacing={3} textAlign="start" px={12}>
          {features.map((feature, i) => (
            // <Text key={i} fontSize="xl" mb={4}>
            //   {feature}
            // </Text>
            <ListItem key={i}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {feature}
            </ListItem>
          ))}
        </List>
        {button && (
          <Box w="80%" pt={7}>
            <Button colorScheme={colorScheme}>{button.text}</Button>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default PricingContainer;
