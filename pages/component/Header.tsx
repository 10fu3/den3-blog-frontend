import NextLink from "next/link"
import React from "react";

import {
    chakra,
    Flex,
    Box,
    HStack,
    VStack,
    Text, Stack,
} from "@chakra-ui/react"
import {CIRCLE_COLOR} from "../../const/const";
import Head from "next/head";
import {Logo, LogoIcon} from "./Logo";
import {Links} from "../../const/Links";
import Link from "next/link";

const HeaderContent:React.FC = () => {

    const Content = () => <ul style={{flexWrap:"wrap",margin:0,display:"flex",padding:0,listStyle:"none",color:CIRCLE_COLOR,height:"100%"}}>
        {
            Links.map((e,i)=>{
                return <chakra.li padding={{lg:"2.3rem 1rem 2.3rem 1rem",base:"3px 10px"}} key={e.url+"-"+i} style={{transition:".1s",flex:"1 0 auto",margin:"0px",height:"100%"}} _hover={{fontWeight: "bold",color:"#333",textAlign:"center"}}>
                    <Link href={e.url} passHref>
                        <a style={{height:"100%"}}>
                            <chakra.div style={{textAlign:"center",fontSize:18,height:"100%",fontFamily:"\"Avenir-Roman\",\"Arial\",\"游ゴシック体\",YuGothic,\"游ゴシック Medium\",\"Yu Gothic Medium\",\"游ゴシック\",\"Yu Gothic\",sans-serif"}}>
                                {
                                    e.tag
                                }
                            </chakra.div>
                        </a>
                    </Link>
                </chakra.li>
            })
        }
    </ul>

    return <>
        <HStack bg="white" display={{lg:"flex",base:"none"}}>
            <div style={{width:"100%",padding:"0px 40px",height:"100%",display:"flex",justifyContent:"center"}}>
                <div style={{maxWidth:"1120px",width:"100%",height:"100%"}}>
                    <HStack  h="full" w="full">
                        <Head>
                            <link
                                rel="preload"
                                href="/static/fonts/mameh_woff/Mamelon-4HiRegular.woff2"
                                as="font"
                                crossOrigin=""
                            />
                        </Head>
                        <Flex w="100%" h="100%" align="center" justify="space-between">
                            <Logo/>
                            <Flex
                                justify="flex-end"
                                w="100%"
                                align="center"
                                maxW="1100px"
                                height="100%"
                            >
                                <Content/>
                            </Flex>
                        </Flex>
                    </HStack>
                </div>
            </div>
        </HStack>
        <Box bg="white" w="full" display={{lg:"none",base:"flex"}}>
            <div style={{width:"100%"}}>
                <VStack pt={5}>
                    <Logo/>
                </VStack>
                <div style={{padding:"20px 0px"}}>
                    <Content/>
                </div>
            </div>
        </Box>
    </>
}

const Header:React.FC = ()=>{
    return <chakra.header
        transition="box-shadow 0.2s, background-color 0.2s"
    >
        <chakra.div>
            <HeaderContent />
        </chakra.div>
    </chakra.header>
}

export default Header
