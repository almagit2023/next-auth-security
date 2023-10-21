import React from 'react'
import Link from 'next/link'

export default function RegisterForm() {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-5 border-t-4 border-green-400'>
        <h1 className='text-xl font-bold my-4'>Register</h1>
        <form action="" className='flex flex-col gap-3'>
          <input type="text" name="" id="" placeholder='Fullname' />
          <input type="text" name="" id="" placeholder='Email' />
          <input type="password" name="" id="" placeholder='Password' />
          <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>Login</button>
          <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>Error Message</div>
          <Link href={'/'} className='text-sm-3 text-right'>Don't have an account <span className='underline'>Register</span></Link>
        </form>
      </div>
    </div>
  )
}
