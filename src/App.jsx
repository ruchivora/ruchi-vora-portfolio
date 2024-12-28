import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Header } from './components/Header/Header';
import { Skills } from './components/Skills/Skills';
import { Blog } from './components/Blog/Blog';
import { Footer } from './components/Footer/Footer'
import './global.css';

function App() {


  return (
    <>
      <Header/>
      <About/>
      <Skills/>
      <Experience/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
