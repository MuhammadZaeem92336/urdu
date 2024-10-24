'use client'
import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebinars'
import HeroSection from '@/components/HeroSection'
import { InfiniteMovingCardsDemo } from '@/components/Infinite'
import { AnimatedTooltipPreview } from '@/components/Tooltip'
import { StickyScrollRevealDemo } from '@/components/ui/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] bg-grid-white/[0.07] size-full'>
      <HeroSection/>
      <FeaturedCourses/>
      <StickyScrollRevealDemo/>
      <InfiniteMovingCardsDemo/>
      <FeaturedWebinars/>
      <div>
        <h1 className='text-center text-white text-5xl font-black hover:underline hover:cursor-pointer '>Our Team</h1>
      <AnimatedTooltipPreview/>
      </div>
    </main>
  )
}

export default page