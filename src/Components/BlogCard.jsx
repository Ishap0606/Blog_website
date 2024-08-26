import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({imageUrl,title,paragraph,id}) {
  return (
    <div className='blog-card'>
      <img src={imageUrl}></img>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <Link to={`/blog/${id}`}>Read More</Link> 
      
    </div>
  )
}

export default BlogCard
