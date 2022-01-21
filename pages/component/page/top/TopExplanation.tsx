import {CIRCLE_COLOR} from "../../../../const/const";
import {Center} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import Link from "next/link";

const TopExplanation = ()=>{
    return <Center style={{backgroundColor:"#e6f2ff",width:"100%",padding:"60px 40px"}}>
        <div style={{width:"100%",maxWidth:"1120px",backgroundColor:"white",textAlign:"center",padding:30,borderRadius:20,letterSpacing:0.2}}>
            <div style={{marginTop:30,fontSize:25,fontWeight:400,color:CIRCLE_COLOR,fontFamily:"\"Avenir-Roman\",\"Arial\",\"游ゴシック体\",YuGothic,\"游ゴシック Medium\",\"Yu Gothic Medium\",\"游ゴシック\",\"Yu Gothic\",sans-serif"}}>
                電子計算機研究会 通称: Den3は<br/>芝浦工業大学で活動する<wbr/>プログラミング系サークルです
            </div>
            <div style={{marginTop:20,fontSize:18,fontWeight:400,fontFamily:"\"Avenir-Roman\",\"Arial\",\"游ゴシック体\",YuGothic,\"游ゴシック Medium\",\"Yu Gothic Medium\",\"游ゴシック\",\"Yu Gothic\",sans-serif"}}>
                競技プログラミング, ゲーム制作, WEBアプリ開発, 機械学習研究 などを行っています
            </div>
            <div style={{marginTop:30}}>
                <Link  href={"/activity_content"}>
                    <a>
                        <Button _focus={{ boxShadow: "none"}} _hover={{backgroundColor:"#333"}} bg={CIRCLE_COLOR} color={"white"} size='lg' fontFamily={"\"Avenir-Roman\",\"Arial\",\"游ゴシック体\",YuGothic,\"游ゴシック Medium\",\"Yu Gothic Medium\",\"游ゴシック\",\"Yu Gothic\",sans-serif"}>
                            もっと詳しく
                        </Button>
                    </a>
                </Link>
            </div>
        </div>
    </Center>
}

export default TopExplanation
