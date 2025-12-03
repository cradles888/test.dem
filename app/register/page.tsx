'use client'

import { Poltawski_Nowy } from "next/font/google"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


const PageLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        
        try {
            
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email, password})
            })

            if (res.ok) {
                alert('fsd')
                router.push('/login')
            } 
        } catch (error) {
            setError("Ошибка регистрации (полная)" + error)
            console.error('Полная ошибка: ', error)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            {error && (
                <div className="bg-red-100 text-red-700 border border-red-700 py-3 px-4">
                    {error}
                </div> 
            )}
            <div className="grid justify-items-center max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Регистрация</h1>
                <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Логин</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" required className="appearance-none w-full outline-none border border-gray-400 bg-white text-gray-600 rounded-md px-3 py-2 focus:border-orange-300"/>
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Почта</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required className="appearance-none w-full outline-none border border-gray-400 bg-white text-gray-600 rounded-md px-3 py-2 focus:border-orange-300"/>
                </div>
                <div>
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Пароль</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required className="appearance-none w-full outline-none border border-gray-400 bg-white text-gray-600 rounded-md px-3 py-2 focus:border-orange-300"/>
                </div>
            <button type="submit" className="w-full bg-blue-700 rounded-md py-2 px-5 text-lg mt-5 shadow-2xl shadow-blue-200 hover:shadow-2xl hover:bg-indigo-800 hover:shadow-indigo-500">Зарегистрироваться</button>
            <div className="flex space-x-1 justify-center">
                <p className="text-gray-600">Есть аккаунт?</p>
                <Link href="/login" className="text-blue-800">Войти</Link>
            </div>
            </div>
            </div>
        </form>
    )
}

export default PageLogin;