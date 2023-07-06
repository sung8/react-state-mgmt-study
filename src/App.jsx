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

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const countTotalBad = useMemo(() => count1 + count2, [count1 + count2]);
  const countTotalBetter = count1 + count2;

  return (
    <div className="App">
      <div>Total: {total}</div>
      <div>Names: {names.join(', ')}</div>
      {/* <div>Sorted In-Place: {sortInPlaceNames.join(', ')}</div> */}
      {/* <div>Copy and Sort: {copyAndSortNames.join(', ')}</div> */}
      <div>Sort Only When Needed (useMemo): {useMemoAndSort.join(', ')}</div>
      <button onClick={() => setCount1(count1 + 1)}>Count 1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count 2: {count2}</button>
      <div>Total: {countTotalBetter}</div>
    </div>
  );
}

export default App;
