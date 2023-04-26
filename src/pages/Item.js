import { React, useEffect, useState } from 'react'
import { Pagination } from '../components/Pagination'
import { Adminpanel } from '../layouts/Adminpanel'
import { GetItem } from '../api/itemApi'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Item = () => {

    const [itemList, setItemList] = useState([])

    const getAllData = async () => {
        try {
            const response = await GetItem(1, 5)
            setItemList(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        if (itemList.length === 0) {
            getAllData();
        }
        console.log(itemList);
    }, [itemList])

    return (
        <Adminpanel>
            <h2 className="mb-6 text-2xl font-semibold text-gray-700">Data Admin</h2>

            {/* <!-- New Table --> */}
            <main className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                                <th className="px-4 py-3">no</th>
                                <th className="px-4 py-3">item iame</th>
                                <th className="px-4 py-3">price</th>
                                <th className="px-4 py-3">image</th>
                                <th className="px-4 py-3">description</th>
                                <th className="px-4 py-3">action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y">
                            {itemList.map((item, index) => {
                                return (
                                    <tr key={item.id} className="text-gray-700 ">
                                        <td className="px-4 py-3 text-sm">{index+1}</td>
                                        <td className="px-4 py-3">
                                            <p className="font-semibold">{item.item_name}</p>
                                        </td>
                                        <td className="px-4 py-3 text-sm">{item.price}</td>
                                        <td className="px-4 py-3 text-sm">{item.image}</td>
                                        <td className="px-4 py-3 text-sm">{item.description}</td>
                                        <td className="px-4 py-3">
                                            <button htmlFor="upsert" className='btn btn-sm p-0 text-2xl border-0 bg-transparent hover:bg-transparent text-blue-700 hover:text-blue-800 focus:outline-none mr-4'>
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            <button className='btn btn-sm p-0 text-2xl border-0 bg-transparent hover:bg-transparent text-red-700 hover:text-red-800 focus:outline-none'>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
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