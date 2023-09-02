'use client'
import { Container, Box, Text, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Avatar } from '@chakra-ui/react'
import Link from "next/link";
import Loader from "../Components/loader/page";



export const metadata = {
    title: "post details"
};


interface UserDetails {
    id: number;
    name: string;
}

interface PostDetails {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export default function Posts() {
    const [posts, setPosts] = useState<PostDetails[]>([])
    const [users, setUsers] = useState<UserDetails[]>([])
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(response.data)
        }
        const fetchUsers = async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(result.data)
        }
        fetchPosts()
        fetchUsers()
    }, [])

    return (
        <Box>
            <Container maxW={{ base: "34rem", md: "50rem", lg: "70rem" }}
                bg="white"
                color="black">
                {users.length > 0 ? <><Text fontSize='xl' fontWeight='bold' mb='8' mt='20'>All Blog Posts</Text>
                    <Box display='flex' flexWrap='wrap' justifyContent='space-between'>
                        {
                            posts.map((post, index) => {
                                return <Link key={index} href={`/posts/${post.id}`}>
                                    <Box key={index} w={{ base: '30rem', md: '22rem', lg: '20rem' }} p='4' mb='10' border="1px solid black" borderRadius='3xl' h={{ base: '14.5rem', md: '19rem', lg: '20rem' }}>
                                        <Flex mb='3'>
                                            <Avatar size='xs' src='https://bit.ly/broken-link' />
                                            <Text ml='2' borderBottom="1px solid #7F56D9" fontWeight='bold'>{users[post.userId]?.name}</Text>
                                        </Flex>
                                        <Heading color='#7F56D9' as='h5' mb='4' size='md'>{post.title}</Heading>
                                        <Text>{post.body}</Text>
                                    </Box>
                                </Link>
                            })
                        }
                    </Box> </>
                    : <Loader />
                }
            </Container>
        </Box>
    )
}