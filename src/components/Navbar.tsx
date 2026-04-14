import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='w-full bg-blue-950 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg px-4">
          
          {/* Nome do Site / Logo */}
          <Link to='/home' className='text-2xl font-bold uppercase'>
            Farmácia Viva
          </Link>

          {/* Links de Navegação */}
          <div className='flex gap-6 font-medium'>
            <Link to='/categorias' className='hover:text-sky-300 transition-colors'>
              Categorias
            </Link>
            <Link to='/cadastrocategoria' className='hover:text-sky-300 transition-colors'>
              Cadastrar Categoria
            </Link>
            <div className='cursor-pointer hover:text-sky-300 transition-colors'>
              Sair
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;