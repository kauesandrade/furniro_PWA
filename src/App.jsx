import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Browse from './components/Browse'
import Product from './components/Product'
import Inspiration from './components/Inspiration'
import Information from './components/Information'
import Footer from './components/Footer'

const App = () => {

  return <div>
    <Header />
    <section>
      <Banner />
    </section>
    <section>
      <Browse />
    </section>
    <section>
      <Product />
    </section>
    <section>
      <Inspiration />
    </section>
    <section>
      <Information />
    </section>
    <section>
      <Footer />
    </section>



  </div>

}

export default App
