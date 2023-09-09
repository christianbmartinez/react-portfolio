import { socialLinks } from '../constants'
import {
  FaGithub,
  FaTiktok,
  FaCodepen,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'

const Socials = () => {
  return (
    <ul className='inline-flex'>
      <li className='px-5 text-white hover:opacity-90 transition duration-150 ease-in-out'>
        <a
          href={socialLinks.github}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Github Link'
        >
          <FaGithub />
        </a>
      </li>
      <li className='px-5 text-white hover:opacity-90 transition duration-150 ease-in-out'>
        <a
          href={socialLinks.codepen}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Codepen Link'
        >
          <FaCodepen />
        </a>
      </li>
      <li className='px-5 text-white hover:opacity-90 transition duration-150 ease-in-out'>
        <a
          href={socialLinks.tiktok}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Tiktok Link'
        >
          <FaTiktok />
        </a>
      </li>
      <li className='px-5 text-white hover:opacity-90 transition duration-150 ease-in-out'>
        <a
          href={socialLinks.twitter}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Twitter Link'
        >
          <FaTwitter />
        </a>
      </li>
      <li className='px-5 text-white hover:opacity-90 transition duration-150 ease-in-out'>
        <a
          href={socialLinks.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | LinkedIn Link'
        >
          <FaLinkedin />
        </a>
      </li>
    </ul>
  )
}

export default Socials
