'use client'
import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebinars'
import HeroSection from '@/components/HeroSection'
import { StickyScrollRevealDemo } from '@/components/ui/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] bg-grid-white/[0.07] size-full'>
      <HeroSection/>
      <FeaturedCourses/>
      <StickyScrollRevealDemo/>
      <FeaturedWebinars/>
    </main>
  )
}

export default page
