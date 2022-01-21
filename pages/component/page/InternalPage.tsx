import {NextPage} from "next";
import {Box, Flex,Spacer, VStack} from "@chakra-ui/layout";
import {IconButton} from "@chakra-ui/button";
import {ChevronLeftIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";

const InternalPage:NextPage<{topbarElement?:React.ReactElement,maxW?:string}> = (props)=>{

    const router = useRouter()

    return <Flex bg="gray.100" pb={100} minH="100vh" w="100%" pl={"25px"} pr={"25px"}>
        <VStack alignContent="center" w={"100%"}>
            <Flex
                bg="gray.100"
                as="header"
                position="static"
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
                {
                    props.topbarElement
                }
            </Flex>
            <VStack w={"100%"} maxW={props.maxW ? props.maxW : "770px"}>
                {props.children}
            </VStack>
        </VStack>
    </Flex>
}

export default InternalPage
