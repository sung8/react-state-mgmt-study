import { useState, useRef, useEffect } from 'react';

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
