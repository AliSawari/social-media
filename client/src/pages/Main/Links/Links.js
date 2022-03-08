import React from 'react'
import LinkItem from './LinkItem'

const Links = () => {
  return (
    <div className='w-72 p-3 absolute bottom-5 flex flex-wrap gap-3'>
      <LinkItem title="Privacy And Terms" link="/terms" />
      <LinkItem title="Accessbility" link="/terms" />
      <LinkItem title="Help Center" link="/terms" />
      <LinkItem title="Adversting" link="/terms" />
      <LinkItem title="About Me" link="/terms" />
      <LinkItem title="Contact Us" link="/terms" />
    </div>
  )
}

export default Links