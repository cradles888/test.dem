import Image from "next/image";
import book1 from "../public/73Z_2108.w023.n001.896B.p1.896.jpg";

const WelcomeBlock = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 md:py-32 px-4 min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-6xl text-gray-800 font-bold">
              Добро пожаловать в{" "}
              <span className="text-blue-600">Центральную библиотеку</span>
            </h1>
            <p className="text-xl text-gray-800 mb-8 leading-relaxed max-w-2xl pt-5">
              Мы — больше чем просто библиотека. Это пространство для знаний,
              вдохновения и встреч. В нашем фонде более 100 000 книг, журналов и
              электронных ресурсов. Присоединяйтесь к нашему сообществу
              читателей!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <span className="font-medium text-gray-800">
                  Бесплатный абонемент
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <span className="font-medium text-gray-800">
                  Электронный каталог
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <span className="font-medium text-gray-800">
                  Клубы по интересам
                </span>
              </div>
            </div>
            <a
              href="#bibl"
              className="bg-blue-700 rounded-md py-3 px-8 text-2xl mt-8 shadow-2xl shadow-blue-200 hover:shadow-2xl hover:bg-indigo-800 hover:shadow-indigo-500"
            >
              Выбрать книгу
            </a>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl overflow-hidden shadow-2xl transform rotate-1">
                <Image
                  src={book1}
                  alt="книга"
                  className="w-full h-[550px] object-cover transform -rotate-1 scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WelcomeBlock;
