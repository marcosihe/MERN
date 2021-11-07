const initialState = [{
    id: 1,
    toDo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {
    if( action?.type === 'agregar' ){
        return [ ...state, action.payload ];
    }
    return state;
}

let toDos = todoReducer();

const newToDo = {
    id: 2,
    toDo: 'Comprar leche',
    done: false
}

const action = {
    type: 'agregar',
    pauload: newToDo
}

toDos = todoReducer( toDos, action);

console.log(toDos);