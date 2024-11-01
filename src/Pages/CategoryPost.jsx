import { DummyPost } from "../data/data"
// useState
import { useState } from "react"
import PostItem from "../components/PostItem"


export default  function CategoryPost() {
  const [posts , setPosts]= useState(DummyPost)
  return (
    
    <section className="authorPosts">
    <h1 className="page-title">Category Post </h1>
    { posts.length> 0 ? <div className="container authorPosts-container">
      {
       posts.map(({ Id, Image, authorId, category, title, des }, index)=> 
       <PostItem key={index} Image={Image} category={category} authorId={authorId} 
       title={title} des={des} postId={Id}/>)}
        </div> : <h2 className="error-center">No posts founds </h2>} 
        </section>
  )
}

