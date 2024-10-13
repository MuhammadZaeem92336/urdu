'use client'
import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'

import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] bg-grid-white/[0.07] size-full'>
      <HeroSection/>
      <FeaturedCourses/>
      
    </main>
  )
}

export default page
