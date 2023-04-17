import { React, useEffect, useState } from 'react'
import { Pagination } from '../components/Pagination'
import { Adminpanel } from '../layouts/Adminpanel'
import { GetItem } from '../api/itemApi'

const Item = () => {

    const getAllData = async () => {
        try {
            const response = await GetItem(1, 5)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <Adminpanel>
            <h2 className="mb-6 text-2xl font-semibold text-gray-700">Data Admin</h2>

            {/* <!-- New Table --> */}
            <main className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                                <th className="px-4 py-3">Client</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y" >
                            <tr className="text-gray-700 ">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                                                alt=""
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Jolina Angelie</p>
                                            <p className="text-xs text-gray-600">Unemployed</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm">$ 369.95</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full">
                                        Pending
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9">
                    <span className="flex items-center col-span-3">
                        Showing 21-30 of 100
                    </span>
                    <span className="col-span-2"></span>
                    {/* <!-- Pagination --> */}
                    <Pagination/>
                </div>
            </main>
        </Adminpanel>
    )
}

export default Item