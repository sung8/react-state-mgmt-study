import { useState, useEffect } from 'react';

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch('/names.json')
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, []);

  return (
    <div className="App">
      <div>Names: {names.join(', ')}</div>
    </div>
  );
}

export default App;
