import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import ExternalPage from "../../../component/page/ExternalPage";
import {STATIC_API_HOST} from "../../../const/Links";
import {BlogContentEntity} from "../../../model/BlogContentEntity";
import {SampleBlogArticle} from "../../../const/Sample";
import StaticContentPage from "../../../component/StaticContentPage";
import NormalMarkdownPage from "../../../component/page/NormalMarkdownPage";
import React from "react";

export const getServerSideProps: GetServerSideProps<{e?:BlogContentEntity}> = async (context) => {

    const res = await fetch(STATIC_API_HOST+'information.json')

    if(res.status !== 200){
        return {
            props: {}
        }
    }else{
        const url:{suggest:undefined} = await res.json()

        const description = await fetch(STATIC_API_HOST+url.suggest)

        if(description.status !== 200){
            return {
                props: {}
            }
        }else{

            return {
                props: {
                    e: SampleBlogArticle[Math.floor( Math.random() * SampleBlogArticle.length ) ]
                }
            }
        }
    }
};

const BlogPage:NextPage<{e?:BlogContentEntity}> = (props)=>{


    return <ExternalPage>
        {
            props.e ? <NormalMarkdownPage {...props.e}/> : <></>
        }
    </ExternalPage>
}

export default BlogPage
