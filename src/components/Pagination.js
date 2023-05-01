import React from 'react'

export const Pagination = (props) => {
    return (
        <div className="flex justify-between px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9">
            {props.children}
        </div>
    )
}
