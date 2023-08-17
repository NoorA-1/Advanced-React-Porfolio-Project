import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
 
 
  return <Box maxW='sm' borderRadius='lg' bg="white" overflow="hidden">
    <Image src={imageSrc} />
    <Box p={3} maxW="90%">
      <Heading fontSize="1.3em"  color="black" mb={3}>{title}</Heading>
      <Text color="grey" fontSize="0.9em" >{description}</Text>
    </Box>
    <Text pl={3} mb={3} color="black" fontWeight="bold" fontSize="0.9em">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /> </Text>
  </Box>;
};

export default Card;
