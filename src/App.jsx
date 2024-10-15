import MainContent from './components/MainContent';
import logo from './assets/images/science-logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Science Tidbits</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
