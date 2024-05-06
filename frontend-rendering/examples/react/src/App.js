import { useEffect, useState } from 'react';
import './App.css';
import Headline from './components/headline/Headline';
import Input from './components/input/Input';
import Button from './components/button/Button';

const defaultTitle = 'React Example';

function App() {
  const [title, setTitle] = useState(defaultTitle);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue === '') {
      setTitle(defaultTitle)
    }
  }, [inputValue]);

  const changeHandler = (value) => {
    setTitle(value);
    setInputValue(value);
  }

  const reset = () => {
    setTitle(defaultTitle);
    setInputValue('');
  }

  return (
    <div className="app">
      <Headline title={title} />
      <Input value={inputValue} onChange={changeHandler} />
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

export default App;
