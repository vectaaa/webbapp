import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import mockcourseGoals from './components/mockdata';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState(mockcourseGoals);
  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal)); //This one used when the new state doesn't depend on the previous
    setCourseGoals((prevCourseGoals) => { //we only use this when one state is dependent on another.
      return prevCourseGoals.concat(newGoal);
    })
    // courseGoals.push(newGoal);
    console.log(courseGoals);
  }
  return (
    <div className='course-goals'>
    <h2>Course Goals</h2>
    <NewGoal  onAddNewGoal={addNewGoalHandler}/> 
    <GoalList goals={courseGoals}/>
    </div>
  ); 
};

export default App;
