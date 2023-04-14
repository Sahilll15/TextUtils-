import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>

      <Navbar title="Textutils" aboutText="about " />
      <div className="container"><Textform heading=<h2>Enter the text to analyz below</h2> /></div>
      {/* <About /> */}

    </>
  );
}

export default App;

