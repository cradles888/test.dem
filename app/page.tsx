'use client'
import Image from "next/image";
import Header from "@/components/header";
import WelcomeBlock from "@/components/welcome_block";
import CardBook from "@/components/cardBook";
import Footer from '@/components/footer'
import Stats from '@/components/stats'
import { useState, useEffect } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);

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
  return (
    <div className="grid">
      <Header />

      <WelcomeBlock />
      <Stats/>
      <div id="bibl" className=" bg-gradient-to-br from-gray-50 to-blue-50">
        <h2 className="bg-gray-50 text-4xl font-bold text-black relative pl-38 pt-18">
          Библиотека
        </h2>
        <div
          id="books-cards"
          className="contaiener px-40 grid grid-cols-4 pt-20 pb-10 mb-10 space-x-16 space-y-5"
        >
          {books.map((book) => (
            <CardBook key={book.id}
            title={book.title}
            desc={book.desc}
            />
          ))}
        </div>
        {/* <div className="flex justify-center">
          <button
            type="button"
            className="appearance-none text-black mb-4 bg-indigo-100 border border-indigo-500 w-fit rounded-md py-1 px-5 text-lg hover:bg-indigo-800 hover:shadow-2xl hover:shadow-indigo-500 hover:text-white hover:duration-125"
          >
            Показать больше..
          </button>
        </div> */}
      </div>
      <Footer/>
    </div>
  );
}
