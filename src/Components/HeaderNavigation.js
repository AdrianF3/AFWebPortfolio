import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

export default function HeaderNavigation(props) {
    const [isMobileMenuOpen,
        setIsMobileMenuOpen] = useState(false)
    const [isPortfolioOpen,
        setIsPortfolioOpen] = useState(false)

    const defaultMenu = (
        <div className='hidden md:flex flex-row gap-4 md:mr-4 my-auto'>
            <p className='my-auto' onClick={props.handleScrollToBottom}>Get In Touch</p>

            <div className='flex flex-col justify-center py-2 text-center'>
                <button
                    onClick={() => {
                    isPortfolioOpen
                        ? setIsPortfolioOpen(false)
                        : setIsPortfolioOpen(true)
                }}>
                    <p className='font-bold uppercase'>Portfolio Projects</p>
                </button>

                {isPortfolioOpen
                    ? <> <div className='border-2 border-gray-700 border-t-0 rounded-b-xl p-2'>
                        <ul>
                            <NavLink to='/weather'>
                                <p className=''>Weather Project</p>
                            </NavLink>
                            <NavLink to='/billsplit'>
                                <p className=''>Bill Splitter</p>
                            </NavLink>                            
                            {/* <NavLink to='https://EctorGrow.com'>
                            </NavLink> */}
                            <a href='https://EctorGrow.com' target='_blank' rel='noreferrer'>
                                <p>Ector Grow</p>
                            </a>
                        </ul>
                    </div> </> : null}
            </div>
        </div>
    )

    const mobileMenu = (
        <div className='flex flex-col justify-center text-center gap-2 py-2 mb-4 text-xs'>            
            <NavLink to=''>
                <p className=''>Get In Touch</p>
            </NavLink>
            <p className='font-bold uppercase border-b-2 border-white'>Portfolio Projects</p>
            <NavLink to='/weather'>
                <p className=''>Weather Project</p>
            </NavLink>
            <NavLink to='/billsplit'>
                <p className=''>Bill Splitter</p>
            </NavLink>
            {/* <NavLink to='/ytcontroller'>
                <p>YouTube Controller</p>
            </NavLink> */}
            <NavLink to=''>
                <p>Ector Grow</p>
            </NavLink>
        </div>
    )

    return ( <> 
        <div className="flex flex-row place-items-center h-fit ">
            <section className="relative mx-auto">
                {/* <!-- navbar --> */}
                <nav className="flex justify-between bg-gray-900 text-white w-screen">
                    <div className="py-6 flex justify-center w-9/12">                    
                        <NavLink to='/'>
                            <h3
                                className='text-2xl p-2 tracking-wider uppercase m-auto text-center'>
                                Adrian Fregoso
                            </h3>
                        </NavLink>

                        {/* <!-- Nav Links --> */}
                        {/* Full Display */}
                        {/* <div className='px-5'>
                            {isMobileMenuOpen
                                ? mobileMenu
                                : defaultMenu}
                        </div> */}

                    </div>
                    
                    {/* <!-- Open/Close Menu --> */}
                    <div className='flex flex-col my-auto w-3/12'>
                        <div
                            className='md:hidden p-3 transition duration-150 ease-in-out m-auto'
                            onClick={() => {
                            isMobileMenuOpen
                                ? setIsMobileMenuOpen(false)
                                : setIsMobileMenuOpen(true)
                            }}>
                            { !isMobileMenuOpen ? <i className='material-icons'>menu</i> : <i className='material-icons'>close</i> }
                        </div>

                        {/* Full Display */}
                        <div className='px-5'>
                            {isMobileMenuOpen
                                ? mobileMenu
                                : defaultMenu}
                        </div>

                    </div>
                </nav>
            </section>
        </div> 
    </>)
}