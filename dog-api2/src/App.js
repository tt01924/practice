import './App.css';
import { useState, useEffect } from 'react'

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
        console.error('Error fetching the dog picture', error);
        setLoading(false)
      });
  }

  useEffect(() => {
    fetchDog()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dog image generator:</h1>
        {loading ? (
          <p>Loading a picture of a dog</p>
        ) : (
          <>
            {dogs && <img src={dogs} alt='A dog' />}
            <br/>
            <button onClick={fetchDog}>Fetch a new dog</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
