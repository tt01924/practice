import React, { useEffect, useState } from 'react'; 
// useEffect is a hook that lets you run code after the component renders (often used for data fetching)
// useState is a hook that lets you create and update state

function App() { // My react component
  const [users, setUsers] = useState([]); // This sets up the state. users is the current list of users (empty array initially). setUsers is a function to update the users state.
// So when the app fetches data from API, you'll use setUsers to store it.

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') //get data from API
      .then((response) => response.json()) // Converts the response to JSON
      .then((data) => setUsers(data)) // Stores the JSON data in 'users' state via 'setUsers'
      .catch((error) => console.error('Error fetching users:', error)); // If anything goes wrong, it logs the error to console
  }, []); // [] tells useEffect to run only once

  return (
    <div className="App">
      <h1>User Info</h1>
      <ul>
        {users.map((user) => ( // loop over the 'users' array and render a list for each one
          <li key={user.id}> 
            <strong>{user.name}</strong> - {user.email} 
          </li> // React requires a unique key when rendering lists
        ))}
      </ul>
    </div>
  );
}

export default App;
