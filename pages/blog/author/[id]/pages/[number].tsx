import {BlogListEntity} from "../../../../../model/BlogListPage";
import {GetServerSideProps, NextPage} from "next";
import {SampleBlogList} from "../../../../../const/Sample";
import BlogList from "../../../../../component/BlogList";
import React from "react";

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

const BlogAuthorPage:NextPage<Props> = (props)=>{
    return <BlogList list={props.list}  topic={
        {
            avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
            id: "9b458210-c9a3-4f5b-bb4e-baafc3e77569",
            name: "うぇいる"
        }
    }/>
}

export default BlogAuthorPage
