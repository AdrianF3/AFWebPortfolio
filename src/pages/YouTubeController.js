import React, { useState } from 'react'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'


export default function YouTubeController() {
  const [ youtubeURL, setYoutubeURL ] = useState('https://www.youtube.com/embed/woD6RYptp58?')  
  return (
    <>
    <HeaderNavigation/>
    <section>
      {/* Page Title & Description */}      
      <div className=''>
        {/* Upper Header Section */}
        <div className=''>
          <h2>YouTube Controller</h2>
          <p>
            I had an idea awhile back to create custom websites for youtubers where they could 
            create custom pages for their videos to add more unique styling/designs but also to 
            enable a lot more intractivity
          </p>
          <p>
            For the example below, I decided to create the page for a more education focused YT, to display the benefits and how an education channel, and they're viewers, might benefit from an enhanced
            experience
          </p>
        </div>        
      </div>          

      {/* Beginning of YouTube Page Section */}
      <section className='flex flex-col w-full bg-slate-300 py-16'>

        <section className='flex flex-col w-10/12 mx-auto'>

          {/* YT Page Header Description */}
          <div className='flex flex-col'>
            <h2>Page Title</h2>
            <p>More Info</p>
          </div>

          {/* Video Intro & Channel Info */}
          <section>
            <h4>Video Title | Channel Title</h4>
            <p>Video Description</p>
            {/* Video Player */}        
            <div className='flex flex-col mx-auto items-center py-8 shadow-xl bg-slate-800 rounded-t-xl'>
              <iframe 
                width="720" 
                height="405" 
                src={`${youtubeURL}&autoplay=1&mute=1`}
                // src={`${youtubeURL}`}
                title="YouTube video player"
                className='rounded-lg'
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen 
              />                                    
            </div>
            {/* Buwttons To Control Video Position */}
            <div className='grid grid-cols-2 md:grid-cols-3 bg-slate-600 p-2 gap-4'>

              {/* Card 1 */}
              <div className='bg-gray-300 rounded-xl p-2'>
                {/* Title in bubble above card */}
                <div>
                  <h3>Video Feature</h3>
                </div>

                {/* centered graphic */}
                <div>
                  
                </div>
                {/* brief description */}
                <div>
                  <p>
                    Brief Description of video feature
                  </p>
                </div>
                {/* Button to skip to timestamp */}
                <div>
                  <button className='p-2 bg-emerald-500 rounded-xl'>
                    Play This in Video
                  </button>
                </div>

              </div>

              {/* Card 1 */}
              <div className='bg-gray-300 rounded-xl p-2'>
                {/* Title in bubble above card */}
                <div>
                  <h3>Video Feature</h3>
                </div>

                {/* centered graphic */}
                <div>
                  
                </div>
                {/* brief description */}
                <div>
                  <p>
                    Brief Description of video feature
                  </p>
                </div>
                {/* Button to skip to timestamp */}
                <div>
                  <button className='p-2 bg-emerald-500 rounded-xl'>
                    Play This in Video
                  </button>
                </div>

              </div>

              {/* Card 1 */}
              <div className='bg-gray-300 rounded-xl p-2'>
                {/* Title in bubble above card */}
                <div>
                  <h3>Video Feature</h3>
                </div>

                {/* centered graphic */}
                <div>
                  
                </div>
                {/* brief description */}
                <div>
                  <p>
                    Brief Description of video feature
                  </p>
                </div>
                {/* Button to skip to timestamp */}
                <div>
                  <button className='p-2 bg-emerald-500 rounded-xl'>
                    Play This in Video
                  </button>
                </div>

              </div>

            </div>

          </section>        
          {/* Additional Information & Resources in collapseable section */}
          <div>

          </div>

        </section>


      </section>



    </section>
    <ContactSection/>
    
    </>)
}
