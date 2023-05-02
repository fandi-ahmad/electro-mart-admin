import { faBell, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { SearchInput } from './BaseInput'
import { useNavigate } from 'react-router-dom'
import { AlertConfirm } from './SweetAlert'

export const Navbar = () => {
    const navigate = useNavigate()
    const logOut = () => {
        AlertConfirm({
            title: 'Log Out',
            text: 'Do you want to log out?',
            preConfirm: () => {
                navigate('/login')
            }
        })
    }

    return (
        <header className="z-10 py-4 bg-white shadow-md ">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600">
               
                {/* <!-- Search input --> */}
                <SearchInput />
                <ul className="flex items-center flex-shrink-0 space-x-6">
                    
                    <li className="dropdown dropdown-end cursor-pointer">
                        <button className="relative align-middle px-1 text-lg rounded-md focus:outline-none focus:shadow-outline-purple" tabIndex={0}>
                            <FontAwesomeIcon icon={faBell} />
                            <span className="absolute m-1 top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full" ></span>
                        </button>
                        {/* <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white border-gray-100 text-gray-600 rounded-lg w-52">
                            <li className='font-semibold'><a>Item 1.1</a></li>
                            <li className='font-semibold'><a>Item 1.2</a></li>
                        </ul> */}
                    </li>

                    <li className="dropdown dropdown-end cursor-pointer">
                        <div className="dropdown dropdown-end">
                            <img className="object-cover w-8 h-8 rounded-full"
                                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                                alt="" tabIndex={0}
                            />
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white  border-gray-100 text-gray-600 rounded-lg w-52">
                                <li>
                                    <a onClick={logOut}>
                                        <FontAwesomeIcon icon={faRightFromBracket} />
                                        Log out
                                    </a>
                                </li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        </header>
    )
}
