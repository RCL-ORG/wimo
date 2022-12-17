import './App.css'
import Navbar from './structural-components/navbar/Navbar'

const App = () => {
  return (
    <div className="container">
      <nav className="header">
        <Navbar />
      </nav>
      <main className="central">
        <aside className="lside">LSIDE</aside>
        <div className="hero">HERO</div>
        <aside className="rside">RSIDE</aside>
      </main>
      <footer className="footer">FOOTER</footer>
    </div>
  )
}

export default App
