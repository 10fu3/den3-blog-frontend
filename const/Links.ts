export const STATIC_API_HOST = 'https://den-3.github.io/den3-blog-static/api/v1/';

export const API_HOST = '';

export interface BlogPageLink {
    url:string,
    tag:string,

}

export const Links:BlogPageLink[] = [{
    url:"/",
    tag:"HOME",
},{
    url:"/activity_content",
    tag:"活動内容",
},{
    url:"/blog/pages/1",
    tag:"活動ブログ",
},
    {
    url:"/link",
    tag:"おすすめリンク",
},{
    url:"/admin",
    tag:"部員ページ"
}]
