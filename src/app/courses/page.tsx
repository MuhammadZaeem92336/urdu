'use client'
import { ThreeDCardDemo1 } from '@/components/Card1'
import { ThreeDCardDemo2 } from '@/components/Card2'
import { ThreeDCardDemo3 } from '@/components/Card3'
import { ThreeDCardDemo4 } from '@/components/Card4'
import { ThreeDCardDemo5 } from '@/components/Card5'
import { ThreeDCardDemo } from '@/components/CardEffect'
import React from 'react'

const page = () => {
  return (
    <div className='bg-slate-1'>
    <div>
      <h1 className='text-white text-5xl font-bold text-center pt-40'>All Courses (6)</h1>
      <ThreeDCardDemo/>
      <ThreeDCardDemo1/>
      <ThreeDCardDemo2/>
      <ThreeDCardDemo3/>
      <ThreeDCardDemo4/>
      <ThreeDCardDemo5/>
    </div>
    </div>
  )
}

export default page
