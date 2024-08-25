import { View, Text } from 'react-native'
import React from 'react'

const NewGoal = () => {
  return (
    <form className='new-goal'>
        <input type='text'></input>
        <button type='submit'>Add A Goal</button>
    </form>
  )
};

export default NewGoal;