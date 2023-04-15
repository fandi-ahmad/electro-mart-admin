import React from 'react'

export const AuthLayout = ({children}) => {
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    {children}
                </div>
            </div>
        </div>
    )
}
