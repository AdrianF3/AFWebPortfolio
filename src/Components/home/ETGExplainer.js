import React from 'react'
import etgMini from '../../images/etgLogoWhiteBG.svg'



export default function ETGExplainer() {
  return (
    <section className="m-20 text-gray-600 body-font border-4 border-green-300 rounded-xl bg-green-300/20">
        <div className="container px-5 py-24 mx-auto flex flex-col justify-evenly m-2">
            <div className='w-10/12 md:w-3/12 m-auto drop-shadow-2xl py-10'>                
                <img
                    className='' 
                    src={etgMini} 
                    alt='Ector Grow Logo' 
                />
            </div>
            <div className='w-8/12 m-auto'>                
                <div>
                    <p className="leading-relaxed py-2 text-base">
                        This website started as a side project for my personal use, which turned into a project I worked on for my portfolio and is now a small, but growing community of personal, at home cannabis growers. 
                        This project has given me the experince of needing to consider all aspects of designing, developing and deploying a project, managaing the front-end, back-end, user experience, data management &amp; security.
                    </p>
                    <p className="leading-relaxed py-2 text-base">
                        With the tech stack above, I've used <span className='font-bold text-wide'>Firebase Authentication</span> for user account management, <span className='font-bold text-wide'>Firestore</span> to save data for user accounts, plant data, support requests &amp; social comments with other users.
                        <span className='font-bold text-wide'>Firebase Storage</span> to save user uploaded images, including profile thumbnails and images of the plants they grow. 
                        
                    </p>
                    <p>
                        Users also have the ability to track their plants through several phases of growth, while documenting 
                        their results with imagees, custom notes &amp; the ability to comment & interact with another users plants in addition to getting helpful information amd the ability to customize nutrient schedules for their plants. 
                    </p>
                    <p className="leading-relaxed py-2 text-base">
                        I realize that not everyone is comfortable with cannabis, which is why I created a demo account that anyone can log in to wihtout seeing anything related to cannabis, but
                        instead will be pictures of cute dogs, mostly my Corgi. 
                    </p>
                        
                </div>
                
                {/* Ector Grow Demo Info & Link */}
                <div className="flex flex-col md:flex-row justify-center py-10 gap-4">
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
        </div>
    </section>
  )
}
