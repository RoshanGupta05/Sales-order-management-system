import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Input, Button, VStack, Heading, Link as ChakraLink } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    login(data.username);
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
        <Heading mb={6} textAlign="center">Login</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <Input placeholder="Username" {...register("username", { required: true })} />
            <Input placeholder="Password" type="password" {...register("password", { required: true })} />
            <Button type="submit" width="full" colorScheme="blue">Login</Button>
          </VStack>
        </form>
        <ChakraLink as={Link} to="/register">Don't have an account? Register here.</ChakraLink>
      </Box>
    </Box>
  );
}

export default Login;
