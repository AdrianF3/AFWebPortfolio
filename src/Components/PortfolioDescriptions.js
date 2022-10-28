import React from 'react'
import etgMini from '../images/etgMini.png'

export default function PortfolioDescriptions() {
  return (
    <section class="bg-gray-900 text-white">
  <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="max-w-xl">
      <h2 class="text-3xl font-bold sm:text-4xl">Personal &amp; Portfolio Projects</h2>

      <p class="mt-4 text-gray-300">
        A quick description of some current projects and smaller protfolio examples
      </p>
    </div>

    <div
      class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
    >
      <div class="flex items-start">
        <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
          <img className='h-10' src={etgMini} alt='Ector Grow logo'/>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold">Ector Grow</h2>

          <p class="mt-1 text-sm text-gray-300">
            This website is a live project I use to learn, practice and implement new concepts, practices or features.
          </p>
        </div>
      </div>

      <div class="flex items-start">
        <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
          <i className='material-icons'>groups_2</i>          
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold">Collab project</h2>

          <p class="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            cumque tempore est ab possimus quisquam reiciendis tempora animi!
            Quaerat, saepe?
          </p>
        </div>
      </div>

      <div class="flex items-start">
        <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
          <i className='material-icons'>code</i>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold">This Portfolio Website </h2>

          <p class="mt-1 text-sm text-gray-300">
            I wanted to include a few examples on this website of some smaller portfolio projects I've worked on.
          </p>
        </div>
      </div>

      <div class="flex items-start">
        <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
          <i className='material-icons'>thunderstorm</i>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold">Weather Project</h2>

          <p class="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            cumque tempore est ab possimus quisquam reiciendis tempora animi!
            Quaerat, saepe?
          </p>
        </div>
      </div>


      <div class="flex items-start">
        <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
          <i className='material-icons'>play_arrow</i>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold">YouTube Reaction Controller</h2>

          <p class="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            cumque tempore est ab possimus quisquam reiciendis tempora animi!
            Quaerat, saepe?
          </p>
        </div>
      </div>
      
      <div class="flex items-start">
        <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
          <i className='material-icons'>feed</i>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold">Multi Step Form</h2>

          <p class="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            cumque tempore est ab possimus quisquam reiciendis tempora animi!
            Quaerat, saepe?
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
