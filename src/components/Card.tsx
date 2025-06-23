import React from 'react'

interface CardProps {
  text: string
}

const Card: React.FC<CardProps> = ({text}) => {
  return (
    <div className="text-xl text-red-600 bg-blue-600 p-5 text-center">{text}</div>
  )
}

export default Card