import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FirstTestComponent from './TestComponents/FirstTestComponent';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <FirstTestComponent />
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
}

export default App;
