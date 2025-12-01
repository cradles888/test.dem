import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        console.log('Запрос на регистрацию получен');

        const { email, password, name } = await req.json()

        if (!email || !password || !name) {
            console.log("Какое-то из полей пришло в запрос пустым");
            return NextResponse.json(
                { error: 'Все поля обязательны' },
                { status: 400 }
            );
        }
        console.log("Поля не пустые", email, password, name)
        const user = await prisma.user.findUnique({
            where: { email }
        })
        console.log("Поиск на уникальность пройдена", user)
        if (user) {
            return NextResponse.json(
                { error: 'Пользователь с таким email уже существует' },
                { status: 400 }
            )
        }

        const hashPassword = await bcrypt.hash(password, 12)

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashPassword,
                name
            }
        })

        return NextResponse.json({
            message: 'Пользователь создан',
            user: { id: newUser.id, email: newUser.email, name: newUser.name }
        })
    } catch (error) {
        return NextResponse.json(
            { error: 'Ошибка' },
            { status: 500 }
        )
    }
}