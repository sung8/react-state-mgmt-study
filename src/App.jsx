import { useState, useRef, useEffect } from 'react';

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [names, setNames] = useState([]);

  const onAddName = () => {
    setNames([...names, inputRef.current.value]);
    inputRef.current.value = '';
  };

  return (
    <div>
      <div>
        {names.map((name) => (
          <div key={name}>{name}</div>
        ))}
      </div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

export default App;
