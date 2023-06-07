import { type } from "os";
import { useReducer } from "react";

type stateType={
    counter:number,
    status:'increment' | 'decrement' | 'start'
};

type actionType={type:string}

const reducerFun=(state:stateType, action:actionType)=>{
    console.log('action', action)
    switch (action.type) {
        case 'increment':
        return{
            ...state,
            counter: state.counter+1,
            status: action.type
        };

        case 'decrement':
            return {
                ...state,
                counter: state.counter-1,
                status: action.type
            }
        
    
        default:
           return state
    }

};

const initialstate:stateType={counter:0, status:'start'}
const AddValue=()=>{
    const [state, dispatch]=useReducer(reducerFun, initialstate)
    return(
        <div>
            
            <br />
            <p>counter:{state.counter}</p>
            <br />
           < p>status:{state.status}</p>
           <br />
           <button type="button" onClick={()=>{dispatch({type:'increment'})}}>increment</button>
           <br />
           <button type="button" onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>
        </div>
    )
};
export default AddValue;