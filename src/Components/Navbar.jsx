import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full h-12 bg-slate-900 flex items-center justify-around'>
            <div className='h-full flex items-center '>
                <span className='text-4xl font-bold text-green-500 pb-1'>&lt;&nbsp;</span>
                <span className='text-2xl text-white font-bold'>Pass</span>
                <span className='text-2xl font-bold text-green-500'>MG</span>
                <span className='text-4xl font-bold text-green-500 pb-1'>&nbsp;&#47;&gt;</span>
            </div>
            <div className='h-full'>
                <lord-icon
                    src="https://cdn.lordicon.com/hhclilyr.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{width:"50px", height:"50px"}}>

                </lord-icon>
            </div>
        </nav>
    )
}

export default Navbar
