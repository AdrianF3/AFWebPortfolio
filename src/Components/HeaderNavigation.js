import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

export default function HeaderNavigation() {
    const [isMobileMenuOpen,
        setIsMobileMenuOpen] = useState(false)
    const [isPortfolioOpen,
        setIsPortfolioOpen] = useState(false)

    const defaultMenu = (
        <div className='hidden md:flex flex-row gap-4 md:mr-4 my-auto'>
            <NavLink to='/'>
                <p className=''>Home</p>
            </NavLink>
            <NavLink to=''>
                <p>Get In Touch</p>
            </NavLink>
            <div className='flex flex-col justify-center text-center'>
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
                            <NavLink to='/ytcontroller'>
                                <p>YouTube Controller</p>
                            </NavLink>
                            <NavLink to=''>
                                <p>Ector Grow</p>
                            </NavLink>
                        </ul>
                    </div> </> : null}
            </div>
        </div>
    )

    const mobileMenu = (
        <div className='flex flex-col justify-center text-center gap-2 py-2'>
            <NavLink to='/'>
                <p className=''>Home</p>
            </NavLink>
            <NavLink to=''>
                <p>Get In Touch</p>
            </NavLink>
            <p className='font-bold uppercase border-b-2 border-white'>Portfolio Projects</p>
            <NavLink to='/weather'>
                <p className=''>Weather Project</p>
            </NavLink>
            <NavLink to='/billsplit'>
                <p className=''>Bill Splitter</p>
            </NavLink>
            <NavLink to='/ytcontroller'>
                <p>YouTube Controller</p>
            </NavLink>
            <NavLink to=''>
                <p>Ector Grow</p>
            </NavLink>
        </div>
    )

    // https://tailwindcomponents.com/component/navbar-hamburger-menu-for-ecommerce
    // console.log('isMobileMenuOpen', isMobileMenuOpen)

    return ( <> <div className="flex flex-wrap place-items-center h-fit ">
        <section className="relative mx-auto">
            {/* <!-- navbar --> */}
            <nav className="flex justify-between bg-gray-900 text-white w-screen">
                <div className="py-6 flex justify-between w-full">
                    {/* <a className="text-3xl font-bold font-heading px-5" href="#">
                    </a> */}
                    <NavLink to='/'>
                        <h3
                            className='text-2xl p-2 tracking-wider uppercase m-auto md:ml-10 text-center'>
                            Adrian Fregoso
                        </h3>
                    </NavLink>

                    {/* <!-- Nav Links --> */}
                    {/* Full Display */}
                    <div className='px-5'>
                        {isMobileMenuOpen
                            ? mobileMenu
                            : defaultMenu}
                    </div>

                </div>
                {/* <!-- Open/Close Menu --> */}
                <div
                    className='md:hidden p-3 transition duration-150 ease-in-out'
                    onClick={() => {
                    isMobileMenuOpen
                        ? setIsMobileMenuOpen(false)
                        : setIsMobileMenuOpen(true)
                }}>
                    {!isMobileMenuOpen
                        ? <i className='material-icons'>menu</i>
                        : <i className='material-icons'>close</i>
}
                </div>
            </nav>

        </section>
    </div> </>
  )
}