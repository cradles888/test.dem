"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import CardBook from "@/components/cardBook";
import Footer from "@/components/footer";

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
      setError('Заполните все поля')
      return;
    }
    try {
      const res = await fetch('/api/addBook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, desc })
      })

      if (res.ok) {
        const updatedRes = await fetch('api/books')
        const data = await updatedRes.json()
        setBooks(data.books)
        setTitle('')
        setDesc('')
        setError('Книга успешно добавлена!')
        setTimeout(() => {
          setError('')
        }, 3000);
      }
    } catch (error) {
      setError("Ошибка при добавлении книги")
      console.error('Ошибка: ', error)
    }
  }

  if (status === "authenticated") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Добро пожаловать, {session.user?.name}!
                </h1>
              </div>
              
              <button 
                onClick={() => signOut()}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Выйти из аккаунта
              </button>
            </div>
          </div>

          <div className="flex justify-stretch gap-8 mb-12">
            <div className="bg-white w-full rounded-2xl shadow-lg p-6 lg:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Добавить новую книгу</h2>
                <p className="text-gray-600">Заполните информацию о книге для добавления в библиотеку</p>
              </div>

              {error && (
                <div className={`mb-6 p-4 rounded-lg ${error.includes('успешно') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  <div className="flex items-center">
                    {error}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Название книги <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    name="title"
                    id="title"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:border-blue-500 transition duration-200"
                    placeholder="Введите название книги"
                  />
                </div>

                <div>
                  <label htmlFor="desc" className="block text-sm font-medium text-gray-700 mb-2">
                    Описание <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    name="desc"
                    id="desc"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:border-blue-500 transition duration-200 resize-none"
                    placeholder="Введите описание книги"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform shadow-lg hover:shadow-xl"
                >
                  Добавить книгу в библиотеку
                </button>
              </form>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Библиотека</h2>
              </div>
            </div>

            {books.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Библиотека пуста</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Добавьте свою первую книгу, используя форму выше
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {books.map((book) => (
                  <div key={book.id} className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <CardBook
                      title={book.title}
                      desc={book.desc}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Требуется авторизация</h1>
          <p className="text-gray-600">Пожалуйста, войдите в систему для доступа к профилю</p>
        </div>
        <button
          onClick={() => router.push('/login')}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
        >
          Войти в систему
        </button>
      </div>
    </div>
  );
}