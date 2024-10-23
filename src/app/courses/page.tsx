'use client'

import { GlowingStarsBackgroundCardPreview1 } from '@/components/Card1'
import { GlowingStarsBackgroundCardPreview2 } from '@/components/Card2'
import { GlowingStarsBackgroundCardPreview3 } from '@/components/Card3'
import { GlowingStarsBackgroundCardPreview4 } from '@/components/Card4'
import { GlowingStarsBackgroundCardPreview5 } from '@/components/Card5'
import { GlowingStarsBackgroundCardPreview6 } from '@/components/Card6'
import React from 'react'

const page = () => {
  return (
    <div className='bg-slate-1'>
    <div>
      <GlowingStarsBackgroundCardPreview1/>
      <GlowingStarsBackgroundCardPreview2/>
      <GlowingStarsBackgroundCardPreview3/>
      <GlowingStarsBackgroundCardPreview4/>
      <GlowingStarsBackgroundCardPreview5/>
      <GlowingStarsBackgroundCardPreview6/>
    </div>
    </div>
  )
}

export default page
