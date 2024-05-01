import React from 'react'




export default function DashExplainer() {
  return (
    <section className="w-10/12 text-gray-600 body-font mx-auto my-10 border-4 border-blue-300 rounded-xl bg-gradient-to-b from-blue-300/20 to-blue-500/30">
        <div className="container px-5 py-20 mx-auto flex flex-col justify-evenly m-2">
            <div className='w-10/12 md:w-3/12 m-auto drop-shadow-2xl py-10'>                                
            <a href='http://dash.afwebdev.com' target='_blank' rel='noreferrer'>
                <h3 className='text-2xl text-center'>
                    dash.AFWebDev.com
                </h3>
            </a>
            </div>


            <div className='w-full md:w-8/12 m-auto'>                
                <div>
                    <p className="leading-relaxed py-2 text-base">
                        This project is a personal dashboard that I use to help me organize a few day to day tasks as well as being the project I currently use to further my learning and development as a developer. The proejct 
                        has features like a bookmark manager, a habit tracker, recipe organizer with plans for more features in the future.
                    </p>
                    <p className="leading-relaxed py-2 text-base">
                        When starting this proejct I was familiar with React and Google Cloud Platform, but decided to use this proejct to also include TypeScript, DaisyUI and Next.js including deplying the project using Vercel
                         with the backend on Google Cloud Platform.
                    </p>
                    <p className="leading-relaxed py-2 text-base">
                        This app has a simple, <span className='font-bold'>built in demo</span> - go to the login form, and click the button to "Load Demo Account" and then sign in. This way anyone can explore and get a feel for how the application works.
                    </p>                    
                </div>
                
            </div>
        </div>
    </section>
  )
}
