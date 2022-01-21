import {GetServerSideProps, NextPage} from "next";
import {SampleBlogList} from "../../../const/Sample";
import {BlogListEntity} from "../../../model/BlogListPage";
import React from "react";
import BlogList from "../../component/BlogList";

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
