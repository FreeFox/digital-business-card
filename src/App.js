import BusinessCard from './components/BusinessCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <BusinessCard background={'black'} linkedin={true} />
      <BusinessCard background={'black'} linkedin={false} />
      <BusinessCard background={'white'} linkedin={true} />
      <BusinessCard background={'white'} linkedin={false} />
    </div>
  );
}

export default App;
