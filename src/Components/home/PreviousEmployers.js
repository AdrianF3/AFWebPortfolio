import React from 'react'
import appleSVG from '../../images/apple.svg'
import disneylandSVG from '../../images/disneyland.svg'
import stratosphereSVG from '../../images/stratosphere.png'



export default function PreviousEmployers() {
  return (
  <section className="text-gray-600 body-font bg-gradient-to-b from-cyan-700 to-cyan-900 shadow-xl rounded-xl mx-4">
    <div className="container px-5 py-20 mx-auto">
      <div className='mb-8'>
        <h2 className='text-white text-3xl text-center font-bold sm:text-4xl tracking-wide'>
          Previous Employers
        </h2>
      </div>
      <div className="flex flex-wrap -m-4">

        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 bg-gray-200 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="h-28 lg:h-48 md:h-36 w-auto object-contain m-auto" src={disneylandSVG} alt="Disneyland Resort Logo"/>
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Attractions Operator, Trainer &amp; Lead</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Disneyland Resort</h1>
              <p className="leading-relaxed mb-3">
                Working as an Attractions Operator, Trainer and finally as a Lead in Disney's California Adventure.
              </p>
              <div className="flex items-center flex-wrap ">
                Anaheim, CA
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  2006 
                  <i className='material-icons'>navigate_next</i>
                  2011
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 bg-gray-200 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="h-24 lg:h-48 md:h-36 w-auto object-contain p-2 mt-4 rounded-xl m-auto" src={stratosphereSVG} alt="blog"/>
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Tower Supervisor</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Stratosphere Hotel, Casino &amp; Tower</h1>
              <p className="leading-relaxed mb-3">
                Working as a Supervisor for the Stratosphere Tower as well as spending some time at the Hotel Front desk.
              </p>
              <div className="flex items-center flex-wrap">
                Las Vegas, NV
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  2011
                  <i className='material-icons'>navigate_next</i>
                  2014
                </span>                
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 bg-gray-200 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="h-32 lg:h-48 md:h-36 w-auto object-contain m-auto p-5" src={appleSVG} alt="blog"/>
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Operations Specalist</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Apple (retail)</h1>
              <p className="leading-relaxed mb-3">
                Working with the Operations/Inventory Team &amp; assisting with sales and general support within the store.
              </p>
              <div className="flex items-center flex-wrap ">
                Lone Tree, CO
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  2014
                  <i className='material-icons'>navigate_next</i>
                Present
                </span>                
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</section>
  )
}
