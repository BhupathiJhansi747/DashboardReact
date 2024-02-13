import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode]: any = useState<any>(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkmode', darkMode);
    }
    else{
      document.body.classList.remove('darkmode', darkMode);

    }
  }, [darkMode])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
