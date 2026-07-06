import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div>
      <h1>Generated App</h1>
      <h2>Items:</h2>
      <ul>
        {items.message ? (
          <li>{items.message}</li>
        ) : (
          <li>No items found or error loading items.</li>
        )}
      </ul>
    </div>
  );
}

export default App;
