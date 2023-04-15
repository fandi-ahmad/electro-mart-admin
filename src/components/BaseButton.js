import React from 'react'

export const ButtonMd = (props) => {
    return (
        <button onClick={props.onClick}
        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple" >
            {props.children}
        </button>
    )
}

export const ButtonSm = (props) => {
    return (
        <button onClick={props.onClick} className='btn btn-sm bg-blue-600 hover:bg-blue-700 text-white border-none focus:outline-none capitalize'>
            {props.children}
        </button>
    )
}
