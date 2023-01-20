import React, { useState } from 'react'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'
import NavigationBar from '../components/NavigationBar'
import { handleScrollToBottom } from '../components/renderless/handleScrollToBottom'
import armchairHistorianLogo from '../images/armchairHistorianLogo.png'

export default function YouTubeController() {  
  const [ youtubeURL, setYoutubeURL ] = useState('https://www.youtube.com/embed/EUTo1urxwPo?')
  
  const videoMoments = [
    {
      title: 'End of Ads',
      description: 'A brief description or more context. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timestamp: '2:58',
      urlToPlay: 'https://www.youtube.com/embed/EUTo1urxwPo?start=178'
    },
    {
      title: 'Tales of Omaha Beach',
      description: 'A brief description or more context. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timestamp: '9:55',
      urlToPlay: 'https://www.youtube.com/embed/EUTo1urxwPo?start=595'
    },
    {
      title: 'Tales of Sword Beach',
      description: 'A brief description or more context. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timestamp: '11:51',
      urlToPlay: 'https://www.youtube.com/embed/EUTo1urxwPo?start=711'
    },
    {
      title: 'Tales of Utah Beach',
      description: 'A brief description or more context. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timestamp: '13:55',
      urlToPlay: 'https://www.youtube.com/embed/EUTo1urxwPo?start=835'
    },
    {
      title: 'Tales of Gold Beach',
      description: 'A brief description or more context. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timestamp: '18:28',
      urlToPlay: 'https://www.youtube.com/embed/EUTo1urxwPo?start=1108'
    },
    {
      title: 'Tales of Juno Beach',
      description: 'A brief description or more context. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timestamp: '20:12',
      urlToPlay: 'https://www.youtube.com/embed/EUTo1urxwPo?start=1212'
    },
  ]


  return (
    <>
    {/* <HeaderNavigation/> handleScrollToBottom={handleScrollToBottom} */}
    <NavigationBar handleScrollToBottom={handleScrollToBottom} />
    <section>
      {/* Page Title & Description */}      
      <div className=''>
        {/* Upper Header Section */}
        <div className='flex flex-col bg-slate-400 p-4 '>
          <h2 className='text-3xl'>YouTube Controller Project</h2>
          <div className='border-2 border-dashed p-4 mt-6'>
            <h4 className='text-xl uppercase'>Project Description</h4>
            <p className='text-lg py-2'>
              I had an idea awhile back to create custom websites for youtubers where they could 
              create custom pages for their videos to add more unique styling/designs but also to 
              enable a lot more intractivity.
            </p>
            <p className='text-lg py-2'>
              For the example below, I decided to create the page for a more education focused YT, to display the benefits and how an education channel, and they're viewers, might benefit from an enhanced
              experience
            </p>
          </div>
        </div>        
      </div>          

      {/* Beginning of YouTube Page Section */}
      <section className='flex flex-col w-full bg-slate-300 py-16'>

        <section className='flex flex-col w-10/12 mx-auto'>

          {/* YT Page Header Description */}
          <div className='flex flex-col md:flex-row justify-center my-8'>            
            <img 
              src={armchairHistorianLogo} 
              alt='Armchair Historian Logo' 
              className='object-contain bg-sky-800 p-2 m-2 rounded-xl shadow-xl'
            />
            <p className='w-7/12 m-2 p-2 border-2 border-slate-700 rounded-xl mx-auto break-words'>
              Hi, I'm Griffin Johnsen, founder of The Armchair Historian LLC and Armchair Historian channel.
              The Armchair Historian LLC specializes in producing educational and entertaining animated history videos.
              For more history animations go to https://armchairhistory.tv/
            </p>
          </div>

          {/* Video Intro & Channel Info */}
          <section>
            <div className='border-2 border-slate-800 rounded-t-xl border-b-0 py-4'>
              <div className='flex flex-col'>
                <div className='place-self-end bg-emerald-800 p-2 rounded-xl font-medium -mt-10 mr-4 text-white text-sm uppercase text-center'>
                  <p className=''>
                    Full Length: <span>24:43</span> 
                  </p>                  
                  <p className=''>
                    Uploaded On <span>8/21/2021</span>
                  </p>                  
                </div>
                <div className='px-2'>
                  <h4 className='text-3xl'>D-Day From The German Perspective</h4>

                </div>
              </div>
              <div>

              </div>
              <p className='p-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              {/* links to additional resources */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center'>           
                <p className='p-2 border-black border-2 rounded-xl hover:bg-slate-400 hover:text-white'>
                  <a href='https://www.youtube.com/c/TheArmchairHistorian/about' target='_blank' rel='noreferrer'>YouTube Channel</a></p>
                  <p className='p-2 border-black border-2 rounded-xl hover:bg-slate-400 hover:text-white'>
                  <a href='https://armchairhistory.tv' target='_blank' rel='noreferrer'>Armchair Historian Website</a></p>
                  <p className='p-2 border-black border-2 rounded-xl hover:bg-slate-400 hover:text-white'>
                  <a href='https://en.wikipedia.org/wiki/Normandy_landings' target='_blank' rel='noreferrer'>D-Day Wiki</a></p>                

              </div>

            </div>
            
            
            {/* Video Player */}        
            <div className='flex flex-col mx-auto items-center py-8 drop-shadow-xl bg-slate-800'>
              <div className='relative pb-8'>
                <iframe                   
                  src={`${youtubeURL}&autoplay=1&mute=1`}                
                  title="YouTube video player"                                    
                  className='rounded-lg w-auto md:w-[648px] h-auto md:h-[364.5px]'                  
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen 
                />                                    
              </div>
            </div>
            {/* Buwttons To Control Video Position */}
            <section className='bg-slate-600 rounded-b-xl py-8 px-4'>
              <h2 className='text-white text-2xl p-2 pb-5 tracking-wide font-medium'>Featured Moments</h2>          
              <div className='grid grid-cols-1 md:grid-cols-3 p-2 gap-6'>
                {videoMoments.length > 0 ? videoMoments.map((moment) => <>
                  {/* Card 1 */}
                  <div className='bg-gray-300 rounded-xl p-2'>
                    <div className='flex flex-col  justify-end '>
                      <div className='w-fit px-2 -mt-6 bg-slate-800 text-white border-2 border-white/50 shadow-xl rounded-xl place-self-end'>
                        <p className='p-1 text-sm font-bold'>{moment.timestamp}</p>
                      </div>
                    </div>
                    {/* Title in bubble above card */}
                    <div className='flex flex-row'>
                      <h3 className='text-2xl text-center py-2 border-spacing-2 border-b-2 border-slate-700'>{moment.title}</h3>
                    </div>                  
                    {/* brief description */}
                    <div className='py-4'>
                      <p>
                        {moment.description}
                      </p>
                    </div>
                    {/* Button to skip to timestamp */}
                    <div className='flex flex-col'>
                      <button 
                        className='p-2 bg-emerald-300 border-2 border-black/50 rounded-xl'
                        onClick={() => setYoutubeURL(moment.urlToPlay)}
                      >
                        Play This
                      </button>
                    </div>
                  </div>                  
                </>) : null }        
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
