import React from 'react'

export default function page() {
    return (
        <div className='buy p-4 w-full mx-auto px-8 max-w-md '>
            <form action="" className=" backdrop-blur-xl  rounded-xl p-4  shadow-md">
                <label htmlFor="" className='text-white text-xs '>Jumlah</label>
                <input type="text" className='w-full outline-2 outline-white/40 my-2 focus:outline-white rounded-md px-4 py-2' />
                <label htmlFor="" className='text-white text-xs'>Harga</label>
                <input type="text" className='w-full outline-2 outline-white/40 my-2 focus:outline-white rounded-md px-4 py-2' />
                <button className='w-full p-2 rounded-md  bg-white text-gray-400 outline-white/40 mt-4 hover:shadow-lg cursor-pointer '>Buy</button>
            </form>
        </div>
    )
}
