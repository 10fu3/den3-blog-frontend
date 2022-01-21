import {GetServerSideProps, NextPage} from "next";
import ExternalPage from "../../../../component/page/ExternalPage";
import {BlogListEntity} from "../../../../../model/BlogListPage";
import {SampleBlogList} from "../../../../../const/Sample";
import BlogList from "../../../../component/BlogList";
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

const TopicBlogPage:NextPage<Props> = (props)=>{

    return <BlogList list={props.list} topic={
        {
            avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
            id: "atcoder",
            name: "AtCoder"
        }
    }/>
}

export default TopicBlogPage
