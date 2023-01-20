import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function NavigationBar(props) {

    const mainLinkStyle = 'transition-all text-lg md:text-2xl m-auto tracking-wide hover:italic hover:text-slate-300 active:text-slate-600'
    const subLinkStyle = 'transition-all text-base md:text-lg m-auto tracking-wide hover:italic hover:text-slate-300 active:text-slate-600'

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 
        shadow-lg">
        <div className="container-fluid w-full flex px-6">
            {/* <!-- Additional links --> */}
            <div className="flex flex-row w-full items-center justify-between">
                <div className='flex justify-start'>
                    <Link to="/"><span className={mainLinkStyle}>Adrian Fregoso</span></Link>
                </div>
                <div className='flex justify-end'>                    
                    <ul className="list-style-none mr-auto">        
                        <li className="block float-left p-2">          
                            <Link to="/#portfolio-descriptions"><span className={subLinkStyle}>Projects</span></Link>
                        </li>
                        <li className="block float-left p-2">
                            <p onClick={props.handleScrollToBottom} className={subLinkStyle}>Get In Touch</p>
                        </li>
                    </ul>    
                </div>
            </div>    
        </div>
    </nav>
  )
}
