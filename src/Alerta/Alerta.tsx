import React, { ReactNode } from 'react'

function Alerta({children}:{children:ReactNode}) {
  return (
    <div className='text-center text-red-500'>
      {children}
    </div>
  )
}

export default Alerta
