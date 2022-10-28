import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {


  return (
    <section class="bg-white dark:bg-gray-900">
    <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div class="flex items-center justify-between">
            <div>
                <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Adrian Fregoso</a>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div class="flex lg:hidden">
                {/* <button x-cloak @click="isOpen = !isOpen" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu"> */}
                <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                    <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                
                    {/* <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg> */}
                </button>
            </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        {/* <div x-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:bg-transparent lg:dark:bg-transparent lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"> */}
        <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:bg-transparent lg:dark:bg-transparent lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
            <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 text-white gap-4">
                <NavLink to='/'><p className=''>Home</p></NavLink>
                <NavLink to='/weather'><p className=''>Weather Project</p></NavLink>
                
                <NavLink to='ytcontroller'><p>YouTube Controller</p></NavLink>
                <NavLink to=''><p>Ector Grow</p></NavLink>
                <NavLink to=''><p>Get In Touch</p></NavLink>
                {/* <a class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Ector Grow</a> */}
                {/* <a class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Get In Touch</a> */}
            </div>
            
        </div>
    </nav>
    </section>
  )
}
