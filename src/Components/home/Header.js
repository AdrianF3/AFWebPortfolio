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



export default function Header() {
    

  return (
    <>
    <section className="bg-white dark:bg-cyan-900">    
    

    <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Software Developer</h1>

            <p className="mt-6 text-gray-500 dark:text-gray-300">
            Focused on building great experiences &amp; tools for the internet.
            </p>
            <p className="mt-6 text-gray-500 dark:text-gray-300 italic"> 
                My 'development time' is mainly spent continued devlopment of Ector Grow, a React website I built with a very small, but growing online community, 
                of registered users - as a self taught developer, I have used this project 
            </p>
        </div>
        

        {/* section for svg logos */}
        <div className="max-w-screen-xl mx-auto mt-20">
            {/* First Row */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 text-white justify-evenly">
                <div className=''>
                    <img className='object-cover object-center h-28 m-auto' src={reactSVG} alt='React' />
                    <p>React</p>
                    
                </div>
                <div>
                    <img className='object-cover object-center h-28 m-auto' src={tailwindSVG} alt='React' />
                    <p>Tailwind CSS</p>
                </div>
                <div>
                    <img className='object-cover object-center h-28 m-auto' src={firebaseSVG} alt='React' />
                    <p>Firebase</p>
                </div>
                <div>
                    <img className='object-cover object-center h-28 m-auto' src={jsSVG} alt='React' />
                    <p>JavaScript</p>
                </div>
                <div className='col-span-2 md:col-span-1 lg:col-span-1'>
                    <img className='object-cover object-center h-28 m-auto' src={githubSVG} alt='React' />
                    <p>GitHub</p>
                </div>                                                            
            </div>            
            {/* Second Row */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-4 text-white justify-evenly pt-8">
                <div className=''>
                    <img className='object-cover object-center h-10 m-auto' src={htmlSVG} alt='React' />
                    <p>HTML 5</p>
                    
                </div>
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={cssSVG} alt='React' />
                    <p>CSS 3</p>
                </div>                
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={jsonSVG} alt='React' />
                    <p>JSON</p>
                </div>
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={gaSVG} alt='React' />
                    <p>Google Analytics</p>
                </div>                                                                                                                                        
            </div>            
        </div>
    </div>
</section>
</>  )
}
