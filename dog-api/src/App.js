import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [dogs, setDogs] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDog = () => {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogs(data.message)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching dogs:', error);
        setLoading(false);
      }); 
  }

  useEffect(() => {
    fetchDog();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Random dog browser.
        </h1>
        {loading ? (
          <p>Loading a dog...</p>
        ) : (
          <>
            {dogs && <img src={dogs} alt='A dog' style={{ maxWidth: '300px' }} />}
            <br />
            <button onClick={fetchDog}>Fetch New Dog</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
