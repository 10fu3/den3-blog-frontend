import {Box, Heading, HStack, Stack} from "@chakra-ui/layout";
import {Avatar} from "@chakra-ui/avatar";
import React from "react";
import Link from "next/link";

export const ListItem:React.FC<{id:string,avatar:string,name:string,body?:string,date?:string}> = (props) => {
    return <HStack>
        <Avatar src={props.avatar}/>
        <Box w={1}/>
        <Stack>
            <Link href={'/author/'+props.id}>
                <a>
                    <Heading size="sm">{props.name}</Heading>
                </a>
            </Link>
            <Heading size="sm">{props?.date}</Heading>
            <Box>{props?.body}</Box>
        </Stack>
    </HStack>
}