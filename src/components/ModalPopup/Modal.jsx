import React from 'react'

const Modal = ({id, header, main, footer, onClose}) => {
  return (
    <div id={id || 'Modal'} className='modal animate-fade-in'>
      <div className='bg-white animate-slide-up'>
        <header id='header' className='bg-cyan-400 flex justify-between px-5 h-full items-center'>
          <h2>{header ? header : 'Header'}</h2>

          <button onClick={onClose} className='border rounded-full bg-violet-800 text-white w-8 h-8 text-xl' id='close'>&times;</button>

        </header>
        <main id='main' className='bg-gray-700 text-white'>
          {
            main ? main : <div>This is modal</div>
          }
        </main>
        <footer id='footer' className='bg-red-600 text-black'>
          {
            footer ? footer : <div>'This is footer'</div>
          }
        </footer>
      </div>
    </div>
  )
}

export default Modal
