import React, { useState } from 'react'
import { Link } from 'react-router-dom';

let EmptyCheckBox = ()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-square fill-white" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
</svg>
)

let CheckBox = ()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-square bg-white hover:bg-neutral-300" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg>
)

function Signin() {
  let [checkBox, setCheckBox] = useState(true);

  function checkBoxHandler() {
    setCheckBox((prev)=>!prev)
  }

  return (
    <div>
      
      <div className="w-[100%] h-[100vh] overflow-hidden">
        <img className='w-[100%] h-[100vh] scale-100' src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg" alt="" />
        <div className="absolute inset-0 h-screen bg-black/20 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>
      <div className="w-full absolute top-0 left-0 flex items-center justify-between px-4 py-2">
        <Link to="/"><img className='w-48 ml-28' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" /></Link>
      </div>

      <div className="w-[450px] h-[738px] py-12 px-16 absolute top-24 left-1/2 -translate-x-1/2 bg-black/80">
        <p className='text-white text-3xl font-bold mb-7'>Sign In</p>
        <input type="text" placeholder='Email or mobile number' className='px-3 py-4 w-full border border-gray-300 bg-transparent rounded-sm text-white' />
        <input type="text" placeholder='password' className='px-3 py-4 w-full mt-4 border border-gray-300 bg-transparent rounded-sm text-white' />
        <Link to="/home"><button className='w-full p-2 text-white bg-[rgb(229,9,20)] hover:bg-red-700 font-semibold mt-4 rounded-sm'>Sign In</button></Link>
        <p className='text-center text-[rgba(255,255,255,0.7)] mt-4'>OR</p>
        <button className='w-full p-2 text-white bg-[rgba(128,128,128,0.23)] hover:bg-[rgba(128,128,128,0.32)] font-semibold mt-4 rounded-sm'>Use a sign-in code</button>
        <p className='mt-4 text-white text-center'>Forget password?</p>
        <div className="flex gap-3 mt-4 items-center">
          <div onClick={checkBoxHandler}>{checkBox ? <EmptyCheckBox/> : < CheckBox/>}</div>
          <p className='text-white'>Remember me</p>
        </div>
        <p className='mt-4 text-[rgba(255,255,255,0.7)]'>New to Netflix? <span className='text-white font-medium'>Sign up now.</span></p>
        <p className='text-[#8c8c8c] mt-4 text-[13px]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-600 hover:underline cursor-pointer'>Learn more.</span></p>
      </div>

      <div className="ml-28 mr-28 px-8  mt-[380px] mb-20">
        <p className='text-[#afafaf]'>Questions? Call <span className='text-[#afafaf] hover:underline underline-offset-2 cursor-pointer'>000-800-919-1743</span></p>
        <div className="flex mt-5 gap-28 text-[#afafaf]">
          <p className='underline underline-offset-2 cursor-pointer w-56'>FAQ</p>
          <p className='underline underline-offset-2 cursor-pointer w-56'>Help Center</p>
          <p className='underline underline-offset-2 cursor-pointer w-56'>Terms of use</p>
          <p className='underline underline-offset-2 cursor-pointer w-56'>Privacy</p>
        </div>
        <div className="flex mt-8 gap-28 text-[#afafaf]">
          <p className='underline underline-offset-2 cursor-pointer w-44'>Cookie Preferences</p>
          <p className='underline underline-offset-2 cursor-pointer w-44'>Corporate Information</p>
        </div>

      <div className="mt-10">
        <p className='w-32 text-white flex items-center gap-2 border border-white px-3 py-1 bg-transparent rounded-sm'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-hidden="true" data-icon="LanguagesSmall"><path fill="currentColor" fill-rule="evenodd" d="m10.767 5.333-.263.664L9.34 8.935l-.571 1.442L7.333 14h1.775l.727-1.967h3.587l.74 1.967H16l-3.434-8.667h-1.799m-.148 4.602-.235.628h2.502l-1.251-3.35zM9.527 4.842q.04-.101.095-.192H6.42V2H4.926v2.65H.541v1.347h3.774C3.35 7.79 1.752 9.515 0 10.428c.33.286.811.811 1.046 1.165 1.505-.913 2.857-2.364 3.88-4.02v5.094h1.493v-5.15c.4.636.848 1.245 1.333 1.806L8.32 7.89a11.5 11.5 0 0 1-1.337-1.893H9.07z" clip-rule="evenodd"/></svg></span>English <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-hidden="true" data-icon="CaretDownSmall"><path fill="currentColor" fill-rule="evenodd" d="M11.598 6.5c.148 0 .222.18.117.285l-3.48 3.48a.333.333 0 0 1-.47 0l-3.48-3.48a.167.167 0 0 1 .117-.285z" clip-rule="evenodd"/></svg></span></p>
      </div>

      </div>

    </div>
  )
}

export default Signin
