import {NextPage} from "next";
import {Box, Divider, HStack, Spacer, Text, VStack} from "@chakra-ui/layout";
import InternalPage from "../../component/page/InternalPage";
import {Button} from "@chakra-ui/button";
import {Image} from "@chakra-ui/react";
import Link from "next/link"
import React from "react";
import {ArticleEditorItem} from "../../model/ArticleInfo";
import {SampleArticleEditorItems} from "../../const/Sample";

const LinkButton:React.FC<{color:string,link:string,mr?:boolean,ml?:boolean}> = (props)=>{
    return <Box mr={props.mr ? 1 : 0} ml={props.ml?"auto":""}>
        <Link href={props.link}>
            <a>
                <HStack>
                    <Button w={"full"} colorScheme={props.color}>
                        {props.children}
                    </Button>
                </HStack>
            </a>
        </Link>
    </Box>
}

const ArticleListItem:React.FC<ArticleEditorItem> = (props)=>{
    return <Box p={1}  justifyContent="center">
        <Box p={5} borderRadius={5} boxShadow="0 1px 1px 1px #000a3c33">
            <HStack>
                <Image
                    src={props.avatar}
                    height={"100px"}
                    width={"auto"}
                    objectFit={"cover"}
                    maxWidth={"100px"}
                />
                <Text fontSize="2xl" p={5}>
                    {props.title}
                </Text>
                <Spacer/>
                <VStack  display={{base:"none",md:"block"}}>
                    <LinkButton color={"green"} link={""}>
                        編集する
                    </LinkButton>
                    <LinkButton color={"purple"} link={""}>
                        非公開にする
                    </LinkButton>
                    <LinkButton color={"red"} link={""}>
                        削除する
                    </LinkButton>
                </VStack>
            </HStack>
            <Box pt={5} display={{base:"flex",md:"none"}}>
                <Box pt={1} display={{base:"flex",md:"none"}} alignContent="space-between" w={"full"}>
                    <LinkButton mr color={"green"} link={""}>
                        編集する
                    </LinkButton>
                    <LinkButton mr color={"purple"} link={""}>
                        非公開にする
                    </LinkButton>
                    <LinkButton ml color={"red"} link={""}>
                        削除する
                    </LinkButton>
                </Box>
            </Box>
        </Box>
    </Box>
}

const AdminTopPage:NextPage = ()=>{

    const data = SampleArticleEditorItems

    return <InternalPage maxW={"1120px"}
                         topbarElement={<Box>
                             <Link href={"/admin/editor"}>
                                 <a>
                                     <Button colorScheme="blue">
                                         記事を投稿する
                                     </Button>
                                 </a>
                             </Link>
                         </Box>}>
        <Box boxShadow="0 3px 6px -2px #000a3c33" borderRadius={12} mt={"70px"} p={10} bg={"white"}>
            <Text fontSize="4xl" p={"30px"}>
                投稿した記事一覧
            </Text>
            {
                data.map((e,i)=>{
                    return <ArticleListItem key={'article-list-item-'+e.title} {...e}/>
                })
            }
        </Box>
    </InternalPage>
}

export default AdminTopPage
