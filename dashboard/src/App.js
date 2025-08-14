
import './App.css';
import { useState } from 'react';

function App() {

   

  const [count, setCount] = useState(0);  // useState hook
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  );
}
 

export default App;
