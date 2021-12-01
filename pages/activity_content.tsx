import {GetStaticProps, NextPage} from "next";
import ExternalPage from "../component/ExternalPage";
import NormalMarkdownPage from "../component/page/NormalMarkdownPage";
import {STATIC_API_HOST} from "../const/Links";

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
    return props.markdown ? <ExternalPage>
        <NormalMarkdownPage
            markdown={props.markdown}
            title={'活動内容'}
            author={
                {
                    avatar: "https://pbs.twimg.com/profile_images/1222821269462142976/kXOsMek1_normal.jpg",
                    bio: "コンピューターをテーマに様々なことに取り組んでいます",
                    name: "電子計算機研究会",
                    twitter: 'https://twitter.com/sit_densan',
                    github: 'https://github.com/Den-3',
                    id: ''
                }
            }
            comment={[]}
            topics={
                [
                    {
                        avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                        id: "atcoder",
                        name: "AtCoder"
                    },
                    {
                        avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                        id: "atcoder",
                        name: "AtCoder"
                    },
                    {
                        avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                        id: "atcoder",
                        name: "AtCoder"
                    }
                ]
            }/>
    </ExternalPage> : <></>
}

export default ActivityContent