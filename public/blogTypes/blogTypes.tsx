import AddBlogList from "@/app/Blog_Component/AddBlogList/addBlogList"

export type blogType = {
    id : string ,
    title : string ,
    content : string ,
    description : string
}
export type blogModalType = {
   isOpen : boolean ,
   onAddBlogs : (blog: blogType) => void,
   onCloseBlogs : () => void,
   onUpdateBlog : (blog : blogType) => void
   blog: blogType

}
export type BlogDisplayType = {
    blogs : blogType[] ,
    blog : blogType ,
   
}
