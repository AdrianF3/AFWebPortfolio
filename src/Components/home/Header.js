import React from 'react'
import reactSVG from '../../images/react.svg'
import jsSVG from '../../images/js.svg'
import githubSVG from '../../images/github.svg'
import tailwindSVG from '../../images/tailwindcss.svg'
import firebaseSVG from '../../images/firebase.svg'
import gaSVG from '../../images/googleAnalytics.svg'
import jsonSVG from '../../images/json.svg'
import cssSVG from '../../images/css.svg'
import htmlSVG from '../../images/html.svg'
// import nextJSSVG from '../../images/next-js.svg'
import jestSVG from '../../images/jest-2.svg'
import typescriptSVG from '../../images/typescript.svg'
import framerMotionSVG from '../../images/framer-motion.svg'
import gcpSVG from '../../images/google-cloud-1.svg'
import nodeSVG from '../../images/nodejs-1.svg'
import expressSVG from '../../images/express-109.svg'



export default function Header() {
    

  return (
    <>
    <section className="bg-gradient-to-b from-cyan-800 via-cyan-700/90 to-cyan-900 w-screen">    
    

    <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-wider md:text-4xl">Fullstack Software Developer</h1>

            <p className="mt-6 text-gray-500 dark:text-gray-200 tracking-wide">
            Building great user experiences and effective tools for the internet
            </p>
            <p className="mt-6 text-gray-500 dark:text-gray-200 italic"> 
                I have focused my efforts & study plan, on the continued development of EctorGrow - a 
                SPA I built with Firebase/React to support and assist a growing online community of registered users, more info below...
            </p>
        </div>
        

        {/* section for svg logos */}
        <div className="max-w-screen-xl mx-auto mt-20 border-2 border-white/90 p-4 pb-10 rounded-xl">
            <div className='absolute -mt-14 -ml-8 bg-white rounded-xl drop-shadow-xl'>
                <h2 className='text-2xl font-bold sm:text-3xl text-cyan-800 p-2'>Primary Tech Stack</h2>
            </div>
            {/* First Row */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 text-white justify-evenly">
                <div className=''>
                    <img className='object-cover object-center h-28 m-auto drop-shadow-xl' src={reactSVG} alt='React' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">React</p>
                    
                </div>
                <div>
                    <img className='object-cover object-center h-28 m-auto drop-shadow-xl' src={tailwindSVG} alt='Tailwind CSS' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">Tailwind CSS</p>
                </div>
                <div>
                    <img className='object-cover object-center h-28 m-auto drop-shadow-xl' src={firebaseSVG} alt='Firebase' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">Firebase</p>
                </div>
                <div>
                    <img className='object-cover object-center h-28 m-auto drop-shadow-xl' src={jsSVG} alt='JavaScript' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">JavaScript</p>
                </div>
                <div className='col-span-2 md:col-span-1 lg:col-span-1'>
                    <img className='object-cover object-center h-28 m-auto drop-shadow-xl' src={githubSVG} alt='GitHub' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">GitHub</p>
                </div>                                                            
            </div>            
            {/* Second Row */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-5 text-white justify-evenly pt-8">
                <div className=''>
                    <img className='object-cover object-center h-10 m-auto' src={gcpSVG} alt='Google Cloud Platform' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">Google Cloud Platform</p>
                    
                </div>
                <div className=''>
                    <img className='object-cover object-center h-10 m-auto' src={htmlSVG} alt='HTML 5' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">HTML 5</p>
                    
                </div>
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={cssSVG} alt='CSS 3' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">CSS 3</p>
                </div>                
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={jsonSVG} alt='JSON' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">JSON</p>
                </div>
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={gaSVG} alt='Google Analytics' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">Google Analytics</p>
                </div>                                                                                                                                        
            </div>            
        </div>

        {/* Begin Learning Tech Stack */}
        <div className="max-w-screen-xl mx-auto pt-16 -mt-4 border-2 border-t-0 border-white/90 p-4 rounded-xl rounded-t-none">
            <div className='absolute -mt-14 -ml-8 bg-white rounded-xl drop-shadow-xl'>
                <h2 className='text-xl font-bold sm:text-2xl text-cyan-800 p-2 uppercase'>Current Learning Plan</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-4 text-white justify-evenly pt-8">
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={nodeSVG} alt='Node.js' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">Node.js</p>
                </div>   
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={expressSVG} alt='Express' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">Express</p>
                </div>   
                <div className=''>
                    <img className='object-cover object-center h-10 m-auto' src={typescriptSVG} alt='TypeScript' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">TypeScript</p>
                    
                </div>
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={framerMotionSVG} alt='Framer Motion' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">Framer Motion</p>
                </div>                
                <div>
                    <img className='object-cover object-center h-10 scale-150 m-auto' src={jestSVG} alt='Jest' />
                    <p className="tracking-widest md:tracking-wider uppercase p-1">JEST</p>
                </div>
            </div>
            {/* explaing tech I am learning and development path */}
            <div className='pt-8 text-white w-8/12 mx-auto'>
                <p>My goal is to continue learning with the libraries/tools listed above and to focus specifically on the <span className='text-xl'>FERN</span> tech stack</p>
            </div>
        </div>
    </div>
</section>
</>  )
}
