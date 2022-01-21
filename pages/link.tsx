import {GetStaticProps, NextPage} from "next";
import ExternalPage from "./component/page/ExternalPage";
import {STATIC_API_HOST} from "../const/Links";
import StaticContentPage from "./component/StaticContentPage";

interface Props {
    markdown:string|undefined
    status:'error'|'success',message:string|null
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {

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
        const url:{suggest:undefined} = await res.json()

        const description = await fetch(STATIC_API_HOST+url.suggest)

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

const LinksPage:NextPage<Props> = (props)=>{
    return props.markdown ? <StaticContentPage markdown={props.markdown} title={'おすすめリンク'}/> : <></>
}

export default LinksPage
