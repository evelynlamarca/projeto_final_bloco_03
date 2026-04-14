import farmImg from '../assets/farm.webp';

function Home() {
    return (
        <div className="bg-sky-100 min-h-screen w-full flex justify-center items-center">
            <div className='container grid grid-cols-1 md:grid-cols-2 text-slate-900 p-8'>
                
                {/* Lado Esquerdo: Texto e Botões */}
                <div className="flex flex-col gap-4 items-center md:items-start justify-center py-8">
                    <h2 className='text-6xl font-bold leading-tight text-center md:text-left'>
                        Seja Bem-Vindo!
                    </h2>
                    <p className='text-2xl font-medium text-center md:text-left'>
                        Aqui você encontra Medicamentos e Cosméticos!
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 mt-6">
                        <button className='rounded bg-indigo-700 text-white py-3 px-10 hover:bg-indigo-800 font-bold text-lg shadow-md'>
                            + Produto
                        </button>
                        <button className='rounded bg-indigo-700 text-white py-3 px-10 hover:bg-indigo-800 font-bold text-lg shadow-md'>
                            + Categoria
                        </button>
                    </div>
                </div>

                {/* Lado Direito: Imagem */}
                <div className="flex justify-center items-center">
                    <img 
                        src={farmImg} 
                        alt="Farmacêutica" 
                        className='w-full max-w-lg object-contain'
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;