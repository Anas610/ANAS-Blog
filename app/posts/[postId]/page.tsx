'use client'
import { useEffect, useState } from "react";
import { Container, Box, Text, Flex, Heading, Center } from "@chakra-ui/react";
import axios from "axios";
import { Avatar } from '@chakra-ui/react'
import Loader from "@/app/Components/loader/page";


export const metadata = {
    title: "post details"
};

interface UserDetails {
    id: number;
    name: string;
}

interface PostsDetails {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface CommentDetails {
    id: number;
    postId: number;
    email: string;
    name: string;
    body: string;
}

interface ParamsData {
    params: { postId: number }
}

export default function PostDetails(props: ParamsData) {
    const [id, setId] = useState(props.params.postId)
    const [post, setPost] = useState<PostsDetails>({
        id: 0,
        userId: 0,
        title: '',
        body: ''
    })
    const [users, setUsers] = useState<UserDetails[]>([])
    const [comments, setComments] = useState<CommentDetails[]>([])

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setPost(response.data)
        }
        const fetchUsers = async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(result.data)
        }
        const fetchComments = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setComments(res.data)
        }
        getPost()
        fetchUsers()
        fetchComments()
    }, [])
    let postComments: CommentDetails[] = comments.filter(comment => comment.postId === post.id)
    console.log(postComments);
    return (
        <Box>
            <Container maxW={{ base: "34rem", md: "50rem", lg: "70rem" }}>
                {comments.length > 0 ? <>
                    <Box>
                        <Container maxW={{ base: "34rem", md: "50rem", lg: "70rem" }}
                            bg="white"
                            color="black">
                            <Center>
                                <Box w={{ base: '30rem', md: '35rem', lg: '40rem' }} p='4' mb='10' borderBottom="1px solid black">
                                    <Flex mb='3'>
                                        <Avatar size='xs' src='https://bit.ly/broken-link' />
                                        <Text ml='2' borderBottom="1px solid #7F56D9">{users[post.userId]?.name}</Text>
                                    </Flex>
                                    <Heading as='h5' mb='4' size='md'>{post.title}</Heading>
                                    <Text color='#7F56D9'>{post.body}</Text>
                                </Box>
                            </Center>
                        </Container>
                    </Box>
                    <Box>
                        <Container maxW={{ base: "34rem", md: "50rem", lg: "70rem" }}
                            color="black">
                            <Center>
                                <Box w={{ base: '30rem', md: '35rem', lg: '40rem' }} bg="#F8FAFB" px='10'>

                                    <Text fontSize='xl' fontWeight='bold' my='10' borderBottom="1px solid #7F56D9">Comments</Text>
                                    {
                                        postComments.map((comment, index) => {
                                            return <Box mb='8' key={index}>
                                                <Flex mb='3'>
                                                    <Avatar name={comment.email} size='xs' src='https://bit.ly/broken-link' />
                                                    <Text ml='2' fontWeight='bold' color='#7F56D9'>{comment.email}</Text>
                                                </Flex>
                                                <Text>{comment.body}</Text>
                                            </Box>
                                        })
                                    }
                                </Box>
                            </Center>
                        </Container>
                    </Box>
                </>
                    : <Loader />
                }
            </Container>
        </Box>
    )
}