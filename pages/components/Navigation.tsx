import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../../styles/Navigation.module.css'

const Navigation: NextPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const setIsMobileMenuOpenHandler = (isOpen: boolean) => {
        setIsMobileMenuOpen(isOpen)
    }
    const menuItems = [
        { title: 'Home', href: '/' },
        { title: 'Education', href: '#education' },
        { title: 'Contact Us', href: '#contact' },
    ]

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center no-underline">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-gray-800">SyntropicA</span>
                    </a>
                    <div className="flex items-center">
                        <ul className={`${isMobileMenuOpen && styles.open} ${styles.navigation}`}>
                            {menuItems.map((menuItem) =>
                                <li>
                                    <a className={`${styles.navigationItem}`} href={menuItem.href}>
                                        {menuItem.title}
                                    </a>
                                </li>
                            )
                            }
                        </ul>
                        <a href="/documentation" className="ml-3 no-underline text-white bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Manual</a>
                        <button onClick={() => setIsMobileMenuOpenHandler(!isMobileMenuOpen)} data-collapse-toggle="mobile-menu" type="button" className={`${styles.hamburger} inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
                <ul className={`${isMobileMenuOpen && styles.open} ${styles.mobileNavigation}`}>
                    {menuItems.map((menuItem) =>
                        <li>
                            <a onClick={() => setIsMobileMenuOpenHandler(false)} className={`${styles.mobileNavigationItem}`} href={menuItem.href}>
                                {menuItem.title}
                            </a>
                        </li>
                    )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navigation