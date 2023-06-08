import { useReducer, useState } from 'react';
import styless from './user.module.scss'
import reducerFun, { initialUserstate } from '../Store/reducerFun';
import { type } from 'os';
const Userinfo=()=>{

    const [state, dispatch]=useReducer(reducerFun, initialUserstate)

    const [username, setUsername]=useState('')

    const[cmp, setCmp]=useState('')

    const submitdata=()=>{
        console.log('state', state)
    }
    const cmpuser=(e:any)=>{
        if (e.target.value === username) {
            alert("company name shuld not be same as username")
            return
        }
        setCmp(e.target.value)
    }

    const userDispatchFun=(newName:any)=>{
        dispatch({type:'setUsername', payload:{newName}})
    }

    const ageDispatchFun=(newAge:any)=>{
        dispatch({type:'setAge', payload:{newAge}})
    }

    const cmpDispatchFun=(newCmp:any)=>{
        dispatch({type:'setCmp', payload:{newCmp}})
    }
    return(
        <div className={styless['user-wrapper']}>
            <div className={styless['userinfo']} >
                <label htmlFor='username'>username</label>
               <input type="text"
                name='username'
                 id='username' 
                 placeholder='enter your user name'
                 value={state.username}
                 onChange={e=>userDispatchFun(e.target.value)}
                />
            </div >
            <div className={styless['userinfo']}>
            <label htmlFor='age'>age</label>
               <input type="number" name='age' id='age' placeholder='enter your age'
               value={state.age}
               onChange={e=>ageDispatchFun(e.target.value)} />
            </div>
            <div className={styless['userinfo']}>
            <label htmlFor='cmp'>cmp</label>
                <input type="text" name='cmp' id='cmp' placeholder='enter your company name'
                value={state.cmp}
                   onChange={e=>cmpDispatchFun(e.target.value)}/>
            </div>
            <button type='button' onClick={submitdata}>submit</button>
        </div>
    )
};
export default Userinfo;