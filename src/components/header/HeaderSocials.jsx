import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/christian-carteno-b89211205/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/ChrisCarteno" target="_blank" rel='noreferrer' ><FaGithub/></a>
        <a href="https://instagram.com/chrispychipp" target="_blank" rel='noreferrer'><FaInstagram/></a>

    </div>
  )
}

export default HeaderSocials