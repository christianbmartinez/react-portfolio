import {
  FaMapPin,
  FaBriefcase,
  FaUniversity,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiTailwindcss,
  SiCss3,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from 'react-icons/si'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 1 }}
        className='flex flex-col justify-center items-center mt-52 pb-20 px-6 mx-auto lg:w-2/3'
      >
        <div className='flex flex-col min-w-0 break-words shadow-2xl rounded-xl bg-white dark:bg-slate-800'>
          <div className='px-6'>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full lg:w-2/3 px-4 lg:order-2 flex justify-center'>
                <div className='relative'>
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      delay: 0.25,
                    }}
                  >
                    <img
                      alt='Christian B Martinez'
                      src='/me.webp'
                      className='shadow-2xl rounded-full h-auto align-middle border-none absolute -m-[136px] -ml-20 lg:-ml-16'
                      style={{ maxWidth: '150px' }}
                      width={150}
                      height={150}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className='text-center mt-12'>
              <h3 className='text-4xl font-semibold leading-normal mb-2 text-zinc-900 dark:text-zinc-50'>
                Christian B. Martinez
              </h3>
              <div className='inline-flex text-sm leading-normal mt-0 mb-2 text-zinc-400 font-bold uppercase'>
                <FaMapPin className='mr-2 text-lg text-zinc-400 ' />
                Salt Lake City, Utah
              </div>
              <div className='flex flex-row justify-center items-center mb-2 mt-10 text-zinc-800 dark:text-zinc-50'>
                <FaBriefcase className='mr-2 text-lg text-zinc-400 dark:text-zinc-400' />
                Full Stack Bootcamp Student
              </div>
              <div className='flex flex-row justify-center items-center mb-2 text-zinc-800 dark:text-zinc-50'>
                <FaUniversity className='mr-2 text-lg text-zinc-400 dark:text-zinc-400' />
                University of Utah
              </div>
            </div>
            <div className='mt-10 py-10 border-t border-zinc-200 dark:border-zinc-400 text-center'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-9/12 px-4'>
                  <p className='mb-4 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200'>
                    Hey there! 🖐 I&apos;m Christian, I build apps for the web!
                    I have been coding for around 6 years as a hobby, although
                    recently i decided to take action and pursue a tech career.
                    I am currently a student at the U of U&apos;s coding
                    bootcamp. Follow me on&nbsp;
                    <a
                      href='https://www.twitter.com/_coderchris'
                      target='_blank'
                      rel='noreferrer'
                      className='opacity-75 underline'
                    >
                      twitter
                    </a>
                    &nbsp;to stay up to date on my tech journey!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className='w-full text-center'>
        <h1 className='mb-12 text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-zinc-900'>
          Skills
        </h1>
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center mb-20 mt-10 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
          }}
        >
          <div className='p-2 m-3 bg-yellow-500 rounded-full shadow-xl'>
            <IoLogoJavascript className='w-7 h-7 text-white' />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.1,
          }}
        >
          <div className='p-2 m-3 bg-orange-600 rounded-full shadow-xl'>
            <AiFillHtml5 className='w-7 h-7 text-white' />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.2,
          }}
        >
          <div className='p-2 m-3 bg-blue-600 rounded-full shadow-xl'>
            <SiCss3 className='w-7 h-7 text-white' />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.3,
          }}
        >
          <div className='p-2 m-3 bg-zinc-600 rounded-full shadow-xl'>
            <FaReact className='w-7 h-7 text-sky-400' />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.4,
          }}
        >
          <div className='p-2 m-3 bg-purple-600 rounded-full shadow-xl'>
            <FaBootstrap className='w-7 h-7 text-white' />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.5,
          }}
        >
          <div className='p-2 m-3 bg-lime-600 rounded-full shadow-xl'>
            <FaNodeJs className='w-7 h-7 text-white' />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.6,
          }}
        >
          <div className='p-2 m-3 bg-sky-400 rounded-full shadow-xl'>
            <SiTailwindcss className='w-7 h-7 text-white' />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.7,
          }}
        >
          <div className='p-2 m-3 bg-zinc-600 rounded-full shadow-xl'>
            <SiNextdotjs className='w-7 h-7 text-white' />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.8,
          }}
        >
          <div className='p-2 m-3 bg-green-600 rounded-full shadow-xl'>
            <SiMongodb className='w-7 h-7 text-white' />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.9,
          }}
        >
          <div className='p-2 m-3 bg-gray-500 rounded-full shadow-xl'>
            <SiExpress className='w-7 h-7 text-white' />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
