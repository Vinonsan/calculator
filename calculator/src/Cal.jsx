import React from 'react'

function Cal() {
  return (
    <>
       <div className='w-full h-screen bg-red-900 flex justify-center items-center'>
        <div className=' bg-[#171314] inset-shadow-sm inset-shadow-zinc-500'>

          <div className='w-full p-12 bg-[#171314] inset-shadow-sm inset-shadow-zinc-500'>
            <input type="text" />
          </div>

          <div className='grid p-4 grid-cols-4 gap-6'>

            <div className='bg-[#171314] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1'>C</div>
            <div className='bg-[#171314] p-6 inset-shadow-sm  rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1'>-</div>
            <div className='bg-[#171314] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1'>/</div>
            <div className='bg-[#171314] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1'>cl</div>

            <div className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>7</div>
<div className='bg-[#bf0000] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>8</div>
<div className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>6</div>
<div className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>*</div>

            
            <div className='bg-[#bf0000] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>4</div>
<div className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>5</div>
<div className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>6</div>
<div className='bg-[#bf0000] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>+</div>


            <div className='bg-[#bf0000]  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>1</div>
<div className='bg-[#bf0000] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>2</div>
<div className='bg-[#bf0000] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>3</div>
<div className='bg-[#bf0000] p-6 row-span-2 inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>=</div>


            <div className='bg-[#bf0000] col-span-2 p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>0</div>
            <div className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1'>.</div>
            
          </div>
          </div>
          
       </div>
    </>
  )
}

export default Cal