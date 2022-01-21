import {NextPage} from "next";
import {Box, Flex, Heading, Spacer, VStack} from "@chakra-ui/layout";
import {Button, IconButton} from "@chakra-ui/button";
import {ChevronLeftIcon, EditIcon, ViewIcon} from "@chakra-ui/icons";
import {Skeleton} from "@chakra-ui/skeleton";
import ResizeTextArea from "../../component/ResizeTextArea";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import StyledMarkdown from "../../component/StyledMarkdown";
import InternalPage from "../../component/page/InternalPage";
import Editor from "../../component/Editor";

const EditorPage:NextPage = ()=>{
    return <Editor/>
}

export default EditorPage
