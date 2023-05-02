import { React, useState }from 'react'
import { AuthLayout } from '../layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
// import { LoginUser } from '../api/Auth'
import { AlertSuccess, AlertError } from '../components/SweetAlert'
import { ModalLoading, openModal, closeModal } from '../components/BaseModal'
import { ButtonMd } from '../components/BaseButton'

const Login = () => {
    const loginOffice = require('../assets/img/login-office.jpeg')
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const resetData = () => {
        setEmail('')
        setPassword('')
    }

    // const loginAccount = async () => {
    //     try {
    //         openModal('modal-loading')
    //         if (email === '' || password === '') {
    //             AlertError('Input cannot be empty')
    //         } else {
    //             const response = await LoginUser({
    //                 email: email,
    //                 password: password
    //             })
    //             resetData()
    //             if (response.code === 401) {
    //                 AlertError('Email or password is wrong')
    //             } else {
    //                 AlertSuccess('Loggin in successfully')
    //                 navigate('/')
    //             }
    //         }
    //         closeModal('modal-loading')
    //     } catch (error) {
    //         AlertError('Ups, something wrong!')
    //     }
    // }

    return (
        <AuthLayout>
            <div className="h-32 md:h-auto md:w-1/2">
                <img className="object-cover w-full h-full" src={loginOffice} alt="Office" />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700">
                    Login
                </h1>
                <label className="block text-sm">
                    <span className="text-gray-700">Email</span>
                    {/* <input name='email' value={email} onChange={handleChange} type='email' placeholder="Your email" autoComplete='off' className="block w-full mt-1 text-sm text-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" /> */}
                    <input name='email' value={email} type='email' placeholder="Your email" autoComplete='off' className="block w-full mt-1 text-sm text-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" />
                </label>
                <label className="block mt-4 text-sm">
                    <span className="text-gray-700">Password</span>
                    {/* <input name='password' value={password} onChange={handleChange} type="password" placeholder="***************" autoComplete='off' className="block w-full mt-1 text-sm text-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" /> */}
                    <input name='password' value={password} type="password" placeholder="***************" autoComplete='off' className="block w-full mt-1 text-sm text-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" />
                </label>

                {/* <ButtonMd onClick={loginAccount}>Log in</ButtonMd> */}
                <ButtonMd >Log in</ButtonMd>

                <hr className="my-8" />

                <p className="mt-4">
                    <Link to={'/forgot-password'} className="text-sm font-medium text-purple-600 hover:underline" >
                        Forgot your password?
                    </Link>
                </p>
                <p className="mt-1">
                    <Link to={'/register'} className="text-sm font-medium text-purple-600 hover:underline" >
                        Create account
                    </Link>
                </p>
                </div>
            </div>
            <ModalLoading id='modal-loading'/>
        </AuthLayout>
    )
}

export default Login