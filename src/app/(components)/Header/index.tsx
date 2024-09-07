import React from 'react'

type HeadersProps = {
    nome: string;
}

const Headers = ({ nome }: HeadersProps) => {
  return (
    <h1 className='text-2xl font-semibold text-gray-700'>{nome}</h1>
  )
}

export default Headers;