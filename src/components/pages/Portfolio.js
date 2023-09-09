import { portfolioData } from '../../constants'
import Project from '../Project'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <section>
      <div className='w-full text-center'>
        <h1 className='my-20 text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-zinc-900'>
          Portfolio
        </h1>
      </div>
      <div className='pb-20 px-6 mx-auto max-w-screen-xl'>
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {portfolioData.map((data, i) => {
            return (
              <motion.div
                key={data.title}
                initial={{
                  opacity: 0,
                  translateY: -100,
                }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  duration: 1.5,
                  delay: 0.5 * data.id,
                }}
              >
                <Project
                  key={data.id}
                  title={data.title}
                  imageUrl={data.imgUrl}
                  alt={data.alt}
                  description={data.description}
                  repo={data.repo}
                  href={data.href}
                  tags={data.tags}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
