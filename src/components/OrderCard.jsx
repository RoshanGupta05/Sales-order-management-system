import React from 'react';
import { Box, Text, Badge, Button, VStack, HStack, Divider } from '@chakra-ui/react';

function OrderCard({ order, onDelete }) {
  return (
    <Box 

      width="80%"
      p={5} 
      shadow="md" 
      borderWidth="1px" 
      borderRadius="md" 
      mb={4}
      bg="#2a3a45 "
    >
      <HStack justifyContent="space-between">
        <Text fontWeight="bold" fontSize="xl">{order.title}</Text>
        <Badge colorScheme={order.status === "Active" ? "green" : "red"}>{order.status}</Badge>
      </HStack>
      <Text mt={2}>Customer: {order.customer}</Text>
      <Text mt={2}>Date: {new Date(order.date).toLocaleDateString('en-IN')}</Text>
      <Text mt={2} fontWeight="bold">Amount: ₹{order.amount.toLocaleString('en-IN')}</Text>
      <Divider my={4} />
      <VStack align="start">
        {order.items.map((item, index) => (
          <HStack key={index} justifyContent="space-between" width="full">
            <Text>{item.name} (x{item.quantity})</Text>
            <Text>₹{(item.price * item.quantity).toLocaleString('en-IN')}</Text>
          </HStack>
        ))}
      </VStack>
      <Button 
        mt={4} 
        colorScheme="red" 
        onClick={() => onDelete(order.id)}
      >
        Delete
      </Button>
    </Box>
  );
}

export default OrderCard;
