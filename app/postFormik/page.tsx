'use client'
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { FormControl, FormLabel, FormErrorMessage, Input, Button } from '@chakra-ui/react'
import { Container } from "@chakra-ui/react";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'



export const metadata = {
    title: "post form"
};

let schema = Yup.object().shape({
    title: Yup.string().max(100, "should be less than 100 characters").required('please provide title'),
    author: Yup.string().required('please provide author'),
    body: Yup.string().min(50, 'should be more than 50 characters').required('please provide content')
});

export default function AddPost() {

    interface formData {
        title: string,
        author: string,
        body: string
    }

    function handleSubmit(values: formData, actions: any) {
        actions.setSubmitting(false);
        axios.post(`https://jsonplaceholder.typicode.com/posts`,
            values).then((res) => {
                console.log(res.data);
            }).catch((error) => {
                console.error(error);
            })
    }
    const [alert, setAlert] = useState<boolean>(false)

    return (
        <Container maxW={{ base: "34rem", md: "40rem", lg: "50rem" }}
            bg="white"
            color="black">
            <Formik
                initialValues={{
                    title: '',
                    author: '',
                    body: ''
                }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    handleSubmit(values, actions)
                    setAlert(true)
                }}
            >
                {(props) => (
                    <Form>
                        {alert == false ? null
                            : (<Alert status='success' mb={5}>
                                <AlertIcon />
                                <AlertTitle>
                                    Data uploaded to the server successfully.
                                </AlertTitle>
                            </Alert>)
                        }
                        <Field name='title' >
                            {({ field, form }: any) => (
                                <FormControl isInvalid={form.errors.title && form.touched.title} mb='8'>
                                    <FormLabel>title</FormLabel>
                                    <Input {...field} placeholder='Enter title' />
                                    <FormErrorMessage color='red'>{form.errors.title}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='author' >
                            {({ field, form }: any) => (
                                <FormControl isInvalid={form.errors.author && form.touched.author} mb='8'>
                                    <FormLabel>author</FormLabel>
                                    <Input {...field} placeholder='Enter author' />
                                    <FormErrorMessage color='red'>{form.errors.author}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='body' >
                            {({ field, form }: any) => (
                                <FormControl isInvalid={form.errors.body && form.touched.body} mb='8'>
                                    <FormLabel>body</FormLabel>
                                    <Input {...field} placeholder='Enter body' />
                                    <FormErrorMessage color='red'>{form.errors.body}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            mt={4}
                            py={6}
                            px={8}
                            bg='#7F56D9'
                            colorScheme='teal'
                            type='submit'
                            isLoading={props.isSubmitting}
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>

        </Container>
    )
}