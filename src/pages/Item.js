import { React, useEffect, useState } from 'react'
import { Pagination } from '../components/Pagination'
import { Adminpanel } from '../layouts/Adminpanel'
import { GetItem } from '../api/itemApi'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BaseModal, openModal, closeModal } from '../components/BaseModal'
import { BaseInput, InputIcon, InputTextArea } from '../components/BaseInput'

const Item = () => {

    const [itemList, setItemList] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [editOpen, setEditOpen] = useState(false)


    const getAllData = async () => {
        try {
            const response = await GetItem(1, 5)
            setItemList(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'price':
                const newValue = value.replace(/[^0-9]/g, '');
                setPrice(formatNumber(newValue));
                break;
            case 'desc':
                setDesc(value);
                break;
            default:
                break;
        }
    };

    const editItem = (item) => {
        setId(item.id)
        setName(item.item_name)
        setPrice(formatNumber(item.price));
        setDesc(item.description)
        setEditOpen(true)
        openModal('upsert')
    }

    const closeUpsert = () => {
        closeModal('upsert')
        // resetData()
    }
    
    useEffect(() => {
        if (itemList.length === 0) {
            getAllData();
        }
        console.log(itemList);
    }, [itemList])

    const limitChar = (params, value) => {
        if (params.length > value) {
            return params.slice(0, value) + " ...";
        } else {
            return params;
        }
    }

    const formatNumber = (number) => {
        return Number(number).toLocaleString();
    };

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
                                <th className="px-4 py-3">item name</th>
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
                                            <p className="font-semibold">{limitChar(item.item_name, 20)}</p>
                                        </td>
                                        <td className="px-4 py-3 text-sm">Rp {formatNumber(item.price)}</td>
                                        <td className="px-4 py-3 text-sm">{item.image}</td>
                                        <td className="px-4 py-3 text-sm">{limitChar(item.description, 30)}</td>
                                        <td className="px-4 py-3">
                                            <button onClick={() => editItem(item)} htmlFor="upsert" className='btn btn-sm p-0 text-2xl border-0 bg-transparent hover:bg-transparent text-blue-700 hover:text-blue-800 focus:outline-none mr-4'>
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
                {/* <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9">
                    <span className="flex items-center col-span-3">
                        Showing 21-30 of 100
                    </span>
                    <span className="col-span-2"></span>
                    <Pagination/>
                </div> */}
            </main>

             {/* ===== upsert modal ===== */}
             <BaseModal id='upsert' title='edit/update'>
                <div className='grid gap-4 md:grid-cols-2'>
                    <BaseInput name='name' value={name} onChange={handleChange} />
                    <InputIcon icon='Rp.' name='price' value={price} onChange={handleChange} />
                    <BaseInput name='image' value={image} onChange={handleChange} />
                    {/* <div>
                        <InputFile name='image' onChange={handleChangeImage} id='imageForm' accept='image/*' />
                        {imageUrl && <img src={imageUrl} alt="preview" className='h-40 rounded-md mt-4' />}
                    </div> */}
                    <InputTextArea title='decription' name='desc' value={desc} onChange={handleChange} />
                </div>
                {/* <button onClick={cek} className='btn btn-sm'>cek</button> */}
                <div className="modal-action pt-4">
                    <label onClick={closeUpsert} className="btn btn-error capitalize mr-2">close</label>
                    {/* <label onClick={upsertBazar} className="btn btn-info capitalize">{actionText}</label> */}
                </div>
            </BaseModal>


        </Adminpanel>
    )
}

export default Item