import React from 'react'

type SectionHeadingProps =  {
    heading: string
}
const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return (
    <div className='w-[80%] mx-auto'>
        <h1 className='text-2xl lg:text-3xl font-bold text-white'>{heading}</h1>
        <p 
            className='text-sm sm:text-base md:text-lg font-medium mt-2 text-gray-200'
        >Discover stunning image generation tools, explore AI-powered features, and stay updated with the latest innovations in creative technology.</p>
    </div>
  )
}

export default SectionHeading