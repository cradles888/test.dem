const stats = () => {
  return (
    <div className=" bg-gradient-to-br to-gray-100 from-blue-100 py-16 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Библиотека в цифрах
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
            <div className="text-gray-700">Книг в фонде</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-700">Мероприятий в год</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">25K</div>
            <div className="text-gray-700">Читателей</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">1925</div>
            <div className="text-gray-700">Год основания</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stats;
