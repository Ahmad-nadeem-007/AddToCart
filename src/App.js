
import { Route, Routes } from 'react-router-dom';
import './App.css';
import List from './Components/List';
import Home from './Home';
// import Home from './Pages/Home';

function App() {
  return (
   <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list' element={<List />} />

      </Routes>
 
      </>
      );
}

      export default App;
