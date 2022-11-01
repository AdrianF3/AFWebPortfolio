import React from 'react'
import etgMini from '../images/etgLogoWhiteBG.svg'


export default function ETGExplainer() {
  return (
    <section className="text-gray-600 body-font border-4 border-green-300 m-2 rounded-xl bg-green-300/20">
        <div className="container px-5 py-24 mx-auto flex flex-row justify-evenly m-2">
            <div className='w-3/12 my-auto drop-shadow-2xl'>                
                <img
                    className='' 
                    src={etgMini} 
                    alt='Ector Grow Logo' 
                />
            </div>
            <div className='w-8/12'>
                <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">EctorGrow.com</h2>
                <div>
                    <p className="leading-relaxed py-2 text-base">
                        This website started as a side project for my personal use, which turned into a project I began working on for my portfolio as a web developer and is now a small, but expanding, community of personal cannabis growers.
                    </p>
                    <p className="leading-relaxed py-2 text-base">
                        As of Fall 2022, I've decided to focus more on my portfolio, other portfolio projects and my development career - I will continue to work on updates for Ector Grow, bug fixes and feature upgrades, just with slighly more time between updates.
                    </p>
                    <p>
                        I realize that not everyone is comfortable with cannabis, which is why I created a demo account that anyone can log in to wihtout seeing anything related to cannabis, but
                        instead will be pictures of cute dogs, mostly my Corgi. 
                    </p>
                        
                </div>
                <div className="flex justify-evenly py-4">
                    <button className="text-white bg-emerald-500 p-1  focus:outline-none hover:bg-emerald-600 rounded-xl">
                        Visit Ector Grow
                    </button>                    
                    <div className='border-2 border-emerald-800 p-2 rounded-xl'>
                        <p className='flex justify-center underline underline-offset-2'>Demo Account Info</p> 
                        <p><span className='font-bold'>Email:</span> email@email.com</p>
                        <p><span className='font-bold'>Password:</span> 123456</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
