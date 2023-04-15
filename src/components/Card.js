import React from 'react'

export const Card = (props) => {
    return (
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md border drop-shadow">
            <div className={`p-3 mr-4 text-${props.color}-500 bg-${props.color}-100 rounded-full`} >
                <div className='w-5 h-5'>
                    <b>ico</b>
                </div>
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-gray-600" >
                    {props.title}
                </p>
                <p className="text-lg font-semibold text-gray-700" >
                    {props.value}
                </p>
            </div>
        </div>
    )
}
