import React from 'react'
import {Image,Text, Box,Center,Heading,Stack,useColorModeValue} from "@chakra-ui/react"

const BlogCard = ({blog}) => {
  return (
    <Center my={6}>
        <Box maxW={"445px"} 
        w="full" 
        bg={useColorModeValue("whihte","grey.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={
            "hidden"
        }
        >
            <Box>
                <Image src={`${blog.thumbnail_pic}`}/>
            </Box>
            <Stack>
                <Text>Blog</Text>
                <Heading>{blog.title}</Heading>
                <Text>{blog.description}</Text>
            </Stack>
            {/* <Stack>
                <Avatar></Avatar>
            </Stack> */}

        </Box>
    </Center>
    
  )
}

export default BlogCard