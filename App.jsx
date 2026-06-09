import './App.css'
import Banner from './Banner'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'

function App() {
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>World is running</h1>
      <Header />
      <NavBar />
      <Banner />
      <Body />
      <Footer />
    </div>
  )
}

export default App
