import React from 'react'

export default function HeaderWelcome() {
  return (
    <section className='h-40 bg-emerald-800 text-center text-white'>
          <div className='flex flex-row justify-evenly'>
            {/* row section one, name and summary */}
            <div className='flex flex-col w-full'>
              <p className='mt-6 text-3xl'>
                Adrian Fregoso
              </p>
              <p className='text-xl mt-4'>
                Software Developer
              </p>
            </div>
            {/* row section two, light/dark mode toggle */}
            <div className='flex flex-col justify-items-end'>
              <p>light</p>
              <p>dark</p>
            </div>
        </div>
        {/* New Row Section for anchor links to other parts of page */}
        <div className='flex flex-row w-full justify-center'>
          <p>About Me</p>
          <p>Developer Expereience &amp; Projects</p>
          <p>Resume, Cover Letter &amp; Contact Info</p>


        </div>

    </section>
  )
}
