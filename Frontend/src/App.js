import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import ExerciseDetail from './pages/ExerciseDetail';
import ScrollToTop from './ScrollToTop';
import BMICalcultor from './pages/BMICalculator/BMICalcultor';
import IdealWeightCalculator from './pages/IdealWeightCalculator/IdealWeightCalculator';
import DCRCalculator from './pages/DCRCalculator/DCRCalculator';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

function App() {
  return (
    <>
    <Router>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercises' element={<Exercises/>}/>
        <Route path='/exercise/:exerciseId' element={<ExerciseDetail/>}/>
        <Route path='/bmi' element={<BMICalcultor/>}/>
        <Route path='/calorie'element={<DCRCalculator/>} />
        <Route path='/weight' element={<IdealWeightCalculator/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
    </>
  );
}
export default App;
