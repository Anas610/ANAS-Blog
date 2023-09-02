'use client'
import { Box, Text, Container } from "@chakra-ui/react"


export default function Footer() {
    return (
        <Container maxW={{ base: "34rem", md: "50rem", lg: "70rem" }}
        bg="white"
        color="black"
        py='8'>
            <Box display='flex' flexDirection={{base: "column", md: 'row'}} alignItems={{base: 'center', md: 'flex-start'}}>
                <Text my='1' mr='5'>© 2023</Text>
                <Text my='1' mr='5'>Twitter</Text>
                <Text my='1' mr='5'>LinkedIn</Text>
                <Text my='1' mr='5'>Email</Text>
                <Text my='1' mr='5'>RSS feed</Text>
                <Text my='1' mr='5'>Add to Feedly</Text>
            </Box>
        </Container>
    )
}