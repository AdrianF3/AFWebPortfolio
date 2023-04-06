import React from 'react'
import linkedInSVG from '../images/linkedIn.svg'
import githubSVG from '../images/githubMinisvg.svg'

export default function ContactSection() {


    // V2 Resume Link - Added 1/13
    // const resumeURL = 'https://firebasestorage.googleapis.com/v0/b/afportfolio-20234.appspot.com/o/AdrianFregoso_Resume.zip?alt=media&token=6070e671-69e9-4759-9192-67a8940cc9fd'
    // V3 Resume Link - Added 1/30
    // const resumeURL = 'https://firebasestorage.googleapis.com/v0/b/afportfolio-20234.appspot.com/o/Adrian%20Fregoso%20Resume.pdf?alt=media&token=dfe3df0d-db28-4ba2-a2eb-909d56767452'
    // V4 Resume Link - Added 4/6
    const resumeURL = 'https://firebasestorage.googleapis.com/v0/b/afportfolio-20234.appspot.com/o/AdrianFregosoResume_23.pdf?alt=media&token=595b9b0b-eec4-44a8-9124-311d293972a2'

return (                
    <section className="text-gray-600 body-font bg-cover bg-svgBG object-cover border-cyan-900 border-4 shadow-xl rounded-xl mx-4 my-8">
        <div className="container mx-auto px-2 pt-16 pb-8 rounded-xl">
            {/* Upper Half */}
            <div className="flex flex-col text-center w-full mb-8">
                <h2 className='tracking-widest font-medium text-4xl uppercase text-slate-200'>Adrian Fregoso</h2>
                <p className="leading-normal my-5">
                    <span className='tracking-wider text-2xl text-slate-300 font-bold underline underline-offset-3'>Denver, Colorado</span>
                </p>
                {/* Link to download my resume */}
                <div className='flex  mx-auto'>
                    <a href={resumeURL} download>
                        <div className='p-4 uppercase bg-cyan-700 border-black/30 border-2 rounded-xl text-slate-200 text-xl tracking-wider transition-all mx-auto
                            hover:bg-emerald-600 hover:italic active:scale-75 active:bg-emerald-900'>                        
                            Download My Resumé
                        </div>
                    </a>                        
                </div>
            </div>
            {/* Lower Half */}
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="p-2 w-full border-t border-gray-700 text-center text-xl">
                    <div>
                        <a href='mailto:AdrianF.WebDev@gmail.com'>
                            <span className="text-orange-800 tracking-wide hover:tracking-widest transition-all hover:text-red-900 font-medium text-2xl">
                                AdrianF.WebDev@gmail.com
                            </span>
                        </a>
                    </div>
                    <div>
                        <a href='tel:3102921219' target='_blank' rel='noreferrer'>
                            <span className="text-orange-800 tracking-wide hover:tracking-widest transition-all hover:text-red-900 font-medium text-xl">
                                (310) 292-1219
                            </span>
                        </a>
                    </div>
                </div>
                <div className='flex flex-row justify-center gap-3 transition-all'>                        
                    <a href='http://www.linkedin.com/in/adrian-fregoso' target='_blank' rel='noreferrer'>
                        <img className='h-10 m-auto hover:scale-125 active:scale-75' src={linkedInSVG} alt='LinkedIn'/>
                    </a>                        
                    <a href='https://github.com/AdrianF3' target='_blank' rel='noreferrer'>
                        <img className='h-10 m-auto hover:scale-125 active:scale-75' src={githubSVG} alt='GitHub'/>
                    </a>
                </div>
            </div>

        </div>
        {/* Final Footer Tags */}
        <div className='flex flex-col w-8/12 mx-auto justify-center text-center text-slate-200 font-medium text-lg pb-4'>
            <p>Adrian Fregoso | 2022 | V0.97</p>                                
            <a 
                className='font-medium ml-1'
                href='https://github.com/AdrianF3/AFWebPortfolio' 
                target='_blank' 
                rel='noreferrer'> 
                GitHub Repo for this website
            </a>
        </div>
    </section>
)}
