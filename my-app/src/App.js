import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hello React !
        </h2>
      </header>
      <Footer />
    </div>
  );
}

export default App;
