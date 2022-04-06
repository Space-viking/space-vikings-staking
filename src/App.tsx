import Web3ReactManager from 'components/Web3ReactManager';
import './App.css';
import Main from './main'

function App() {
  return (
    <div>
      <Web3ReactManager>
      <Main/>
      </Web3ReactManager>
    </div>
  );
}

export default App;
