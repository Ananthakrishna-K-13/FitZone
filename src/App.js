import './App.css';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Exercises from './pages/Exercises/Exercises';
import ExerciseDetail from './pages/ExerciseDetail/ExerciseDetail';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercises' element={<Exercises/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
    </Router>
    </>
  );
}
export default App;
