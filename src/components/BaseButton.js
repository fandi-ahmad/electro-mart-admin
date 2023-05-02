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

export const ButtonGroup = (props) => {

    const ButtonChild = ({onClick, disabled, text}) => {
        return (
            <button onClick={onClick} disabled={disabled} className="btn text-xs bg-gray-400 text-black hover:bg-gray-500 hover:outline-none hover:border-white focus:outline-none outline-none border-white">
                {text}
            </button>
        )
    }

    return (
        <div className="btn-group">
            <ButtonChild disabled={props.leftDisabled || false} onClick={props.leftClick} text={props.left || '«'} />
            <ButtonChild text={props.middle} />
            <ButtonChild disabled={props.rightDisabled || false} onClick={props.rightClick} text={props.right || '»'} />
        </div>
    )
}
