import React, { useState } from 'react';
import { Box, Heading, Input, VStack } from '@chakra-ui/react';
import OrderCard from '../components/OrderCard';

function ActiveOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([
    { 
      id: 1, 
      title: 'Order 1', 
      customer: 'Customer A', 
      amount: 12050, 
      date: '2023-05-15', 
      status: 'Active', 
      items: [
        { name: 'Product 1', quantity: 2, price: 3000 },
        { name: 'Product 2', quantity: 1, price: 6050 }
      ]
    },
    { 
      id: 2, 
      title: 'Order 2', 
      customer: 'Customer B', 
      amount: 8999, 
      date: '2023-06-20', 
      status: 'Active', 
      items: [
        { name: 'Product 3', quantity: 1, price: 8999 }
      ]
    },
    { 
      id: 3, 
      title: 'Order 3', 
      customer: 'Customer C', 
      amount: 15000, 
      date: '2023-07-10', 
      status: 'Active', 
      items: [
        { name: 'Product 4', quantity: 3, price: 5000 }
      ]
    }
  ]);

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const filteredOrders = orders.filter(order =>
    order.id.toString().includes(searchTerm) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={5}>
      <Heading mb={6}>Active Orders</Heading>
      <Input 
        placeholder="Search by Order ID or Customer Name" 
        mb={6} 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <VStack spacing={4} width="full">
        {filteredOrders.map(order => (
          <OrderCard key={order.id} order={order} onDelete={handleDelete} />
        ))}
      </VStack>
    </Box>
  );
}

export default ActiveOrders;
