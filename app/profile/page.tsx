"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";

export default function PageProfile() {
  const { data: session, status } = useSession();
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [books, setBooks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('api/books')
    .then(res => res.json())
    .then(data => {
      setBooks(data.books)
    })
    .catch(error => {
      console.error('Ошибка', error)
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        if (!title || !desc) {
          setError('Поля пустые')
        }
        try {
            console.log("Процесс начат");
            
            const res = await fetch('/api/addBook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title, desc})
            })

            if (res.ok) {
                router.push('/profile')
            } 
        } catch (error) {
            setError("Ошибка регистрации книги (полная)" + error)
            console.error('Полная ошибка: ', error)
        }
    }

  if (status === "authenticated") {
    return (
      <div className="text-black justify-center grid">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Профиль пользователя: {session.user?.name}</h1>
        <p className="w-full outline-none border border-gray-400 bg-white text-gray-600 rounded-md px-3 py-2 focus:border-orange-300">Email: {session.user?.email}</p>
        <form className="grid pt-3"
          action={async () => {
            await signOut();
          }}
        >
          <button type="submit" className="w-full py-2 flex justify-center bg-red-100 text-amber-700 border border-red-400 active:bg-red-400">Выйти</button>
        </form>
        <div className="pt-5">
          <h2>Операции</h2>
          <form onSubmit={handleSubmit}>
            {error && (
                <div className="bg-red-100 text-red-700 border border-red-700 py-3 px-4">
                    {error}
                </div> 
            )}
            <div className="grid justify-items-center max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Внести книгу в учёт</h1>
                <div className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Заголовок</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" required className="appearance-none w-full outline-none border border-gray-400 bg-white text-gray-600 rounded-md px-3 py-2 focus:border-orange-300"/>
                </div>
                <div>
                    <label htmlFor="desc" className="sr-only">Описание</label>
                    <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" name="desc" id="desc" required className="appearance-none w-full outline-none border border-gray-400 bg-white text-gray-600 rounded-md px-3 py-2 focus:border-orange-300"/>
                </div>
            </div>
            </div>
          <button type="submit" className="w-full py-2 flex justify-center bg-blue-100 text-blue-700 border border-blue-400 active:bg-blue-400">Добавить</button>
        </form>
        </div>
        <div>
          <h3>Общий список книг</h3>
          {books.map((book) => (
            <div key={book.id}>
              <p>Название книги: {book.title}</p>
              <p>Описание книги: {book.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
