import React, { useState } from 'react'
import Link from 'next/link'

export default function RegisterForm() {

  // This is Part should be done Later once the UI is done
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async(e) => {
     e.preventDefault();

     if(!name || !email || !password){
      setError("All fields are necessary")
      return;
     }

     try {
        const res = await fetch('api/register/route', {
          method: "POST",
          headers : {
            "Content-Type": "application/json"
          },
          body:JSON.stringify({
             name, email, password
          })
        })

        if(res.ok){
           const form = e.target;
           form.reset()
        }
        else {
          console.log("User Registration Failed")
        }
     }
     catch(error){
        console.log("Error during registration : ", error)
     }
  }

  // ****************************************************
  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-5 border-t-4 border-green-400'>
        <h1 className='text-xl font-bold my-4'>Register</h1>
        <form action="" className='flex flex-col gap-3' onSubmit={handleSubmit}>

          <input type="text" name="" id="" placeholder='FullName'  onChange={(e)=> setName(e.target.value)}/>
          <input type="text" name="" id="" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="" id="" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

          <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2' type='submit'>Register</button>

          {/* if there is an error it will be displayed */}

          {error && (
            <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>{error}</div>
          )}

          <Link href={'/'} className='text-sm-3 text-right'>Already have an account? <span className='underline'>Login</span></Link>
        </form>
      </div>
    </div>
  )
}
