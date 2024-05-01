import React from 'react'
import { NavLink } from 'react-router-dom'
import etgMini from '../../images/etgMini.png'

export default function PortfolioDescriptions() {
  return (
    <section id="portfolio-descriptions" className="flex justify-center pb-8 rounded-b-2xl bg-cyan-900 text-white w-screen">      
  <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="">
      <h2 className="text-3xl font-bold sm:text-4xl">Portfolio Projects</h2>      
    </div>

    <div
      className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
    >
      {/* Dash Section */}
      <a href='http://dash.afwebdev.com' target='_blank' rel='noreferrer'>
        <div className="flex items-start col-span-1 md:hover:scale-125 transition-all duration-150 md:hover:-translate-y-8">
          <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
            <p className='h-8 scale-150'>dash</p>
          </span>

          <div className="ml-4">
            <h2 className="text-lg font-bold">Dash</h2>
            <p className='text-xs text-slate-200 pb-4'>dash.AFWebDev.com</p>
            <p className="mt-1 text-sm text-gray-300">
              This website is a side projcet I use to help me organize a few key parts of my life as well as being just a general dashboard for managing my day to day, I also 
              use the website to learn, practice and implement new concepts, best practices & features. More Info below...
            </p>
          </div>
        </div>      
      </a>

      {/* EctorGrow Section */}
      <a href='https://EctorGrow.com' target='_blank' rel='noreferrer'>
        <div className="flex items-start col-span-1 md:hover:scale-125 transition-all duration-150 md:hover:-translate-y-8">
          <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
            <img className='h-8 scale-150' src={etgMini} alt='Ector Grow logo'/>
          </span>

          <div className="ml-4">
            <h2 className="text-lg font-bold">EctorGrow</h2>
            <p className='text-xs text-slate-200 pb-4'>EctorGrow.com</p>
            <p className="mt-1 text-sm text-gray-300">
              This website is no longer in active development, but is still live for existing users to access. It is also my first major React project and the project I built to further my developing skills. More Info below...
            </p>
          </div>
        </div>      
      </a>

      {/* Weather Project */}
      <NavLink to='/weather'>

      <div className="flex items-start col-span-1 md:hover:scale-125 transition-all duration-150 md:hover:-translate-y-8">
        <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
          <i className='material-icons'>thunderstorm</i>
        </span>

        <div className="ml-4">
          <h2 className="text-lg font-bold">Weather Game</h2>
          <p className='text-xs text-slate-200 pb-4'>AFWebDev.com/weather</p>
          <p className="mt-1 text-sm text-gray-300">
            My twist on the classic Weather API protfolio project - I created a simple game that gives the user 10 chances to guess the correct weather for a U.S. city.
          </p>
        </div>
      </div>   
      </NavLink>


      {/* Roommate Bill Splitter */}
      <NavLink to='/billsplit'>
        <div className="flex items-start col-span-1 md:hover:scale-125 transition-all duration-150 md:hover:-translate-y-8">
          <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
            <i className='material-icons'>feed</i>
          </span>

          <div className="ml-4">
            <h2 className="text-lg font-bold">Roommate Bill Splitter</h2>
            <p className='text-xs text-slate-200 pb-4'>AFWebDev.com/billsplit</p>
            <p className="mt-1 text-sm text-gray-300">
              I created a Bill Splitting tool that could be used to track bills, payments, expenses and importantly... who owes who and how much do they owe! 
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  </div>
</section>

  )
}
