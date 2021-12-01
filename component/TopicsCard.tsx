import {BlogTopics} from "../model/BlogContentEntity";
import Link from "next/link";
import {HStack} from "@chakra-ui/layout";

const TopicsCard:React.FC<{topics:BlogTopics[],isMobile?:boolean}> = (props)=>{
    return <>
        {
            props.isMobile ? <HStack>
                {
                    props.topics.map((e,i)=>{
                        return <div key={'topics-'+i+'-'+e.id}>
                            <Link href={'/blog/topics/'+e.id}>
                                <a style={{color:"#333",textDecoration:"none !important"}}>
                                    <div style={{display:"flex",padding:2,marginRight:".5em",borderRadius:"1.5em",border:"1px solid #5a90b72b",alignItems:"center",marginTop:11}}>
                                        <img src={e.avatar} style={{borderRadius:"50%",display:"block"}} loading="lazy" width="24" height="24"/>
                                        <div style={{margin:"0 7px",flex:1,fontSize:11,wordBreak:"break-all"}}>{e.name}</div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    })
                }
            </HStack> : <div style={{backgroundColor:"white",borderRadius:12,padding:"15px 20px 25px",boxShadow:"0 2px 4px #4385bb12"}}>
                <p style={{margin:0,fontWeight:700}}>Topics</p>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    {
                        props.topics.map((e,i)=>{
                            return <Link key={'topics-'+i+'-'+e.id} href={'/blog/topics/'+e.id}>
                                <a style={{minWidth:"49%"}}>
                                    <div style={{display:"flex",alignItems:"center",marginTop:11}}>
                                        <img src={e.avatar} style={{borderRadius:"50%",display:"block",border:"1px solid #588fb72b"}} loading="lazy" width="34" height="34"/>
                                        <div style={{margin:"0 7px",flex:1,fontSize:12.5,wordBreak:"break-all"}}>{e.name}</div>
                                    </div>
                                </a>
                            </Link>
                        })
                    }
                </div>
            </div>
        }
    </>
}

export default TopicsCard