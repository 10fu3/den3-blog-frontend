import React from "react";
import TwitterTimeline from "./TwitterTimeline";
import ExternalLinksCard from "./ExternalLinksCard";
import {Box, HStack, Stack, VStack} from "@chakra-ui/layout";

const Footer = ()=>{

    const content = <>
        <Box mt={30} mb={30} w={300}>
            <div>
                <TwitterTimeline/>
            </div>
            <div style={{backgroundColor:"white",borderRadius:"5px",marginTop:15,padding:10}}>
                <ExternalLinksCard/>
            </div>
        </Box>
        <Box padding={10}>
            <div style={{fontFamily:"\"Avenir-Roman\",\"Arial\",\"游ゴシック体\",YuGothic,\"游ゴシック Medium\",\"Yu Gothic Medium\",\"游ゴシック\",\"Yu Gothic\",sans-serif"}}>
                <p style={{color:"white",fontSize:30,margin:"20px 0px"}}>芝浦工業大学</p>
                <p style={{color:"white",fontSize:30,margin:"20px 0px"}}>電子計算機研究会</p>
                <div style={{margin:"30px 0px"}}>
                    <p style={{color:"white",margin:"10px 0px"}}>メール : den3.shibaura@gmail.com</p>
                    <p style={{color:"white",margin:"10px 0px"}}>Twitter : @sit_densan</p>
                </div>
                <p style={{color:"white",margin:"10px 0px"}}>Copyright©1967-{new Date().getFullYear()} 芝浦工業大学電子計算機研究会(Den3) All Rights Reserved.</p>
            </div>
        </Box>
    </>

    return <div style={{backgroundColor:"#333",padding:40,width:"100%"}}>
        <HStack justifyContent="center">
            <HStack maxW={1120} w="full" display={{lg:"flex",base:"none"}} justifyContent="space-between">
                {content}
            </HStack>
            <VStack display={{lg:"none",base:"flex"}}>
                {content}
            </VStack>
        </HStack>
    </div>
}

export default Footer
