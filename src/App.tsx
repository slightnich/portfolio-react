import { FC } from 'react'
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App: FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Navbar />
        <Layout>
          <Home />
          <About />
          <Portfolio />
          <Pricing />
          <Skills />
          <Contact />
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default App
