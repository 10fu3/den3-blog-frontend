import React from "react";
import {BlogListEntity} from "../model/BlogListPage";
import {Flex, Spacer, Container} from "@chakra-ui/layout";
import {BlogTopics} from "../model/BlogContentEntity";
import {Box, Center, Heading, Image, Tag, Text} from "@chakra-ui/react";
import {Avatar} from "@chakra-ui/avatar";

import Link from "next/link"

const BlogTags: React.FC<{tags:BlogTopics[]}> = (props) => {
    return (
        <Box mr={4} ml={4} minW={245}>
            {props.tags ? props.tags.map((tag,i) => {
                return (
                    <Link key={'tag-'+tag.id} href={'/blog/topic/'+tag.id+'/pages/1'}>
                        <a>
                            <Tag mr={1} mt={2} size={'md'} variant="solid" colorScheme="blue" key={tag.id}>
                                {tag.name}
                            </Tag>
                        </a>
                    </Link>
                );
            }) : <></>}
        </Box>
    );
};

export const BlogAuthor: React.FC<BlogListEntity> = (props) => {
    return (
        <Flex w={"full"} p={4} minW={245}>
            <Avatar src={props.author?.avatar} />
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
            <Link href={'/blog/article/'+props.id}>
                <a>
                    <Box>
                        <Box h={120} bg={"#ffffff"}>
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
                </a>
            </Link>
        </Box>
    );
};

export default BlogListItem
