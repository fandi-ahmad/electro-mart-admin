import React from 'react'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const Adminpanel = ({children}) => {
    return (
        <div className='flex h-screen bg-gray-200'>
            <Sidebar />
            <div className="flex flex-col flex-1 w-full">
                <Navbar/>
                <div className="h-full overflow-y-auto pb-6">
                    <div className="container px-6 py-6 mx-auto grid">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
