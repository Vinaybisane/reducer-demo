import React, { useReducer } from 'react';
import logo from './logo.svg'
import './App.css';
import AddValue from './component/AddValue';



const reducerFun=(state:any, action:any)=>{
 
switch (action.type) {
  case 'increment':
    const newstate={
      ...state,
      counter: state. counter + 1,
      status: action.type
    }
      return newstate
    
     case 'decrement':
      
    
     const newstate2={
      ...state,
      counter: state. counter - 1,
      status: action.type
     }
    
     return newstate2

  default:
    return state
  }
};


const initialState={counter:0, status:''};
function App() {

  const [state, dispatch]=useReducer(reducerFun, initialState );
  const incrementvalue=()=>{
    console.log('increment', state)
    console.log('incrementvalue')
    dispatch({type:'increment'});
  }
  const decrementvalue=()=>{
    console.log('decrement', state)
    console.log('decrementvalue')
    dispatch({type:'decrement'});
  }

  return (
    <div>
      <AddValue/>
    
  {
    
    /* <br />
    <p> counter={state.counter}</p>
    <br />
    <p>status={state.status}</p>
      <button type='button' onClick={incrementvalue}>increment</button>
      <button type='submit' onClick={decrementvalue}>decrement</button> */}
    </div>
  );
}

export default App;
