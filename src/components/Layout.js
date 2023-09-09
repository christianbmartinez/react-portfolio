import { useState } from 'react'
import Header from './Header'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from '../components/Footer'

const Body = () => {
  const [currentPage, setCurrentPage] = useState('About')

  const renderComponent = () => {
    if (currentPage === 'About') {
      return <About />
    } else if (currentPage === 'Contact') {
      return <Contact />
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />
    } else if (currentPage === 'Resume') {
      return <Resume />
    } else {
      return <Contact />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page)
  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderComponent()}
      <Footer />
    </>
  )
}

export default Body
