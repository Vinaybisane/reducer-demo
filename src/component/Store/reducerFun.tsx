type userstatetype={
    username:string,
    age:number,
    cmp:string

}
 type actiontype={
    type:string,
    payload:{
        newName:string,
        newAge:number,
        newCmp:string
    }
 }

export const initialUserstate:userstatetype={
    username:'',
    age:0,
    cmp:''
}

const reducerFun=(state:userstatetype, action:any)=>{

    switch (action.type) {
        case 'setUsername':
            
            return {
                ...state,
                username: action.payload.newName
            }
            case 'setAge':
            
            return {
                ...state,
                age: action.payload.newAge
            }
            case 'setCmp':
            
            return {
                ...state,
                cmp: action.payload.newCmp
            }
    
        default:
            return state
    }
    
};
export default reducerFun;