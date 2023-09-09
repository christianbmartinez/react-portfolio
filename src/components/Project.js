import { FaGithub, FaLink } from 'react-icons/fa'

const Project = ({ title, imageUrl, alt, description, repo, href, tags }) => {
  return (
    <div className='max-w-screen overflow-hidden rounded-lg shadow-2xl bg-white'>
      <div
        className='bg-cover bg-center h-48 w-full lg:w-96'
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
        alt={alt}
      >
        <div className='w-full h-full flex justify-center items-center bg-gradient-to-r from-teal-600 to-pink-500 opacity-60'></div>
      </div>
      <div className='flex flex-col rounded-lg justify-center w-full h-full hover:shadow-2xl bg-gradient-to-r from-teal-600 to-pink-500 opacity-60 transition duration-300 ease-in-out hover:opacity-90'></div>
      <div className='px-6 py-4 h-20'>
        <div className='font-bold text-xl mb-2 text-zinc-900'>{title}</div>
        <p className='text-zinc-800 text-base'>{description}</p>
      </div>
      <div className='px-6 pt-4 pb-3 mt-10'>
        {tags.map((tag, i) => {
          return (
            <span
              key={i}
              className='inline-flex justify-between items-center bg-zinc-100 shadow-md rounded-full px-3 py-1 text-sm font-semibold text-zinc-800 mr-2 mb-2'
            >
              <p>{tag}</p>
            </span>
          )
        })}
      </div>
      <div className='inline-flex px-6 pt-4 pb-3'>
        <p className='text-zinc-800 text-base my-2'>Project as:</p>
        <a
          href={repo}
          target='_blank'
          rel='noreferrer'
          aria-label='Christian B Martinez | Project Repository a'
          className='text-zinc-800 inline-flex items-center font-medium text-primary-600 hover:text-teal-600 transition duration-300 ease-in-out'
        >
          <FaGithub className='ml-5' />
        </a>

        <a
          href={href}
          target={href !== '#' ? '_blank' : null}
          rel='noreferrer'
          aria-label='Christian B Martinez | Project View Live a'
          className='text-zinc-800 inline-flex items-center font-medium text-primary-600 hover:text-teal-600 transition duration-300 ease-in-out'
        >
          <FaLink className='ml-5' />
        </a>
      </div>
    </div>
  )
}

export default Project
