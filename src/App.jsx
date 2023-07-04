import { useState, useCallback, useMemo } from 'react';

function App() {
  const [numbers] = useState([10, 20, 30]);
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(['John', 'Paul', 'George', 'Ringo']);
  // const sortInPlaceNames = names.sort();
  const copyAndSortNames = [...names].sort();
  const useMemoAndSort = useMemo(() => [...names].sort(), [names]);
  return (
    <div className="App">
      <div>Total: {total}</div>
      <div>Names: {names.join(', ')}</div>
      {/* <div>Sorted In-Place: {sortInPlaceNames.join(', ')}</div> */}
      <div>Copy and Sort: {copyAndSortNames.join(', ')}</div>
      <div>Sort Only When Needed (useMemo): {useMemoAndSort.join(', ')}</div>
    </div>
  );
}

export default App;
