import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/christian-carteno-b89211205/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ChrisCarteno" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com/chrispychipp" target="_blank"><FaInstagram/></a>

    </div>
  )
}

export default HeaderSocials