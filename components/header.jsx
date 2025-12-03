import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className="container mx-auto flex py-3 justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl">📚</span>
        </div>

        <h3 className="text-2xl font-bold text-black">
          Центральная библиотека
        </h3>
      </div>
      <div>
        <Link href="/login" className="text-black text-2xl">Вход в личный профиль</Link>
      </div>
      <div>
        <h4 className="text-xl font-bold text-black pl-4 my-2 border-l-2 border-gray-500">
          +7 (495) 123-45-67
        </h4>
      </div>
    </header>
  );
};

export default HeaderComponent;
