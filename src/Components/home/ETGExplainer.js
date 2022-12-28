import React from 'react'
import etgMini from '../../images/etgLogoWhiteBG.svg'



export default function ETGExplainer() {
  return (
    <section className="w-10/12 text-gray-600 body-font mx-auto my-10 border-4 border-green-300 rounded-xl bg-green-300/20">
        <div className="container px-5 py-2 mx-auto flex flex-col justify-evenly m-2">
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
                        This website started as a side project for my personal use, which turned into a project I worked on for my portfolio and is now a small, but growing community of personal, at home cannabis growers. 
                        This project has given me the experince of needing to consider all aspects of designing, developing and deploying a project, managaing the front-end, back-end, user experience, data management &amp; security.
                    </p>

                    {/* Begin collapsabile section */}
                    <div class="space-y-4">
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                            class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50 drop-shadow-xl"
                            >
                            <h2 class="font-medium text-gray-900">
                                User Feautres & Code Structure
                            </h2>

                            <svg
                                class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>
                            </summary>

                            <p class="px-4 leading-relaxed text-gray-700 py-8 -mt-4 bg-gray-200 rounded-b-xl">
                            With the tech stack above, I've used <span className='font-bold text-wide'>Firebase Authentication</span> for user account management, <span className='font-bold text-wide'>Firestore</span> to save data for user accounts, plant data, support requests &amp; social comments with other users.
                            <span className='font-bold text-wide'>Firebase Storage</span> to save user uploaded images, including profile thumbnails and images of the plants they grow.                                             
                            Users also have the ability to track their plants through several phases of growth, while documenting 
                            their results with imagees, custom notes &amp; the ability to comment & interact with another users plants in addition to getting helpful information amd the ability to customize nutrient schedules for their plants. 
                            </p>
                        </details>

                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                            class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50 drop-shadow-xl"
                            >
                            <h2 class="font-medium text-gray-900">
                                Explore the Demo
                            </h2>

                            <svg
                                class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>
                            </summary>
                            
                            <div className='px-4 leading-relaxed text-gray-700 bg-gray-200 rounded-b-xl'>
                                <p class="text-gray-700 pt-10 -mt-4">
                                I realize that not everyone is comfortable with cannabis, which is why I created a demo account that anyone can log in to wihtout seeing anything related to cannabis, but
                                instead will be pictures of cute dogs, mostly my Corgi. 
                                </p>
                                {/* Ector Grow Demo Info & Link */}
                                <div className="flex flex-col md:flex-row justify-center py-6 gap-4">
                                    <div className='border-2 border-emerald-800 p-2 rounded-xl mx-auto'>
                                        <p className='flex justify-center underline underline-offset-2'>Demo Account Info</p> 
                                        <p><span className='font-bold'>Email:</span> email@email.com</p>
                                        <p><span className='font-bold'>Password:</span> 123456</p>
                                    </div>
                                    <div className='mx-auto'>
                                        <a href='http://EctorGrow.com' target='_blank' rel='noreferrer'>
                                            <button className="text-white bg-emerald-400 p-2  focus:outline-none hover:bg-emerald-600 rounded-xl">
                                                Visit Ector Grow
                                            </button>                    
                                        </a>
                                    </div>
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
