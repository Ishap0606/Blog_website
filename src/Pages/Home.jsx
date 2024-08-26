import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import sketchers from '../assets/sketchers.jpg'
import puma from '../assets/puma.jpg'
import nike from '../assets/nike.jpg'
import BlogCard from '../Components/BlogCard'

function Home() {

  const [blogs]=useState([
    {id:1, 
      imageUrl:sketchers,
      title:"Sketchers",
      paragraph:"Generally, Skechers products are comfortable and supportive.Memory foam soles provide cushioning for the foot. They're also breathable and flexible."},

      {id:2,
      imageUrl:puma,
      title:"Puma",
      paragraph:"Puma SE is a German multinational corporation who design and manufacture athletic and casual footwear, apparel, and accessories, headquartered in Herzogenaurach, Bavaria, Germany. Puma is the third largest sportswear manufacturer in the world."},

      {id:3,
        imageUrl:nike,
        title:"Nike",
        paragraph:"Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022."}
  ])
  return (
    <div>
      
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      {blogs.map(blog=>(
        <BlogCard
          imageUrl={blog.imageUrl}
          title={blog.title}
          paragraph={blog.paragraph}
          id={blog.id}
          key={blog.id}/>
      ))}
    </div>
  )
}

export default Home
