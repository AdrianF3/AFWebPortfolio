import React, { useState } from 'react'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'


export default function YouTubeController() {
  // const [ youtubeURL, setYoutubeURL ] = useState('https://www.youtube.com/embed/woD6RYptp58?')  
  const [ youtubeURL, setYoutubeURL ] = useState('https://www.youtube.com/embed/EUTo1urxwPo?')  
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
          <div className='flex flex-row justify-center'>
            <h2 className='w-3/12 text-3xl py-2 m-auto'>Armchair Historian</h2>
            <p className='w-7/12 m-2 p-2 border-2 border-slate-700 rounded-xl'>
              Hi, I'm Griffin Johnsen, founder of The Armchair Historian LLC and Armchair Historian channel.
              The Armchair Historian LLC specializes in producing educational and entertaining animated history videos.
              For more history animations go to https://armchairhistory.tv/
            </p>
          </div>

          {/* Video Intro & Channel Info */}
          <section>
            <div className='border-2 border-slate-800 rounded-t-xl border-b-0'>
              <div className='flex flex-row p-2'>
                <h4 className='text-3xl'>D-Day From The German Perspective</h4>
                <p className='relative right-0'>
                  Length <span>24:43</span> on <span>8/21/2021</span>
                </p>
              </div>
              <div>

              </div>
              <p className='p-4'>
                Video Description
              </p>
              {/* links to additional resources */}
              <div>
                <p>YouTube Channel</p>
                <p>Armchair Historian Website</p>
                <p>Wikipedia for D-Day</p>

              </div>

            </div>
            
            
            {/* Video Player */}        
            <div className='flex flex-col mx-auto items-center py-8 drop-shadow-xl bg-slate-800 '>
              <iframe 
                width="720" 
                height="405" 
                src={`${youtubeURL}&autoplay=1&mute=1`}                
                title="YouTube video player"
                className='rounded-lg'
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen 
              />                                    
            </div>
            {/* Buwttons To Control Video Position */}
            <section className='bg-slate-600 rounded-b-xl'>
              <h2 className='text-white text-2xl p-2 tracking-wide'>Featured Video Moments</h2>
            
              <div className='grid grid-cols-2 md:grid-cols-3 p-2 gap-4'>

                {/* Card 1 */}
                <div className='bg-gray-300 rounded-xl p-2'>
                  {/* Title in bubble above card */}
                  <div>
                    <h3>Tales of Omaha Beach</h3>
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
                    <h3>Tales of Sword Beach</h3>
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

                {/* Card 3 */}
                <div className='bg-gray-300 rounded-xl p-2'>
                  {/* Title in bubble above card */}
                  <div>
                    <h3>Tales of Utah Beach</h3>
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
                {/* Card 4 */}
                <div className='bg-gray-300 rounded-xl p-2'>
                  {/* Title in bubble above card */}
                  <div>
                    <h3>Tales of Gold Beach</h3>
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
                {/* Card 5 */}
                <div className='bg-gray-300 rounded-xl p-2'>
                  {/* Title in bubble above card */}
                  <div>
                    <h3>Tales of Juno Beach</h3>
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
