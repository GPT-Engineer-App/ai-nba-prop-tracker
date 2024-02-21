import React from "react";
import { Box, Flex, Heading, Table, Thead, Tbody, Tr, Th, Td, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Image, Text, VStack, HStack, Spacer, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaBasketballBall, FaRobot, FaChartLine } from "react-icons/fa";

const Index = () => {
  // Sample data, replace with real API call or algorithm output
  const playerPredictions = [
    { name: "LeBron James", prop: "Points", prediction: 28, actual: 30 },
    { name: "Stephen Curry", prop: "3-Pointers", prediction: 5, actual: 6 },
    { name: "Kevin Durant", prop: "Rebounds", prediction: 7, actual: 9 },
    // ... more players
  ];

  const accuracy = (prediction, actual) => {
    // Simple accuracy calculation (for example purposes)
    return ((actual - prediction) / actual) * 100;
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <VStack p={8} spacing={6}>
      <Flex alignItems="center">
        <FaBasketballBall size="2em" />
        <Heading ml={3}>NBA Prop Bet AI Tracker</Heading>
      </Flex>
      <HStack spacing={6} alignItems="flex-start">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={bgColor} w="full">
          <Heading fontSize="xl" mb={4}>
            Player Prop Predictions
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Player</Th>
                <Th>Prop</Th>
                <Th isNumeric>Prediction</Th>
                <Th isNumeric>Actual</Th>
                <Th isNumeric>Accuracy</Th>
              </Tr>
            </Thead>
            <Tbody>
              {playerPredictions.map((player, index) => (
                <Tr key={index}>
                  <Td>{player.name}</Td>
                  <Td>{player.prop}</Td>
                  <Td isNumeric>{player.prediction}</Td>
                  <Td isNumeric>{player.actual}</Td>
                  <Td isNumeric color={accuracy(player.prediction, player.actual) > 0 ? "green.500" : "red.500"}>
                    <StatArrow type={accuracy(player.prediction, player.actual) > 0 ? "increase" : "decrease"} />
                    {Math.abs(accuracy(player.prediction, player.actual)).toFixed(2)}%
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <VStack p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={bgColor}>
          <Heading fontSize="xl" mb={3}>
            AI Performance
          </Heading>
          <Stat>
            <StatLabel>Average Accuracy</StatLabel>
            <StatNumber>
              {/* This is an example, replace with actual average calculation */}
              {playerPredictions.reduce((acc, player) => acc + accuracy(player.prediction, player.actual), 0) / playerPredictions.length}%
            </StatNumber>
            <StatHelpText>Based on today's games</StatHelpText>
          </Stat>
          <IconButton aria-label="Refresh Data" icon={<FaRobot />} />
        </VStack>
      </HStack>
      <Flex p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={bgColor} w="full" justifyContent="space-between">
        <HStack>
          <Image src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYmElMjBiYXNrZXRiYWxsJTIwY291cnR8ZW58MHx8fHwxNzA4NTU2ODI4fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="full" />
          <VStack align="start">
            <Text fontWeight="bold">Next Game Predictions</Text>
            <Text fontSize="sm">Coming Soon...</Text>
          </VStack>
        </HStack>
        <Spacer />
        <IconButton aria-label="View Trends" size="lg" icon={<FaChartLine />} />
      </Flex>
    </VStack>
  );
};

export default Index;
