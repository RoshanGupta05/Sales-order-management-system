import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Input, Button, VStack, Heading } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, handleSubmit } = useForm();
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    registerUser(data.username);
    navigate('/');
  };

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      minHeight="100vh"
    >
      <Box 
        p={5} 
        shadow="md" 
        borderWidth="1px" 
        borderRadius="md" 
        width="full" 
        maxWidth="md"
      >
        <Heading mb={6} textAlign="center">Register</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <Input placeholder="Username" {...register("username", { required: true })} />
            <Input placeholder="Password" type="password" {...register("password", { required: true })} />
            <Button type="submit" width="full" colorScheme="blue">Register</Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default Register;
