import React from 'react'
import MainCard from '../components/MainCard'
import trending_movie from '../trending_movies'
import { Link } from 'react-router-dom'
import ContentCard from '../components/ContentCard'
import faqsection from '../faqsection'
import reasons from '../reasons'
import ReasonsCard from '../components/ReasonsCard'


function Hero() {
  return (
    <div>

      <div className="relative w-full h-screen overflow-hidden">
        <img className='absolute inset-0 w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg" alt="Netflix_hero_banner" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="w-full absolute flex justify-between px-4 py-1">
          <img className='w-48 ml-28' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix_logo" />
          <div className="flex items-center gap-4 mr-40 lg:mr-16 md:mr-4 sm:mr-2">
            <p className='text-white flex items-center gap-1 border border-white px-3 py-1 border-opacity-40 rounded-sm'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-hidden="true" data-icon="LanguagesSmall"><path fill="currentColor" fill-rule="evenodd" d="m10.767 5.333-.263.664L9.34 8.935l-.571 1.442L7.333 14h1.775l.727-1.967h3.587l.74 1.967H16l-3.434-8.667h-1.799m-.148 4.602-.235.628h2.502l-1.251-3.35zM9.527 4.842q.04-.101.095-.192H6.42V2H4.926v2.65H.541v1.347h3.774C3.35 7.79 1.752 9.515 0 10.428c.33.286.811.811 1.046 1.165 1.505-.913 2.857-2.364 3.88-4.02v5.094h1.493v-5.15c.4.636.848 1.245 1.333 1.806L8.32 7.89a11.5 11.5 0 0 1-1.337-1.893H9.07z" clip-rule="evenodd"/></svg></span>English <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-hidden="true" data-icon="CaretDownSmall"><path fill="currentColor" fill-rule="evenodd" d="M11.598 6.5c.148 0 .222.18.117.285l-3.48 3.48a.333.333 0 0 1-.47 0l-3.48-3.48a.167.167 0 0 1 .117-.285z" clip-rule="evenodd"/></svg></span></p>
            <Link to="/signin"><button className='bg-red-600 text-white px-3 py-1 rounded-sm hover:bg-red-800 font-semibold'>Sign In</button></Link>
          </div>
        </div>

        <div className="absolute top-48 left-1/2 -translate-x-1/2">
          <h1 className=' w-[640px] text-white font-extrabold text-6xl'>Unlimited movies,TV shows and more</h1>
          <p className='text-white mt-4 text-xl font-semibold text-center'>Starts at ₹149. Cancel at any time.</p>
          <p className='mt-8 text-white text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="flex mt-4 gap-3 flex-col sm:flex-row justify-center item-center">
            <input type="text" placeholder='Email address' className='w-full max-w-sm text-xl px-5 py-4 text-white rounded-sm bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white' />
            <button className='flex items-center px-10 py-4 text-xl gap-4 text-white font-bold bg-red-600 rounded-sm hover:bg-red-700'>Get Started <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" aria-hidden="true" data-icon="ChevronRightStandard"><path fill="currentColor" fill-rule="evenodd" d="m15.586 12-7.293 7.293 1.414 1.414 8-8a1 1 0 0 0 0-1.414l-8-8-1.414 1.414z" clip-rule="evenodd"/></svg></span></button>
          </div>
        </div>
      </div>

      <div className="ml-28 mr-28 mt-10 mb-20">
        <p className='text-white text-2xl font-semibold'>Trending Now</p>
        <div className="flex gap-4 mt-3">
          <button className="text-white flex items-center gap-6 border border-gray-300 px-3 py-2 bg-transparent rounded-sm">India <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-hidden="true" data-icon="CaretDownSmall"><path fill="currentColor" fill-rule="evenodd" d="M11.598 6.5c.148 0 .222.18.117.285l-3.48 3.48a.333.333 0 0 1-.47 0l-3.48-3.48a.167.167 0 0 1 .117-.285z" clip-rule="evenodd"/></svg></span></button>
          <button className="text-white flex items-center gap-6 border border-gray-300 px-3 py-2 bg-transparent rounded-sm">Movies <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-hidden="true" data-icon="CaretDownSmall"><path fill="currentColor" fill-rule="evenodd" d="M11.598 6.5c.148 0 .222.18.117.285l-3.48 3.48a.333.333 0 0 1-.47 0l-3.48-3.48a.167.167 0 0 1 .117-.285z" clip-rule="evenodd"/></svg></span></button>
        </div>
        
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide mt-6">
          {
            trending_movie.map(movie=> <MainCard img={movie.img} title={movie.title}/>)
          }
        </div>

        <div className="mt-10">
          <p className='text-white text-2xl font-semibold'>More reasons to join</p>
          <div className="flex gap-4 mt-4">
            {
              reasons.map((reason,index)=> <ReasonsCard index={index} img={reason.icon} title={reason.title} desc={reason.desc}/>)
            }
          </div>
        </div>

        <div className="mt-10">
          <p className='text-white text-2xl font-semibold'>Frequently Asked Questions</p>
          <div className="mt-4 w-full">
            {
              faqsection.map((faq, index)=> <ContentCard key={index} question={faq.question} answer={faq.answer}/>)
            }
          </div>
        </div>

        <div className="mt-20">
          <p className='mt-8 text-white text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="flex mt-4 gap-3 item-center justify-center">
            <input type="text" placeholder='Email address' className='w-full max-w-xl px-5 py-3 rounded-sm bg-transparent text-white  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white '/>
            <button className='flex items-center px-10 py-3 text-xl gap-4 text-white font-bold bg-red-600 rounded-sm hover:bg-red-700'>Get Started <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" aria-hidden="true" data-icon="ChevronRightStandard"><path fill="currentColor" fill-rule="evenodd" d="m15.586 12-7.293 7.293 1.414 1.414 8-8a1 1 0 0 0 0-1.414l-8-8-1.414 1.414z" clip-rule="evenodd"/></svg></span></button>
          </div>
        </div>

        <div className="mt-10">
          <p className='text-[#afafaf]'>Questions? Call <span className='text-[#afafaf] underline underline-offset-2'>000-800-919-1743</span></p>
          <div className="flex mt-10 gap-28">
          <div className=" text-[#afafaf]">
            <ul >
              <li className='mb-2 underline underline-offset-2'>FAQ</li>
              <li className='mb-2 underline underline-offset-2'>Investor Relations</li>
              <li className='mb-2 underline underline-offset-2'>Privacy</li>
              <li className='mb-2 underline underline-offset-2'>Speed Test</li>
            </ul>
          </div>

          <div className=" text-[#afafaf]">
            <ul>
              <li className='mb-2 underline underline-offset-2'>Help Centre</li>
              <li className='mb-2 underline underline-offset-2'>Jobs</li>
              <li className='mb-2 underline underline-offset-2'>Cookie Preferences</li>
              <li className='mb-2 underline underline-offset-2'>Legal Notices</li>
            </ul>
          </div>

          <div className=" text-[#afafaf]">
            <ul>
              <li className='mb-2 underline underline-offset-2'>Account</li>
              <li className='mb-2 underline underline-offset-2'>Ways to Watch</li>
              <li className='mb-2 underline underline-offset-2'>Corporate Information</li>
              <li className='mb-2 underline underline-offset-2'>Only on Netflix</li>
            </ul>
          </div>
          
          <div className=" text-[#afafaf]">
            <ul>
              <li className='mb-2 underline underline-offset-2'>Media Centre</li>
              <li className='mb-2 underline underline-offset-2'>Terms of Use</li>
              <li className='mb-2 underline underline-offset-2'>Contact Us</li>
            </ul>
          </div>
          </div>
        </div>

        <div className="mt-10">
        <p className='w-32 text-white flex items-center gap-2 border border-white px-3 py-1 bg-transparent rounded-sm'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-hidden="true" data-icon="LanguagesSmall"><path fill="currentColor" fill-rule="evenodd" d="m10.767 5.333-.263.664L9.34 8.935l-.571 1.442L7.333 14h1.775l.727-1.967h3.587l.74 1.967H16l-3.434-8.667h-1.799m-.148 4.602-.235.628h2.502l-1.251-3.35zM9.527 4.842q.04-.101.095-.192H6.42V2H4.926v2.65H.541v1.347h3.774C3.35 7.79 1.752 9.515 0 10.428c.33.286.811.811 1.046 1.165 1.505-.913 2.857-2.364 3.88-4.02v5.094h1.493v-5.15c.4.636.848 1.245 1.333 1.806L8.32 7.89a11.5 11.5 0 0 1-1.337-1.893H9.07z" clip-rule="evenodd"/></svg></span>English <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-hidden="true" data-icon="CaretDownSmall"><path fill="currentColor" fill-rule="evenodd" d="M11.598 6.5c.148 0 .222.18.117.285l-3.48 3.48a.333.333 0 0 1-.47 0l-3.48-3.48a.167.167 0 0 1 .117-.285z" clip-rule="evenodd"/></svg></span></p>
        <p className='text-[#afafaf] mt-5 text-sm'>Netflix India</p>
        </div>
        
      </div>
      

    </div>
  )
}

export default Hero
