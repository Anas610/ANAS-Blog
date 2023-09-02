"use client"
import { Flex, Spacer, Container, Box, Text, Button, Heading } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import Link from "next/link";

export default function Navbar() {
    return (
        <Box py='5' mb={8}>
            <Container
                maxW={{ base: "34rem", md: "50rem", lg: "70rem" }}
                bg="white"
                color="black"
            >
                <Flex align='center'>
                    <Link href='/'>
                        <Box>
                            <Heading as='h2' size='lg' letterSpacing='tighter'>ANAS</Heading>
                        </Box>
                    </Link>

                    <Spacer />
                    <Box display={{ base: 'none', md: 'block' }}>
                        <Flex w={{ md: "30rem", lg: "38rem" }} justify='space-between' align='center'>
                            <Link href='/'>
                                <Text p='2'>Blog</Text>
                            </Link>
                            <Text p='2'>Projects</Text>
                            <Text p='2'>About</Text>
                            <Text p='2'>Newsletter</Text>
                            <Link href='/postFormik'>
                                <Button bg='#7F56D9' color='white'>New blog</Button>
                            </Link>
                            <Flex w='14' justify='space-around' align='center' borderRadius='2xl' bg='black' h='7'>
                                <SunIcon boxSize={4} color='white' />
                                <MoonIcon boxSize={4} color='white' />
                            </Flex>
                        </Flex>
                    </Box>
                    <Box display={{ base: 'flex', md: 'none' }} alignItems='center'>
                        <Link href='/postFormik'>
                            <Button bg='#7F56D9' color='white'>New blog</Button>
                        </Link>
                        <HamburgerIcon boxSize={6} ml={4} color='black' />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}