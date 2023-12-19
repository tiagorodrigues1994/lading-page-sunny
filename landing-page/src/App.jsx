
import './App.css'
import DepimentoContainer from './components/DepoimentoContainer'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Main from './components/Main'
import Services from './components/Services'



function App() {


  return (
    <main className='max-w-[1440px] mx-auto relative' >
      <Header /> 
      <Main />
      <Services />
      <DepimentoContainer />
      <Gallery />
      <Footer />
    </main>
  )
}

export default App
