import { React, useEffect, useState } from 'react'
import { Pagination } from '../components/Pagination'
import { Adminpanel } from '../layouts/Adminpanel'
import { GetItem, CreateItem, DeleteItem, UpdateItem } from '../api/itemApi'
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BaseModal, openModal, closeModal, ModalLoading } from '../components/BaseModal'
import { BaseInput, InputIcon, InputTextArea } from '../components/BaseInput'
import { ButtonGroup, ButtonSm } from '../components/BaseButton'
import { AlertConfirm, AlertError, AlertSuccess } from '../components/SweetAlert'

const Item = () => {

    const [itemList, setItemList] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [editOpen, setEditOpen] = useState(false)
    const [actionText, setActionText] = useState('')

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)

    const [lastPage, setLastPage] = useState(null)
    const [isPreviousBtn, setIsPreviousBtn] = useState(false)
    const [isNextBtn, setIsNextBtn] = useState(false)

    const getAllData = async () => {
        try {
            const response = await GetItem(page, limit)
            setItemList(response.data)
            setLastPage(response.meta.last_page)
            
            page > lastPage && lastPage != null ? setPage(lastPage) : setPage(page)
            page == 1 ? setIsPreviousBtn(true) : setIsPreviousBtn(false)
            page == lastPage ? setIsNextBtn(true) : setIsNextBtn(false)
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
            case 'image':
                setImage(value);
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
        setImage(item.image)
        setDesc(item.description)
        setActionText('update')
        setEditOpen(true)
        openModal('upsert')
    }

    const closeUpsert = () => {
        closeModal('upsert')
        resetData()
    }

    const createNew = () => {
        resetData()
        setActionText('create')
        openModal('upsert')
    }

    const resetData = () => {
        setId('')
        setName('')
        setPrice('')
        setImage('')
        setDesc('')
        setEditOpen(false)
    }

    const upsertItem = async () => {
        try {
            if (name === '' || price === '' || image === '' || desc === '') {
                AlertError('Ups! something wrong')
            } else {
                closeUpsert()
                openModal('modal-loading')
    
                const parsePrice = parseInt(price.replaceAll(',', ''));
                const sendJson = ({
                    item_name: name,
                    price: parsePrice,
                    image: image,
                    description: desc
                })
                if (id === '') {
                    await CreateItem(sendJson)
                } else {
                    await UpdateItem(id, sendJson)
                }

                closeModal('modal-loading')
                getAllData()
                AlertSuccess(`Item has been ${actionText}`)
            }
        } catch (error) {
            closeModal('modal-loading')
            AlertError()
        }
    }

    const confirmDeleteItem = async (idItem) => {
        try {
            setActionText('Deleted')
            openModal('modal-loading')
            await DeleteItem(idItem)

            closeModal('modal-loading')
            getAllData()
            AlertSuccess('Item has been deleted')
        } catch (error) {
            closeModal('modal-loading')
            AlertError()
        }
        
    }

    const deleteItem = (idItem) => {
        AlertConfirm({
            title: 'Delete?',
            confirmText: 'Yes, Delete It',
            preConfirm: () => {
                confirmDeleteItem(idItem)
            }
        })
    }

    useEffect(() => {
        getAllData();
    }, [page, limit, isPreviousBtn, isNextBtn, lastPage])

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
            <div className='mb-4 flex justify-between items-center'>
                <h2 className="text-2xl font-semibold text-gray-700">Data Item</h2>
                <ButtonSm onClick={createNew} >
                    <span className='mr-2'>create</span>
                    <FontAwesomeIcon icon={faPlus} />
                </ButtonSm>
            </div>
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
                                            <button onClick={() => deleteItem(item.id)} className='btn btn-sm p-0 text-2xl border-0 bg-transparent hover:bg-transparent text-red-700 hover:text-red-800 focus:outline-none'>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <Pagination>
                    <span className="flex items-center col-span-3">
                        Showing 21-30 of 100
                    </span>
                    <ButtonGroup
                        leftDisabled={isPreviousBtn} rightDisabled={isNextBtn}
                        leftClick={() => setPage(page-1)} rightClick={() => setPage(page+1)}
                        middle={`page ${page} of ${lastPage}`}
                    />
                </Pagination>
            </main>

             {/* ===== upsert modal ===== */}
             <BaseModal id='upsert' title={actionText + ' item'}>
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
                <div className="modal-action pt-4">
                    <label onClick={closeUpsert} className="btn btn-error capitalize mr-2">close</label>
                    <label onClick={upsertItem} className="btn btn-info capitalize">{actionText}</label>
                </div>
            </BaseModal>
            <ModalLoading id='modal-loading' title={actionText+' item'} />


        </Adminpanel>
    )
}

export default Item