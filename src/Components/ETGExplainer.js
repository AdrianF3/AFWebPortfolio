import React from 'react'
import etgMini from '../images/etgLogoWhiteBG.svg'


export default function ETGExplainer() {
  return (
    <section className="text-gray-600 body-font border-4 border-green-300 m-2 rounded-xl bg-green-300/20">
        <div className="container px-5 py-24 mx-auto flex flex-row justify-evenly m-2">
            <div className='w-3/12'>                
                <img
                    className='' 
                    src={etgMini} 
                    alt='Ector Grow Logo' 
                />
            </div>
            <div className='w-8/12'>
                <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">EctorGrow.com</h2>
                <p className="leading-relaxed text-base">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
                <div className="flex md:mt-4 mt-6">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                    <a className="text-indigo-500 inline-flex items-center ml-4">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
