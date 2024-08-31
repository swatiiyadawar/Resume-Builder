import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function SignInPage() {
  return (
    <div  className='flex justify-center my-20 itmes-center' > 
      <SignIn/>
    </div>
  )
}

export default SignInPage 