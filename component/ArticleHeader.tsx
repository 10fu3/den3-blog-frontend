import React from "react";
import {HStack, VStack} from "@chakra-ui/layout";

export const ArticleHeader:React.FC<{img?:string}> = (props)=>{
    return <div style={{position:"relative",marginBottom:45,borderRadius:"0 0 12px 12px",backgroundColor:props.img ? "white" : "rgba(252,252,252,0)"}}>

        <div style={{opacity:0.4,filter:"blur(5px);",height:300,backgroundSize:"cover",backgroundPosition:"center",backgroundImage:`url("${props.img ? props.img : ''}")`}}/>

        <div style={{width:"100%"}}>
            <HStack justifyContent="center" style={{width:"100%",position:"absolute",top:140}}>
                <VStack item style={{width:"100%",maxWidth:"1120px",textAlign:"center"}}>
                    <p style={{fontSize:"44px",color: "#333",fontFamily:"\"Avenir-Roman\",\"Arial\",\"游ゴシック体\",YuGothic,\"游ゴシック Medium\",\"Yu Gothic Medium\",\"游ゴシック\",\"Yu Gothic\",sans-serif\""}}>
                        {
                            props.children
                        }
                    </p>
                </VStack>
            </HStack>
        </div>
    </div>
}
