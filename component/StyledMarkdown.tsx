import {ReactMarkdown} from "react-markdown/lib/react-markdown";
import {NextPage} from "next";
import remarkGfm from "remark-gfm";
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkToc from "remark-toc";
import 'katex/dist/katex.min.css'

import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import Link from "next/link";
import {Divider} from "@chakra-ui/layout";
import {CIRCLE_COLOR} from "../const/const";

const StyledMarkdown:NextPage<{markdown:string}> = (props)=>{

    return <div style={{fontFamily:"\"Avenir-Roman\",\"Arial\",\"游ゴシック体\",YuGothic,\"游ゴシック Medium\",\"Yu Gothic Medium\",\"游ゴシック\",\"Yu Gothic\",sans-serif"}}><ReactMarkdown
        components={{
            // Map `h1` (`# heading`) to use `h2`s.
            h1: ({node, ...props}) => <div><h1 style={{fontSize:"1.7em",color:"#353535",padding:".25em .5em",marginTop:54,marginBottom:17,borderLeft:"4px solid "+CIRCLE_COLOR,wordBreak:"break-all"}}>{props.children}</h1><Divider/></div>,

            h2: ({node, ...props}) => <div><h1 style={{fontSize:"1.7em",color:"#353535",padding:".25em .5em",marginTop:54,marginBottom:17,borderLeft:"4px solid "+CIRCLE_COLOR,wordBreak:"break-all"}}>{props.children}</h1><Divider/></div>,

            p: ({node, ...props}) => <div>
                <p style={{color:"#111",fontSize:"18px",lineHeight:2,marginTop:24,wordBreak:"break-all",fontFamily:"\"Avenir-Roman\",\"Arial\",\"游ゴシック体\",YuGothic,\"游ゴシック Medium\",\"Yu Gothic Medium\",\"游ゴシック\",\"Yu Gothic\",sans-serif\""}}>
                    {props.children}
                </p>
            </div>,
            img: ({node, ...props}) => <img src={props.src} style={{maxWidth:"100%",height:"auto"}}>
                {props.children}
            </img>,
            a: ({node, ...props}) => <Link href={props.href ? props.href : ''}>
                <a style={{textDecoration:"underline",color:"rgb(51,136,255)",wordBreak:"break-all"}}>
                    {props.children}
                </a>
            </Link>,
            li: ({node, ...props}) => <li style={{color:"#333",fontWeight:"bold",wordBreak:"break-all"}}>
                {props.children}
            </li>,
            table: ({node, ...props}) => <table style={{width:"100%",marginTop:54,borderCollapse:"collapse",wordBreak:"break-all"}}>
                {props.children}
            </table>,
            thead: ({node, ...props}) => <thead style={{wordBreak:"break-all"}}>
                {props.children}
            </thead>,
            th: ({node, ...props}) => <th style={{backgroundColor:"#93cbe2",border:"solid 1px #d0d0d0",padding:3,color:"#2c2c2c",wordBreak:"break-all"}}>
                {props.children}
            </th>,
            td: ({node, ...props}) => <td style={{backgroundColor:"white",border:"solid 1px #d0d0d0",textAlign:"center",padding:6,color:"#2c2c2c",wordBreak:"break-all"}}>
                {props.children}
            </td>,
            blockquote: ({node, ...props}) => <blockquote>
                <p style={{paddingLeft:10,borderLeft:"4px solid rgb(210,210,210)"}}>
                    {props.children}
                </p>
            </blockquote>,
            code: function({node, inline, className, children, ...props1}) {
            const match = /language-(\w+)/.exec(className || '');
            const lang:string = match && match[1] ? match[1] : '';
            return !inline && match ? (
                <SyntaxHighlighter style={tomorrow} language={lang} PreTag="div" wrapLines={true} showLineNumbers={true}>
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            )
            }
        }}
        remarkPlugins={[remarkGfm,remarkMath,remarkToc]}
        rehypePlugins={[rehypeKatex]}
    >
        {props.markdown}
    </ReactMarkdown></div>
}

export default StyledMarkdown

