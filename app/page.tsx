'use client';
import { Suspense } from 'react'
import React from 'react'
import Home from './home/page'
const page = () => {
  return (
    <div>
       <Suspense>
        <Home />
      </Suspense>
    </div>
  )
}

export default page
