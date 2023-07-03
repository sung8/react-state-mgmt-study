import { useState, useCallback, useMemo } from 'react';

function App() {
  const [numbers] = useState([10, 20, 30]);
  const inefficientTotal = numbers.reduce((acc, number) => acc + number, 0);
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );
  return (
    <div className="App">
      <div>First Total: {inefficientTotal}</div>
      <div>Better Total: {total}</div>
    </div>
  );
}

export default App;
