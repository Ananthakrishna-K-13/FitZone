import './App.css';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Exercises from './pages/Exercises/Exercises';
import ExerciseDetail from './pages/ExerciseDetail/ExerciseDetail';
import ScrollToTop from './ScrollToTop';
import Utilities from './pages/Utilities/Utilities';

function App() {
  return (
    <>
    <Router>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercises' element={<Exercises/>}/>
        <Route path='/exercise/:exerciseId' element={<ExerciseDetail/>}/>
        <Route path='/utilities' element={<Utilities/>}/>
      </Routes>
    </Router>
    </>
  );
}
export default App;
