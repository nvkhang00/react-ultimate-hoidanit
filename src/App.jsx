import './styles/global.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </>
  )
}

export default App
