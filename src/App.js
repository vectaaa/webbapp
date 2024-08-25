import './App.css';
import GoalList from './components/GoalList/GoalList';
import courseGoals from './components/mockdata';

const App = () => {
  return (
    <div className='course-goals'>
    <h2>Course Goals</h2>
    <GoalList goals={courseGoals}/>   
    </div>
  );
};

export default App;
