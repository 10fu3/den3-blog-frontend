import React from "react";
import ExternalPage from "./page/ExternalPage";
import NormalMarkdownPage from "./page/NormalMarkdownPage";

const StaticContentPage:React.FC<{markdown:string,title:string}> = (props)=>{
    return <ExternalPage>
        <NormalMarkdownPage
            markdown={props.markdown}
            title={props.title}
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
                        avatar: "https://zncdn.dev/images/topic.png",
                        id: "circle_intro",
                        name: "サークル紹介"
                    }
                ]
            }
            id={''}/>
    </ExternalPage>
}

export default StaticContentPage
