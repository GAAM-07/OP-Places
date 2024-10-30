import { DummyPost } from "../data/data"
// useState
import { useState } from "react"
// componet
import PostItem from "./PostItem"

export default function Posts() {

  const [posts , setPosts]= useState(DummyPost)
  return (
     <section className="posts">{
        posts.map(({ Id, Image, authorId, category, title, des }, index)=> 
        <PostItem key={index} Image={Image} category={category} authorId={authorId} 
        title={title} des={des} postId={Id}
        />)

        }

    </section>
    
  )
}

 