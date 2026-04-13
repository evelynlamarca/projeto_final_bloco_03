import { User, ShoppingCart, MagnifyingGlass } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex justify-center w-full py-4 text-white bg-blue-900'>
            <div className="container flex justify-between text-lg">
                <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia Viva</Link>

                <div className='relative flex items-center justify-center w-1/2 text-black'>
                    <input className="w-full px-4 py-2 rounded-lg focus:outline-none"
                        type="search" placeholder="Pesquisar produtos" />
                    <button className='absolute right-2'>
                        <MagnifyingGlass size={24} weight="bold" className='text-blue-900' />
                    </button>
                </div>

                <div className='flex gap-4'>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    <User size={32} weight='bold' />
                    <ShoppingCart size={32} weight='bold' />
                </div>
            </div>
        </div>
    )
}

export default Navbar