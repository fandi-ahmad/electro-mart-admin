import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser, faBurger, faList, faComputer } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect } from "react";

export const Sidebar = () => {
    const location = useLocation()

    const setActive = (id) => {
        document.getElementById(id).classList.remove('hidden')
    }

    useEffect(() => {
        if (location.pathname === '/') {
            setActive('dashboard')
        } else if (location.pathname === '/data-admin') {
            setActive('data-admin')
        } else if (location.pathname === '/menu-bazar') {
            setActive('menu-bazar')
        } else if (location.pathname === '/data-pesanan') {
            setActive('data-pesanan')
        }
    }, [location]);

    return (
        <>
            <aside className="z-20 hidden w-64 overflow-y-auto bg-white md:block flex-shrink-0" >
                <div className="py-4 text-gray-500 ">
                    <a className="ml-6 text-lg font-bold text-gray-800" href="#" >
                        SEEBUY
                    </a>
                    <ul className="mt-6">
                        <li className="relative px-6 py-3">
                            <span id="dashboard" className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg hidden" aria-hidden="true" ></span>
                            <NavLink to={'/'} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                                <FontAwesomeIcon icon={faHouse} />
                                <span className="ml-4">Dashboard</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className="relative px-6 py-3">
                            <span id="data-admin" className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg hidden" aria-hidden="true" ></span>
                            <NavLink to={'/data-admin'} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                                <FontAwesomeIcon icon={faUser} />
                                <span className="ml-4">Data Admin</span>
                            </NavLink>
                        </li>

                        <li className="relative px-6 py-3">
                            <span id="menu-bazar" className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg hidden" aria-hidden="true" ></span>
                            <NavLink to={'/item'} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                                <FontAwesomeIcon icon={faComputer} />
                                <span className="ml-4">Item</span>
                            </NavLink>
                        </li>

                        <li className="relative px-6 py-3">
                            <span id="data-pesanan" className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg hidden" aria-hidden="true" ></span>
                            <NavLink to={'/data-pesanan'} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                                <FontAwesomeIcon icon={faList} />
                                <span className="ml-4">Data Pesanan</span>
                            </NavLink>
                        </li>
                        
                    </ul>
                    <div className="px-6 my-6">
                        <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                            Create account
                            <span className="ml-2">+</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}