import React from "react";
import {SampleBlogList} from "../../../const/Sample";
import BlogListItem from "../../BlogListItem";

import {
    chakra,
    SimpleGrid,
    Center,
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Spacer, Flex,
} from '@chakra-ui/react';
import {BlogTopics} from "../../../model/BlogContentEntity";
import {BlogListEntity} from "../../../model/BlogListPage";
import {CIRCLE_COLOR} from "../../../const/const";
import {Button} from "@chakra-ui/button";

const TopBlogList:React.FC = (props)=>{

    const data = SampleBlogList.slice(0,9);

    return <Center style={{backgroundColor:"#f3f3f3",width:"100%",padding:"60px 40px"}}>
        <div style={{width:"100%",maxWidth:"1120px",letterSpacing:0.2}}>
            <Heading as="h2" mt={5} mb={70}>
                Latest articles
            </Heading>
            <SimpleGrid spacing={['30px','30px','50px','90px']} columns={[1,2,2,3]}>
                {
                    data.map((e,i)=>{
                        return <BlogListItem {...e}/>
                    })
                }
            </SimpleGrid>
            <Center mt={20} mb={5}>
                <Button _hover={{backgroundColor:"#333"}} bg={CIRCLE_COLOR} color={"white"} size='lg' fontFamily={"\"Avenir-Roman\",\"Arial\",\"游ゴシック体\",YuGothic,\"游ゴシック Medium\",\"Yu Gothic Medium\",\"游ゴシック\",\"Yu Gothic\",sans-serif"}>
                    もっと詳しく
                </Button>
            </Center>
        </div>
    </Center>
}

export default TopBlogList