import { useState, useEffect } from 'react';

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch('/names.json')
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedName, setSelectedName] = useState(null);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  useEffect(() => {
    fetch(`/${selectedName}.json`)
      .then((res) => res.json())
      .then((data) => setSelectedNameDetails(data));
  }, [selectedName]);

  return (
    <div className="App">
      <div>Names: {names.join(', ')}</div>
      <div>
        {names.map((name) => (
          <button onClick={() => setSelectedName(name)}>{name}</button>
        ))}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
}

export default App;
