import React from 'react'
import EctorGrowSVGLogo from '../images/etgLogoWhiteBG.svg'

export default function EctorGrowExplainer() {
  return (
    <section className=''>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative">
          <img
            alt="Ector Grow Logo"
            src={EctorGrowSVGLogo}
            className="h-auto max-w-xl object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
            EctorGrow.com
          </h2>

          <p className="mt-4 text-gray-600">
            This started as a peronsal project to see if I could create a helpful tool for myself, this is still where I learn, practice and implement 
            whatever I am currently learning.
          </p>

          <p className="mt-4 text-gray-600">
            I know the content of this website is not for everyone, but I still want to show off some of what I have done... so I made a dummy account anyone can use
            to see first hand what users can do with their own account. This dummy account is also loaded with pictures of cute dogs (instead of cannabis)... who doesn't 
            like looking at a cute dogs?
          </p>

          <div className='flex flex-col'>
            <p className="mt-4 text-gray-600 block">
              DEMO ACCOUNT INFO
              <span className='block py-2'>Email Address:</span> test@test.com
              <span className='block py-2'>Password:</span> 123456
            </p>
          </div>




          <a
            href="http://EctorGrow.com/"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Take A Look
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
