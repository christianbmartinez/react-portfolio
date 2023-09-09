import { FaMapPin, FaBriefcase, FaUniversity } from 'react-icons/fa'
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
        <div className='flex flex-col min-w-0 min-h-[55vh] break-words shadow-2xl rounded-xl bg-white'>
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
              <h3 className='text-4xl font-semibold leading-normal mb-2 text-zinc-900'>
                Christian B. Martinez
              </h3>
              <div className='inline-flex text-sm leading-normal mt-0 mb-2 text-zinc-400 font-bold uppercase'>
                <FaMapPin className='mr-2 text-lg text-zinc-400' />
                Salt Lake City, Utah
              </div>
              <div className='flex flex-row justify-center items-center mb-2 mt-10 text-zinc-800'>
                <FaBriefcase className='mr-2 text-lg text-zinc-400' />
                Full Stack Bootcamp Student
              </div>
              <div className='flex flex-row justify-center items-center mb-2 text-zinc-800 '>
                <FaUniversity className='mr-2 text-lg text-zinc-400' />
                University of Utah
              </div>
            </div>
            <div className='mt-10 py-10 border-t border-zinc-200 text-center'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-9/12 px-4'>
                  <p className='mb-4 text-lg leading-relaxed text-zinc-800 '>
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
    </section>
  )
}

export default About
