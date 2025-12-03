const Footer = () => {
    return(
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 justify-items-center gap-12 mb-16">

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Центральная библиотека</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Пространство знаний и культурных событий с 1925 года. 
                  Мы стремимся сделать чтение доступным для всех.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition duration-300">
                    VK
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition duration-300">
                    TG
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition duration-300">
                    YT
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Контакты</h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-400 mt-1">📍</span>
                    <span>г. Москва, ул. Книжная, д. 15</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">📞</span>
                    <span>+7 (495) 123-45-67</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">✉️</span>
                    <span>info@library.ru</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">🕒</span>
                    <span>Пн-Пт: 10:00 - 20:00</span>
                  </li>
                </ul>
              </div>

            
            </div>

            <div className="pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="text-gray-500 text-sm">
                  © 2024 Центральная городская библиотека. Все права защищены.
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </footer>
    );
}

export default Footer;