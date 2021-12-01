import {NextPage} from "next";
import {Divider, VStack} from "@chakra-ui/layout";
import Link from "next/link";

export interface ExternalLink {
    name:string,
    url:string
}

const ExternalLinksCard:NextPage = ()=>{

    const list:ExternalLink[] = [
        {
            name: "芝浦工業大学 HP", url: "https://www.shibaura-it.ac.jp/"
        },{
            name: "数理科学研究会 HP", url: "http://sitmathclub.web.fc2.com/"
        },{
            name: "DEN3 部室記録", url: "https://ambidata.io/ch/channel.html?id=7710"
        }
    ]

    return <div style={{backgroundColor:"#fdfdfd",padding:10}}>
        <div style={{width:"100%",textAlign:"center"}}>
            <div style={{fontSize:"14px",fontWeight:"bold"}}>外部リンク</div>
        </div>
        <VStack>
            {
                list.map((e,i)=>{
                    return <div key={"external-"+i} style={{cursor:"pointer",textAlign:"center"}}>
                        <Link href={e.url}>
                            <a>
                                <div>
                                    <div style={{margin:10,fontSize:"15px"}}>
                                        {e.name}
                                    </div>
                                    <Divider/>
                                </div>
                            </a>
                        </Link>
                    </div>
                })
            }
        </VStack>
    </div>
}

export default ExternalLinksCard