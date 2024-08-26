import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import { useParams } from 'react-router-dom'

function BlogPostpage() {
   const blogData=[
    {id:1, title:"Sketchers", content:"Generally, Skechers products are comfortable and supportive. Memory foam soles provide cushioning for the foot. They're also breathable and flexible."},
    {id:2,title:"Puma",content:"Puma SE is a German multinational corporation who design and manufacture athletic and casual footwear, apparel, and accessories, headquartered in Herzogenaurach, Bavaria, Germany. Puma is the third largest sportswear manufacturer in the world."},
    {id:3,title:"Nike",content:"Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022."}
     ]

     const{id}=useParams();
     const blogPost=blogData.find(blog=> blog.id===parseInt(id))

     if(!blogPost) return <h2>Page Not Found</h2>

  return (
    <div>
       <Navbar></Navbar>
       <h1>Blog Post{id}</h1>
       <h1>{blogPost.title}</h1>
       <p>{blogPost.content}</p>
      
    </div>
  )
}

export default BlogPostpage
