import React from "react";
import {BlogContentEntity} from "../../../model/BlogContentEntity";
import {ArticleHeader} from "../ArticleHeader";
import {VStack, Stack, Center, HStack, Box} from "@chakra-ui/layout";
import StyledMarkdown from "../StyledMarkdown";
import TopicsCard from "../TopicsCard";
import AuthorCard from "../AuthorCard";
import CommentBox from "../CommentBox";

const NormalMarkdownPage:React.FC<BlogContentEntity> = (props)=>{
    return <div style={{backgroundColor:"#edf2f7"}}>
        <div style={{width:"100%"}}>
            <Center>
                <div style={{width:"100%",maxWidth:"1120px"}}>
                    <ArticleHeader img={props.header_img}>
                        {props.title}
                    </ArticleHeader>
                </div>
            </Center>
        </div>
        <VStack>
            <HStack alignItems="start" w={"full"} maxW={1120}>
                <Stack w={"calc(100% - 340px)"}>
                    <Box color="#2e2e2e" w={"full"} maxW={"770px"} bg="white" boxShadow="0 2px 4px #4385bb12" borderRadius={12} p={10}>
                        <Box display={{base:"block",xl:"none"}}>
                            <TopicsCard topics={props.topics} isMobile/>
                        </Box>
                        <StyledMarkdown markdown={props.markdown}/>
                    </Box>
                    {
                        props.canComment ? <Box>
                            <Box mt={5} bg="white" boxShadow="0 2px 4px #4385bb12" borderRadius={12}>
                                <CommentBox comment={[]}/>
                            </Box>
                        </Box> : <></>
                    }
                </Stack>
                <Box w={"340px"} top="38px" position="sticky" display={{base:"none",xl:"block"}} pl={5}>
                    <TopicsCard topics={props.topics}/>
                    <Box mt={7}>
                        <AuthorCard author={props.author}/>
                    </Box>
                </Box>
            </HStack>
            <HStack pt={5} w={"full"} maxW={700} display={{base:"block",xl:"none"}}>
                <AuthorCard author={props.author}/>
            </HStack>
            <HStack w={"full"} h={10}/>
        </VStack>
    </div>
}

export default NormalMarkdownPage
