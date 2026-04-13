function Home() {
    return (
        <div className="flex justify-center bg-blue-900">
            <div className='container grid grid-cols-2 text-white'>
                <div className="flex flex-col items-center justify-center gap-4 py-8">
                    <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
                    <p className='text-xl'>Expanda seus horizontes com a nossa farmácia!</p>

                    <div className="flex justify-around gap-4">
                        <button className='px-4 py-2 rounded bg-white text-blue-900 font-bold'>Ver produtos</button>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <img src="https://ik.imagekit.io/amazu/farmacia.png?updatedAt=1708453488252" alt="Imagem Home" className='w-2/3' />
                </div>
            </div>
        </div>
    );
}

export default Home;