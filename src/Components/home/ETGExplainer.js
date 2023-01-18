import React from 'react'
import etgMini from '../../images/etgLogoWhiteBG.svg'



export default function ETGExplainer() {
  return (
    <section className="w-10/12 text-gray-600 body-font mx-auto my-10 border-4 border-green-300 rounded-xl bg-gradient-to-b from-green-300/20 to-emerald-500/30">
        <div className="container px-5 py-20 mx-auto flex flex-col justify-evenly m-2">
            <div className='w-10/12 md:w-3/12 m-auto drop-shadow-2xl py-10'>                
                <img
                    className='' 
                    src={etgMini} 
                    alt='Ector Grow Logo' 
                />
            </div>

            



            <div className='w-full md:w-8/12 m-auto'>                
                <div>
                    <p className="leading-relaxed py-2 text-base">
                        This website started as a side project for my personal use, which then become a project I worked on for my portfolio and a way to implement and practice what I was learning in Web Development. 
                        During Fall of 2022 I decided to temporarily take a step back from this project in order to focus more on studying, working on my portfolio website and getting a developer role. 
                    </p>
                    <p className="leading-relaxed py-2 text-base">
                        My goal is to continue developing this project in my spare time - with what I have learned over the past few months and with some redesigns I would like to implement, 
                        I will most likely refactor this entire project using TypeScript, Framer Motion and Jest. 
                    </p>

                    {/* Begin collapsabile section */}
                    <div className="space-y-8">
                        {/* User Features */}
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                            className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50 drop-shadow-xl"
                            >
                            <h2 className="font-medium text-gray-900">
                                User Feautres
                            </h2>

                            <svg
                                className="ml-1.5 h-5 w-5 flex-shrink-0 transition-all duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>
                            </summary>

                            <div className="px-4 leading-relaxed text-gray-700 py-8 -mt-4 bg-gray-200 rounded-b-xl">
                                <p>This tool was built to mentally offload the details and record keeping for users who grow their own personal cannabis.  This includes the ability to… </p>
                                <ul className='list-disc text-xs px-6 pt-2 text-slate-900 tracking-wide'>
                                    <li className='py-1'>Create a log of events that describe a plants growth from seed through harvest. Including three different phases of growth</li>
                                    <li className='py-1'>Create custom nutrient schedules, based on different plants or growth goals</li>
                                    <li className='py-1'>Upload images with custom captions, describing plant growth or concerns</li>
                                    <li className='py-1'>Users can comment on each others plants and their progress</li>
                                    <li className='py-1'>Helpful information to support users with their plants growth</li>
                                    <li className='py-1'>Publicly share your progress with other individuals online (no user account required)</li>
                                </ul>
                            </div>

                        </details>

                        {/* Code Structure & Info */}
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                            className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50 drop-shadow-xl"
                            >
                            <h2 className="font-medium text-gray-900">
                                Code Structure & Info
                            </h2>

                            <svg
                                className="ml-1.5 h-5 w-5 flex-shrink-0 transition-all duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>
                            </summary>

                            <div className="px-4 leading-relaxed text-gray-700 py-8 -mt-4 bg-gray-200 rounded-b-xl">
                                <p>This project was started once I felt comfortable with some of the basics of React - so at this point there is a lot I plan on refactoring/improving in the codes structure.</p>
                                <ul className='list-disc text-xs px-6 pt-2 text-slate-900 tracking-wide'>
                                    <li className='py-1'>Currently users are authenticated using Firebase Authentication through Google Cloud Platform</li>
                                    <li className='py-1'>User Data is stored in one of several Firestore Collections as well as several Firebase Storage "buckets" to store a users uploaded Plant images or Profile Thumbnails</li>
                                    <li className='py-1'>I am using two Firebase Extensions to help handle some user account interactions - When a user deletes their account, their data across the different Firestore 
                                        Collections and Storage "buckets" is also deleted. The other extension is called when a user registers an account, their information is shared with a Marketing Newsletter list</li>
                                    <li className='py-1'>I have implemented Google Analytics for the obvious user metrics and analytical information</li>
                                    <li className='py-1'>I have tried to avoid using a bunch of extra packages for most of the functionality - I am using React-Date-Picker & React-Image-File-Resizer, 
                                        React-GA & React-Password-Checklist to help with some of the UI and Logic across the website</li>                                
                                </ul>
                            </div>
                        </details>

                        {/* Explore The Demo */}
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                            className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50 drop-shadow-xl"
                            >
                            <h2 className="font-medium text-gray-900">
                                Explore the Demo
                            </h2>

                            <svg
                                className="ml-1.5 h-5 w-5 flex-shrink-0 transition-all duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>
                            </summary>
                            
                            <div className='px-4 leading-relaxed text-gray-700 bg-gray-200 rounded-b-xl'>
                                <p className="text-gray-700 pt-10 -mt-4">
                                I would love to show off my work on this project… but I also realize that everyone is not that comfortable with cannabis - I also realize that maybe it is 
                                not the most appropriate thing to mention when applying for a job… so perhaps a nice middle ground. 
                                </p>
                                <p className="text-gray-700 pt-10 -mt-4">
                                    I have made a demo account that is filled with pictures of my Corgi instead of Cannabis plants! I am hoping this will be a more comfortable 
                                    ( and work appropriate way) to explore my project.
                                </p>
                                {/* Ector Grow Demo Info & Link */}
                                <div className="flex flex-col md:flex-row justify-center py-6 gap-4">
                                    <div className='border-2 border-emerald-800 p-2 rounded-xl mx-auto'>
                                        <p className='flex justify-center underline underline-offset-2'>Demo Account Info</p> 
                                        <p><span className='font-bold'>Email:</span> bb8@EctorGrow.com</p>
                                        <p><span className='font-bold'>Password:</span> 123A%6</p>
                                    </div>
                                    <div className='mx-auto'>
                                        <a href='http://EctorGrow.com' target='_blank' rel='noreferrer'>
                                            <button className="text-white bg-emerald-400 p-2  focus:outline-none hover:bg-emerald-600 rounded-xl">
                                                Visit Ector Grow
                                            </button>                    
                                        </a>
                                    </div>
                                </div>
                                <div className='m-auto p-4'>
                                    <p className='text-sm text-slate-700 italic px-4 text-center'>
                                        add, edit and delete any 'plants', images. comments etc - but,
                                        <span className='uppercase font-medium text-slate-900'> please do not </span>
                                         edit or delete anything from the 'plants' I added with images of BB-8, my dog... the account is live
                                         and the data is not hard coded
                                    </p>
                                </div>

                            </div>

                        </details>
                        </div>


                    
                    <p className="leading-relaxed py-2 text-base">
                        
                    </p>
                        
                </div>
                
            </div>
        </div>
    </section>
  )
}
