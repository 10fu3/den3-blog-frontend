import React from "react";
import {useRouter} from "next/router";
import ExternalPage from "./page/ExternalPage";
import {Box, Center, HStack, Text} from "@chakra-ui/layout";
import {SimpleGrid} from "@chakra-ui/react";
import BlogListItem from "./BlogListItem";
import {BlogListEntity} from "../../model/BlogListPage";
import {BlogTopics} from "../../model/BlogContentEntity";
import {Avatar} from "@chakra-ui/avatar";
import Pagination from "./Pagination";

const range = (start:number, end:number) => [...Array((end - start + 1) >= 0 ? end - start + 1 : 0)].map((_, i) => start + i)

const BlogList:React.FC<{topic?:BlogTopics,list:BlogListEntity[]}> = (props)=>{
    const PER_PAGE = 12

    if (useRouter().isFallback) {
        return <div>Loading...</div>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const number = Number(useRouter().query['number'])

    const data = range((number-1)*PER_PAGE,((number)*PER_PAGE)-1).map(i=>props.list[i])

    return <ExternalPage>
        <Center style={{backgroundColor:"#f3f3f3",width:"100%",padding:"60px 40px"}}>
            <div style={{width:"100%",maxWidth:"1120px",letterSpacing:0.2}}>
                <Box>
                    {
                        props.topic ?
                            <HStack>
                                <Avatar w={"100px"} h={"100px"} src={props.topic?.avatar} />
                                <Text fontSize="3xl">
                                    {props.topic.name+"の記事一覧"}
                                </Text>
                            </HStack> :
                            <Text fontSize="3xl">
                                ブログ一覧
                            </Text>
                    }
                </Box>
                <Box pt={"60px"}>
                    <SimpleGrid spacing={['30px','30px','50px','90px']} columns={[1,1,2,3]}>
                        {
                            data.map((e,i)=>{
                                return e ? <BlogListItem key={'list-'+i} {...e}/> : <></>
                            })
                        }
                    </SimpleGrid>
                </Box>
                <Center mt={20} mb={5}>
                    <Pagination totalCount={props.list.length} currentNum={number} perPage={PER_PAGE} baseLink={'./pages/'}/>
                </Center>
            </div>
        </Center>
    </ExternalPage>
}

export default BlogList
