import React from 'react'
import linkedInSVG from '../images/linkedIn.svg'
import githubSVG from '../images/githubMinisvg.svg'

export default function ContactSection() {
  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Get In Touch</h1>
      <div>
        <button
          className='p-2 bg-emerald-500 rounded-xl'
        >
          Download My Resume (.zip)
        </button>
      </div>      
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
    
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <h2 className='tracking-widest text-2xl'>Adrian Fregoso</h2>
          <p className="leading-normal my-5">
            Located in <span className='tracking-wider font-bold underline underline-offset-2'>Denver Colorado</span>
          </p>
          <a className="text-indigo-500">AdrianF.WebDev@gmail.com</a>
          <p>(310) 292-1219</p>                    
        </div>
          <div className='flex flex-row justify-center gap-4'>
            <a href='https://github.com/AdrianF3' target='_blank'>
              <img 
                className='h-10 m-auto'
                src={linkedInSVG} 
                alt='LinkedIn'
              />          
            </a>
            <a href='http://www.linkedin.com/in/adrian-fregoso' target='_blank'>
              <img 
                className='h-10 m-auto'
                src={githubSVG} 
                alt='LinkedIn'
              />          
            </a>
          </div>
      </div> 

    </div>

</section>

  )
}
