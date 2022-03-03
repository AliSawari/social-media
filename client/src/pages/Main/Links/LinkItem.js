import React from 'react'
import { Link } from 'react-router-dom'

const LinkItem = ({title  , link}) => {
  return (
    <Link to={link} className="font-main text-sm text-gray-500 text-center">{title}</Link>
  )
}

export default LinkItem