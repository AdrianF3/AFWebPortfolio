import React from 'react'
import linkedInSVG from '../images/linkedIn.svg'
import githubSVG from '../images/githubMinisvg.svg'

export default function ContactSection() {


    // V1 Resume Link - Added 1/13
    const resumeURL = 'https://firebasestorage.googleapis.com/v0/b/afportfolio-20234.appspot.com/o/AdrianFregoso_Resume.zip?alt=media&token=6070e671-69e9-4759-9192-67a8940cc9fd'



    return (        
        <section className="text-gray-600 body-font bg-gradient-to-b from-cyan-700/30 to-cyan-900/50 border-cyan-900 border-4 rounded-xl mx-4 my-10">
            <div
                className="container mx-auto px-2 py-24 rounded-xl">

                <div className="flex flex-col text-center w-full mb-8">
                    <h2 className='tracking-widest text-4xl uppercase'>Adrian Fregoso</h2>
                    <p className="leading-normal my-5">
                        <span className='tracking-wider text-2xl font-bold underline underline-offset-3'>Denver, Colorado</span>
                    </p>
                    {/* Link to download my resume */}
                    <div className='p-3 bg-cyan-700 rounded-xl text-white text-xl text-wider mx-auto'>                        
                        <a href={resumeURL} download>Download My Resumé</a>                        
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
                    Adrian Fregoso | 2022 | V0.90
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
