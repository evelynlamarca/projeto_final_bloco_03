function Footer() {
  return (
    <div className="flex justify-center text-white bg-blue-900">
      <div className="container flex flex-col items-center py-4">
        <p className='text-xl font-bold'>Farmácia Viva | Generation</p>
        <p className='text-lg'>Acesse nossas redes sociais</p>
        <div className='flex gap-2 text-2xl'>
          {/* Trocamos os ícones que dão erro por emojis temporários */}
          <span>🔗</span>
          <span>📸</span>
          <span>📘</span>
        </div>
      </div>
    </div>
  )
}

export default Footer