import {NextPage} from "next";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Button, IconButton} from "@chakra-ui/button";
import {EditIcon, ViewIcon} from "@chakra-ui/icons";
import InternalPage from "./page/InternalPage";
import {Box, Flex, Heading, VStack} from "@chakra-ui/layout";
import ResizeTextArea from "./ResizeTextArea";
import StyledMarkdown from "./StyledMarkdown";
import {SampleBlogArticle} from "../../const/Sample";
import {BlogContentEntity} from "../../model/BlogContentEntity";

const Editor:React.FC<{id?:string}> = (props)=>{

    const article:BlogContentEntity|undefined = SampleBlogArticle.filter(i=>i.id === props.id)[0];

    const [title,setTitle] = useState(props.id ? article.title : '')
    const [body,setBody] = useState(props.id ? article.markdown : '')

    const [isEditMode,setEditMode] = useState(true)

    const Mode = ()=> <>
        <IconButton
            onClick={()=>{setEditMode(true)}}
            aria-label="edit"
            _focus={{ boxShadow: "none"}}
            bg={isEditMode ? "gray.300" : "white"}
            color={!isEditMode ? "gray.300" : "white"}
            rounded="full"
            mr={1}
            icon={<EditIcon />}
        />
        <IconButton
            onClick={()=>{setEditMode(false)}}
            aria-label="view"
            _focus={{ boxShadow: "none"}}
            bg={!isEditMode ? "blue.400" : "white"}
            color={isEditMode ? "gray.300" : "white"}
            rounded="full"
            icon={<ViewIcon />}
        />
    </>

    return <InternalPage topbarElement={
        <Box>
            <Button disabled colorScheme="blue">
                保存済み
            </Button>
        </Box>
    }>
        <Box mt={{base:"10px",xl:"6rem"}} mx="auto" w={"100%"}>
            <Heading as="h1" size="lg" fontWeight="bold">
                <ResizeTextArea placeholder={'タイトル'} value={title} setValue={setTitle}/>
            </Heading>
            <Flex mt={8} h={"full"}>
                <Box bg="white" maxW={770} w={"full"} rounded="md" p={4} shadow="lg">
                    {
                        isEditMode
                            ? <ResizeTextArea placeholder={'本文'} value={body} setValue={setBody}/>
                            : <StyledMarkdown markdown={body}/>
                    }
                </Box>
                <Box display={{sm:"flex",base:"none"}} h={"full"} ml={6}>
                    <Box>
                        <Box top={150} position="sticky" w={"92px"} h={47} bg="white" rounded="full" p={1} shadow="lg" >
                            <Mode/>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
        <div style={{width:"100%",zIndex:100}}>
            <VStack display={{sm:"none",base:"flex"}}>
                <Box w={"92px"} h={47} bg="white" rounded="full" p={1} shadow="lg" bottom={8} position="fixed">
                    <Mode/>
                </Box>
            </VStack>
        </div>
    </InternalPage>
}

export default Editor
