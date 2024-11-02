import { DummyPost } from "../data/data"
// useState
import { useState } from "react"
// componet
import PostItem from "./PostItem"
import Headpost from "./Headpost"

export default function Posts() {

  const [posts , setPosts]= useState(DummyPost)
  
  return (
     <section className="posts">
     <div className="head-post-aria">
      <Headpost/>

      
     </div>
     { posts.length> 0 ? <div className=" posts-container">
       {
        posts.map(({ Id, Image, authorId, category, title, des }, index)=> 
        <PostItem key={index} Image={Image} category={category} authorId={authorId} 
        title={title} des={des} postId={Id}/>)}
         </div> : <h2 className="error-center">No posts founds </h2>} 
         </section>
          )
        }

 