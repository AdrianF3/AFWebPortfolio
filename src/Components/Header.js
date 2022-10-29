import React from 'react'
import reactSVG from '../images/react.svg'
import jsSVG from '../images/js.svg'
import githubSVG from '../images/github.svg'
import tailwindSVG from '../images/tailwindcss.svg'
import firebaseSVG from '../images/firebase.svg'


export default function Header() {
    

  return (
    <>
    <section class="bg-white dark:bg-gray-900">    
    

    <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-2xl mx-auto">
            <h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Software Developer</h1>

            <p class="mt-6 text-gray-500 dark:text-gray-300 italic">
            Focused on building great experiences &amp; tools for the internet. Currently splitting focus between devloping my side project, Ector Grow &amp; continuing to learn 
            &amp; implement more advanced concepts, patterns &amp; practices. 
            </p>
            
        </div>
        

        {/* section for svg logos */}
        <div class="max-w-screen-xl mx-auto mt-20">
            {/* First Row */}
            <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 text-white justify-evenly">
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
            <div class="grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-4 text-white justify-evenly pt-4">
                <div className=''>
                    <img className='object-cover object-center h-10 m-auto' src={reactSVG} alt='React' />
                    <p>HTML 5</p>
                    
                </div>
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={tailwindSVG} alt='React' />
                    <p>CSS 3</p>
                </div>
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={firebaseSVG} alt='React' />
                    <p>SQL</p>
                </div>
                <div>
                    <img className='object-cover object-center h-10 m-auto' src={jsSVG} alt='React' />
                    <p>JSON</p>
                </div>
                <div className='col-span-2 md:col-span-1 lg:col-span-1'>
                    <img className='object-cover object-center h-10 m-auto' src={githubSVG} alt='React' />
                    <p>Bootstrap</p>
                </div>                                                            
                <div className='col-span-2 md:col-span-1 lg:col-span-1'>
                    <img className='object-cover object-center h-10 m-auto' src={githubSVG} alt='React' />
                    <p>PHP</p>
                </div>                                                            
                <div className='col-span-2 md:col-span-1 lg:col-span-1'>
                    <img className='object-cover object-center h-10 m-auto' src={githubSVG} alt='React' />
                    <p>WordPress</p>
                </div>                                                            
                <div className='col-span-2 md:col-span-1 lg:col-span-1'>
                    <img className='object-cover object-center h-10 m-auto' src={githubSVG} alt='React' />
                    <p>Google Analytics</p>
                </div>                                                            
            </div>            
        </div>
    </div>
</section>
</>  )
}
