import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        console.log('Запрос на регистрацию получен');

        const { title, desc } = await req.json()

        if (!title || !desc) {
            console.log("Какое-то из полей пришло в запрос пустым");
            return NextResponse.json(
                { error: 'Все поля обязательны' },
                { status: 400 }
            );
        }
        console.log("Поля не пустые", title, desc)
        // const user = await prisma.user.findUnique({
        //     where: { title }
        // })
        // console.log("Поиск на уникальность пройдена", user)
        // if (user) {
        //     return NextResponse.json(
        //         { error: 'Пользователь с таким email уже существует' },
        //         { status: 400 }
        //     )
        // }


        const newBook = await prisma.book.create({
            data: {
                title,
                desc
            }
        })
        console.log("Книга создана", newBook);
        

        return NextResponse.json({
            message: 'Книга создана',
            user: { id: newBook.id, title: newBook.title, desc: newBook.desc }
        })
    } catch (error) {
        return NextResponse.json(
            { error: 'Ошибка' },
            { status: 500 }
        )
    }
}