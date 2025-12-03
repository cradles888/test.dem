const CardBook = ({title, desc}) => {
    return(
        <div className="shadow-2xl bg-gray-200 border-gray-600 rounded-xl py-5 px-5 space-y-4 ">
          <h2 className="font-bold text-3xl text-black">{title}</h2>
          <p className="text-xl text-black">{desc}</p>
          <hr className="text-gray-400"/>
        <div className="text-gray-500 text-md space-x-2">
            <span>🕮 139 стр. |</span>
            <span><span className="text-[15px]">🕔</span> 8 часов |</span>
            <span>© Lukianov V</span>
        </div>
          <button className="border border-indigo-200 rounded-md py-2 mt-5 px-4 bg-indigo-600 focus:indigo-b-emerald-700 shadow-2xl shadow-indigo-100 hover:shadow-indigo-950 hover:duration-125">Читать</button>
        </div>
    );
}

export default CardBook;