import { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        console.log(t);
        return t + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Time: {time}</div>;
};

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch('/names.json')
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedName = (name) => {
    fetch(`/${name}.json`)
      .then((res) => res.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <div className="App">
      <Stopwatch />
      <div>Names: {names.join(', ')}</div>
      <div>
        {names.map((name) => (
          <button onClick={() => onSelectedName(name)}>{name}</button>
        ))}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
}

export default App;
