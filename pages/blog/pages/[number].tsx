import {GetServerSideProps, NextPage} from "next";
import ExternalPage from "../../../component/page/ExternalPage";
import {SampleBlogList} from "../../../const/Sample";
import {BlogListEntity} from "../../../model/BlogListPage";
import {useRouter} from "next/router";
import {Box, Center, Container, Heading} from "@chakra-ui/layout";
import {Pagination} from "../../../component/Pagination";
import BlogListItem from "../../../component/BlogListItem";
import {SimpleGrid} from "@chakra-ui/react";
import React from "react";
import BlogList from "../../../component/BlogList";

interface Props{
    list:BlogListEntity[]
}

export const getServerSideProps:GetServerSideProps<Props> = async ()=>{

    return {
        props:{
            list: SampleBlogList
        }
    }
}

const BlogAllListPage:NextPage<Props> = (props)=>{
    return <BlogList list={props.list}/>
}

export default BlogAllListPage
