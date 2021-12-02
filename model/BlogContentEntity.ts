export interface BlogAuthor {
    id:string,
    name:string,
    avatar:string,
    bio:string,
    twitter?:string,
    github?:string
}

export interface BlogContentComment {
    author:BlogAuthor,
    body:string,
    date:string
}

export interface BlogTopics {
    avatar: string,
    id: string,
    name: string
}

export interface BlogContentEntity {
    id:string,
    markdown:string,
    title:string,
    header_img?:string,
    author:BlogAuthor,
    comment: BlogContentComment[],
    topics: BlogTopics[],
    canComment?:boolean
}