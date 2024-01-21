import { Progress } from '@/components/ui/progress'
import React from 'react'

export default function ProgressBar() {
  return (
    <div className='flex justify-center mt-14'>
        <Progress value={50} className='w-[80%] border' indicatorColor='bg-white' />
    </div>
  )
}
