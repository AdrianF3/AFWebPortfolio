import React from 'react'
import { NavLink } from 'react-router-dom'
import etgMini from '../../images/etgMini.png'

export default function PortfolioDescriptions() {
  return (
    <section className="flex justify-center pb-8 rounded-b-2xl bg-cyan-900 text-white">
  <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold sm:text-4xl">Personal &amp; Portfolio Projects</h2>

      <p className="mt-4 text-gray-300">
        A quick description of some current projects and smaller protfolio examples
      </p>
    </div>

    <div
      className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
    >
      {/* EctorGrow Section */}
      <a href='https://EctorGrow.com' target='_blank' rel='noreferrer'>
        <div className="flex p-2 items-start col-span-1 hover:scale-125 transition-all duration-150 hover:-translate-y-8">
          <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
            <img className='h-10' src={etgMini} alt='Ector Grow logo'/>
          </span>

          <div className="ml-4">
            <h2 className="text-lg font-bold">Ector Grow</h2>
            <p className='text-xs text-slate-200 pb-4'>EctorGrow.com</p>
            <p className="mt-1 text-sm text-gray-300">
              This website is currently a <span className='italic'>live</span> project I use to learn, practice and implement new concepts, practices & features. More Info below...
            </p>
          </div>
        </div>      
      </a>

      {/* Weather Project */}
      <NavLink to='/weather'>

      <div className="flex items-start col-span-1 hover:scale-125 transition-all duration-150 hover:-translate-y-8">
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
        <div className="flex items-start col-span-1 hover:scale-125 transition-all duration-150 hover:-translate-y-8">
          <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
            <i className='material-icons'>feed</i>
          </span>

          <div className="ml-4">
            <h2 className="text-lg font-bold">Roommate Bill Splitter</h2>
            <p className='text-xs text-slate-200 pb-4'>AFWebDev.com/billsplit</p>
            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              cumque tempore est ab possimus quisquam reiciendis tempora animi!
              Quaerat, saepe?
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  </div>
</section>

  )
}
