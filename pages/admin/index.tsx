import {NextPage} from "next";
import {Box, HStack, Spacer, Text, VStack} from "@chakra-ui/layout";
import InternalPage from "../component/page/InternalPage";
import {Button} from "@chakra-ui/button";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Image,
    Tooltip
} from "@chakra-ui/react";
import Link from "next/link"
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {ArticleEditorItem} from "../../model/ArticleInfo";
import {SampleArticleEditorItems} from "../../const/Sample";
import {DeleteIcon, EditIcon, LockIcon, UnlockIcon} from "@chakra-ui/icons";
import {FocusableElement} from "@chakra-ui/utils";

const LinkButton:React.FC<{color:string,link:string,mr?:boolean,ml?:boolean,explain:string,onClick?:()=>void}> = (props)=>{


    return <Tooltip hasArrow label={props.explain} placement='top'>
    <Box mr={props.mr ? 1 : 0} ml={props.ml?"auto":""}>
        {
            props.link.length > 0 ? <Link href={props.link}>
                <a>
                    <HStack>
                        <Button w={"full"} onClick={props.onClick} colorScheme={props.color}>
                            {props.children}
                        </Button>
                    </HStack>
                </a>
            </Link> : <HStack>
                <Button w={"full"} onClick={props.onClick} colorScheme={props.color}>
                    {props.children}
                </Button>
            </HStack>
        }
    </Box>
    </Tooltip>
}

const DeleteAlertDialog:React.FC<{isOpen:boolean,setIsOpen:Dispatch<SetStateAction<boolean>>,onDelete:()=>void}> = (props) => {
    const onClose = () => {
        props.setIsOpen(false)
    }

    const cancelRef = React.useRef<FocusableElement | null>(null)

    return (
        <>
            <AlertDialog
                isOpen={props.isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            確認
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            本当に記事を削除しますか? 取り消しはできません
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button onClick={onClose}>
                                キャンセル
                            </Button>
                            <Button colorScheme='red' onClick={props.onDelete} ml={3}>
                                削除
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

const ArticleListItem:React.FC<ArticleEditorItem> = (props)=>{

    const [isOpen, setIsOpen] = React.useState(false)

    const handleVisible = ()=>{

    }

    const handleDelete = (num:string)=>{

    }

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
                    <LinkButton color={"green"} link={"/admin/editor/article/"+props.id} explain={"編集する"}>
                        <EditIcon/>
                    </LinkButton>
                    <LinkButton onClick={handleVisible} color={"purple"} link={""} explain={(props.public ? "非" : "")+"公開にする"}>
                        {
                            props.public ? <LockIcon/> : <UnlockIcon/>
                        }
                    </LinkButton>
                    <LinkButton onClick={()=>{setIsOpen(true)}} color={"red"} link={""} explain={"削除する"}>
                        <DeleteIcon/>
                    </LinkButton>
                    <DeleteAlertDialog isOpen={isOpen} setIsOpen={setIsOpen} onDelete={()=>{handleDelete(props.id)}}/>
                </VStack>
            </HStack>
            <Box pt={5} display={{base:"flex",md:"none"}}>
                <Box pt={1} display={{base:"flex",md:"none"}} alignContent="space-between" w={"full"}>
                    <LinkButton mr color={"green"} link={""} explain={"編集する"}>
                        <EditIcon/>
                    </LinkButton>
                    <LinkButton onClick={handleVisible} mr color={"purple"} link={""} explain={(props.public ? "非" : "")+"公開にする"}>
                        {
                            props.public ? <LockIcon/> : <UnlockIcon/>
                        }
                    </LinkButton>
                    <LinkButton onClick={()=>{setIsOpen(true)}} ml color={"red"} link={""} explain={"削除する"}>
                        <DeleteIcon/>
                    </LinkButton>
                </Box>
            </Box>
        </Box>
    </Box>
}

const AdminTopPage:NextPage = ()=>{

    const [data,setDate] = useState(SampleArticleEditorItems)

    useEffect(()=>{

    })

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
            <Text fontSize="4xl" pt={"30px"} pb={"30px"}>
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
