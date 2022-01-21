import {GetStaticProps, NextPage} from "next";
import ExternalPage from "./component/page/ExternalPage";
import NormalMarkdownPage from "./component/page/NormalMarkdownPage";
import {STATIC_API_HOST} from "../const/Links";
import StaticContentPage from "./component/StaticContentPage";

export const getStaticProps: GetStaticProps<{markdown:string|undefined,status:'error'|'success',message:string|null}> = async (context) => {

    const res = await fetch(STATIC_API_HOST+'information.json')

    if(res.status !== 200){
        return {
            props: {
                markdown:undefined,
                status:'error',
                message:'information_not_found'
            }
        }
    }else{
        const url:{description:undefined} = await res.json()

        const description = await fetch(STATIC_API_HOST+url.description)

        if(description.status !== 200){
            return {
                props: {
                    markdown:undefined,
                    status:'error',
                    message:'body_not_found'
                }
            }
        }else{

            return {
                props: {
                    markdown:await description.text(),
                    status:'success',
                    message:null
                }
            }
        }
    }
};

const ActivityContent:NextPage<{markdown:string|undefined,status:'error'|'success',message:string|undefined}> = (props)=>{
    return props.markdown ? <StaticContentPage markdown={props.markdown} title={"活動紹介"}/> : <></>
}

export default ActivityContent
