import React, {useState} from "react";
import {BlogContentComment} from "../../old_frontend/component/blog/BlogContent";
import {Divider, HStack, Spacer, Text, VStack} from "@chakra-ui/layout";
import {ListItem} from "./List";
import {Button} from "@chakra-ui/button";

function calcTextAreaHeight(value:string){
    let rowsNum = value.split('\n').length;
    return rowsNum
}

const CommentBox:React.FC<{comment:BlogContentComment[]}> = (props)=>{

    const [text,setText] = useState('');

    return <div style={{width:"100%",borderRadius:12,backgroundColor:"white",padding:"20px 30px 0px 30px"}}>
        <Text textAlign="center" mb={3} fontSize={'4xl'}>Comments</Text>
        <Divider/>

        {
            props.comment.map((e,i)=>{
                return <div key={i+'-'+Math.random()+'-'+Math.random()}>
                    <ListItem id={e.author.id} name={e.author.name} avatar={e.author.avatar} date={e.date} body={e.body}/>
                    <Divider/>
                </div>
            })
        }

        <div style={{padding:10}}>
            <textarea style={{
                border:"none",
                width:"100%",
                resize:"none",
                minHeight:"168px",
                fontSize:15,
                outline:0
            }}
                placeholder={"ブログにコメントする"}
                onChange={(e)=>{setText(e.target.value)}}
                rows={calcTextAreaHeight(text)}
            />
            <Divider/>
            <HStack>
                <Spacer/>
                <div>
                    <Button mt={4} mb={2} colorScheme="blue">
                        投稿する
                    </Button>
                </div>
            </HStack>
        </div>

    </div>
}

export default CommentBox
