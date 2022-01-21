import {BlogAuthor} from "../../model/BlogContentEntity";
import {Box, HStack} from "@chakra-ui/layout";
import Link from "next/link";
import {GITHUB_ICON, TWITTER_ICON} from "../../const/Icon";
import ListItem from "./List";

const AuthorCard:React.FC<{author:BlogAuthor}> = (props)=>{
    return <div style={{backgroundColor:"white",width:"100%",borderRadius:12,padding:20,boxShadow:"0 2px 4px #4385bb12"}}>
        <ListItem body={props.author.bio} {...props.author}/>
        <HStack justifyContent="space-around" style={{width:"100%",marginTop:20}}>
            {
                props.author.github ? <Box style={{width:32,height:"auto"}}>
                    <Link href={props.author.github}>
                        <a>
                            {GITHUB_ICON}
                        </a>
                    </Link>
                </Box> : <></>
            }
            {
                props.author.twitter ? <Box item style={{width:32,height:"auto",color:"#14a4af"}}>
                    <Link href={props.author.twitter}>
                        <a>
                            {TWITTER_ICON}
                        </a>
                    </Link>
                </Box> : <></>
            }
        </HStack>
    </div>
}

export default AuthorCard
