import React from "react";
import {BlogListEntity} from "../model/BlogListPage";
import {Flex, HStack, Spacer, Stack, Grid, Container} from "@chakra-ui/layout";
import {BlogTopics} from "../model/BlogContentEntity";
import {Box, Center, Heading, Image, Tag, Text} from "@chakra-ui/react";

const BlogTags: React.FC<{tags:BlogTopics[]}> = (props) => {
    return (
        <Container justifyContent="center" flexWrap="wrap" minW={245} pl={3} pr={3}>
            {props.tags.map((tag) => {
                return (
                    <Tag mr={1} mt={2} size={'md'} variant="solid" colorScheme="blue" key={tag.id}>
                        {tag.name}
                    </Tag>
                );
            })}
        </Container>
    );
};

export const BlogAuthor: React.FC<BlogListEntity> = (props) => {
    return (
        <Flex w={"full"} p={4} minW={245}>
            <Image
                borderRadius="full"
                boxSize="40px"
                src={props.author?.avatar}
            />
            <Center ml={2}>
                <Text fontWeight="medium">{props.author?.name}</Text>
            </Center>
            <Spacer/>
            <Center>
                <Text>{props.date}</Text>
            </Center>
        </Flex>
    );
};

const BlogListItem:React.FC<BlogListEntity> = (props) => {
    return (
        <Box bg="white" position="relative" display="flex" flexDirection="column" borderRadius={9} overflow="hidden" boxShadow="0 3px 6px -2px #000a3c33">
            <Box>
                <Box h={120} bg={"#a6cbed"}>
                    <Image
                        transform="scale(1.0)"
                        src={props.thumbnail}
                        objectFit="contain"
                        width="100%"
                        height="100%"
                        transition="0.3s ease-in-out"
                    />
                </Box>
                <Box mb={"80px"}>
                    <BlogTags tags={props.topics}/>
                    <Heading pl={4} pr={4} pt={4} fontSize="xl" marginTop="2">
                        {props.title}
                    </Heading>
                </Box>
                <Box display="flex" w="full" position="absolute" bottom={0} flexDirection="column" >
                    <BlogAuthor {...props}/>
                </Box>
            </Box>
        </Box>
    );
};

export default BlogListItem