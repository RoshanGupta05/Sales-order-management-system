import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button, Stack, useColorMode, useColorModeValue, Text } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');

  const handleLogout = () => {
    logout();
  };

  return (
    <Box bg={bg} px={4} position="relative">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Sales Management</Box>
        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Button as={Link} to="/" variant="link">Home</Button>
            {user ? (
              <Button onClick={handleLogout} variant="link">Logout</Button>
            ) : (
              <>
                <Button as={Link} to="/login" variant="link">Login</Button>
                <Button as={Link} to="/register" variant="link">Register</Button>
              </>
            )}
            <Button onClick={toggleColorMode}>
              Toggle {color === 'gray.800' ? 'Light' : 'Dark'}
            </Button>
          </Stack>
        </Flex>
      </Flex>
      {user && (
        <Text
          style={{
            position: 'absolute',
            bottom: '-54px',
            width: '100%',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize:'20px'
          }}
        >
          Welcome, {user.username}
        </Text>
      )}
    </Box>
  );
}

export default Navbar;
