import './App.css';
import NavBar from './structural-components/navbar/Navbar';

function App() {
  return (
    <div className="container">
      <div className="header">

        <NavBar />

      </div>
      <div className="left-sidebar">LSB</div>
      <div className="hero">Hero</div>
      <div className="right-sidebar">RSB</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
