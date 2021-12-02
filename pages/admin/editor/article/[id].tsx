import {NextPage} from "next";
import {useRouter} from "next/router";
import Editor from "../../../../component/Editor";

const ExistBlogEditorPage:NextPage = ()=>{
    const id = String(useRouter().query['id'])
    return <Editor id={id}/>
}

export default ExistBlogEditorPage