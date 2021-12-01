import {NextPage} from "next";
import {Box, Flex, Heading, Spacer, VStack} from "@chakra-ui/layout";
import {Button, IconButton} from "@chakra-ui/button";
import {ChevronLeftIcon, EditIcon, ViewIcon} from "@chakra-ui/icons";
import {Skeleton} from "@chakra-ui/skeleton";
import ResizeTextArea from "../../component/ResizeTextArea";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import StyledMarkdown from "../../component/StyledMarkdown";

const EditorPage:NextPage = ()=>{

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    const [isEditMode,setEditMode] = useState(true)

    const router = useRouter();

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

    return <Flex bg="gray.100" pb={100} minH="100vh" w="100%" pl={"25px"} pr={"25px"} alignContent="center">
        <VStack alignContent="center" w={"100%"}>
            <Flex
                bg="gray.100"
                as="header"
                position="fixed"
                top={0}
                width="full"
                shadow="sm"
                py={4}
                px={8}
            >
                <Box>
                    <IconButton
                        onClick={()=>{router.back()}}
                        aria-label="back"
                        color="black"
                        rounded="full"
                        _focus={{ boxShadow: "none"}}
                        icon={<ChevronLeftIcon />}
                    />
                </Box>
                <Spacer />
                <Box>
                    <Button disabled colorScheme="blue">
                        保存済み
                    </Button>
                </Box>
            </Flex>
            <VStack w={"100%"} maxW={"770px"}>
                <Box mt={"6rem"} mx="auto" w={"100%"}>
                    <Heading as="h1" size="lg" fontWeight="bold">
                        <ResizeTextArea placeholder={'タイトル'} value={title} setValue={setTitle}/>
                    </Heading>
                    <Flex mt={8}>
                        <Box bg="white" maxW={770} w={"full"} rounded="md" p={4} shadow="lg">
                            {
                                isEditMode
                                    ? <ResizeTextArea placeholder={'本文'} value={body} setValue={setBody}/>
                                    : <StyledMarkdown markdown={body}/>
                            }
                        </Box>
                        <Box display={{sm:"flex",base:"none"}} ml={6}>
                            <Box w={"92px"} h={47} bg="white" rounded="full" p={1} shadow="lg" top={100} position="sticky">
                                <Mode/>
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
            </VStack>
        </VStack>
    </Flex>
}

const ParagraphSkeleton = () => <Skeleton mb={4} h={"1rem"}></Skeleton>;

export default EditorPage