import React from "react";
import NextLink from "next/link";
import {Stack, HStack, Text} from "@chakra-ui/react";
import {CIRCLE_COLOR} from "../../const/const";
import LogoIcon from "./LogoIcon";

const Logo:React.FC = ()=>{
    return <Stack>
        <NextLink href="/" passHref>
            <a>
                <HStack w="310px">
                    <LogoIcon height={42}/>
                    <div style={{width:10,height:48,marginLeft:10,backgroundColor:CIRCLE_COLOR}}/>
                    <div style={{color:CIRCLE_COLOR,fontWeight:"bold",fontFamily:"mame4"}}>
                        <Text fontSize="2xl">電子計算機研究会</Text>
                    </div>
                </HStack>
            </a>
        </NextLink>
    </Stack>
}
export default Logo
