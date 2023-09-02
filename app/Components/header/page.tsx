"use client"
import { Heading, Center, Container, Box } from "@chakra-ui/react";


export default function Header() {
    return (
        <Box>
            <Container maxW={{ base: "34rem", md: "50rem", lg: "70rem" }}
                bg="white"
                my={{ base: "2rem", md:'3rem'}}
                color="black">
                <Center>
                    <Heading as='h1' borderTop="1px solid black" borderBottom="1px solid black" fontSize={{ base: "6.7rem", md: '10rem', lg: "12.5rem", xl: '14rem' }} noOfLines={1}>
                        THE BLOG
                    </Heading>
                </Center>
            </Container>
        </Box>
    )
}