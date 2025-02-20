import React from 'react'

const Heading = () => {
    return (
        <div className='h-[150px] w-full flex items-center justify-center '>
            <span className='sm:text-6xl text-4xl font-bold text-green-500 pb-1'>&lt;&nbsp;</span>
            <span className='sm:text-4xl text-2xl text-slate-900 font-bold'>Password&nbsp;</span>
            <span className='sm:text-4xl text-2xl font-bold text-green-500'>Manager</span>
            <span className='sm:text-6xl text-4xl font-bold text-green-500 pb-1'>&nbsp;&#47;&gt;</span>
        </div>
    )
}

export default Heading
