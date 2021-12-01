import {BlogAuthor, BlogTopics} from "./BlogContentEntity";

export interface BlogListEntity{
    thumbnail:string,
    title:string,
    date:string,
    id:string,
    author?:BlogAuthor,
    topics:BlogTopics[],
}
