import React from 'react'
import linkedInSVG from '../images/linkedIn.svg'
import githubSVG from '../images/githubMinisvg.svg'

export default function ContactSection() {
    return (
        // <section className="text-gray-600 body-font justify-items-center p-4">
        <section className="text-gray-600 body-font bg-cyan-900/30 border-cyan-900 border-4 rounded-xl mx-4 my-10">
            <div
                className="container mx-auto px-2 py-24 rounded-xl">

                <div className="flex flex-col text-center w-full mb-8">
                    <h2 className='tracking-widest text-4xl uppercase'>Adrian Fregoso</h2>
                    <p className="leading-normal my-5">
                        <span className='tracking-wider text-2xl font-bold underline underline-offset-3'>Denver, Colorado</span>
                    </p>
                    <div>
                        <button className='p-3 bg-cyan-700 rounded-xl text-white text-xl text-wider'>
                            Download My Resume &amp; Cover Letter (.zip)
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div
                        className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center text-xl">
                        <div>
                            <a href='mailto:AdrianF.WebDev@gmail.com' className="text-indigo-500">AdrianF.WebDev@gmail.com</a>
                        </div>
                        <div>
                            <a href='tel:3102921219' target='_blank' rel='noreferrer'>(310) 292-1219</a>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center gap-4'>                        
                        <a href='http://www.linkedin.com/in/adrian-fregoso' target='_blank' rel='noreferrer'>
                            <img className='h-10 m-auto' src={linkedInSVG} alt='LinkedIn'/>
                        </a>                        
                        <a href='https://github.com/AdrianF3' target='_blank' rel='noreferrer'>
                            <img className='h-10 m-auto' src={githubSVG} alt='GitHub'/>
                        </a>
                    </div>
                </div>

            </div>
            {/* lower footer tags */}
            <div className='flex flex-col w-8/12 mx-auto justify-center text-center py-4'>
                <p>
                    Adrian Fregoso | 2022 | V1.5  
                </p>                                
                <a 
                    className='font-medium ml-1'
                    href='https://github.com/AdrianF3/AFWebPortfolio' 
                    target='_blank' 
                    rel='noreferrer'
                > 
                    GitHub Repo for this website
                </a>

            </div>

        </section>

    )
}
