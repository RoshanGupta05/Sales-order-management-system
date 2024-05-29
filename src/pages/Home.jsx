import React from 'react';
import { Box, Heading, Text, VStack, Button, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function HomePage() {
  const { user } = useAuth();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const buttonColor = useColorModeValue('teal.500', 'teal.300');

  return (
    <Box 
      height="100vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      bg={bgColor}
      p={5}
    >
      <VStack 
        spacing={8} 
        p={10} 
        borderWidth="1px" 
        borderRadius="md" 
        boxShadow="lg"
        bg="#2a3a45"
        color={textColor}
        width="full"
        maxWidth="800px"
      >
        <Heading>Welcome to the Sales Management System</Heading>
        {user ? (
          <Text fontSize="lg" textAlign="center">
            Hello, {user.username}! Manage your orders efficiently with our user-friendly interface.
          </Text>
        ) : (
          <Text fontSize="lg" textAlign="center">
            Please login or register to continue.
          </Text>
        )}
        <Grid templateColumns="repeat(2, 1fr)" gap={6} width="full">
          <GridItem>
            <Button 
              as={Link} 
              to="/active-orders" 
              colorScheme="teal" 
              bg={buttonColor}
              width="full"
            >
              View Active Orders
            </Button>
          </GridItem>
          <GridItem>
            <Button 
              as={Link} 
              to="/completed-orders" 
              colorScheme="teal" 
              bg={buttonColor}
              width="full"
            >
              View Completed Orders
            </Button>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
}

export default HomePage;
