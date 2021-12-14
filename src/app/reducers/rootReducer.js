export const rootReducer = (state, action) => {
    switch (action.type) {
        case "NUM":
            return state.result ? 
                {...state, firstVal: action.value, result: false, lastPressed: action.type} : 
                state.isFirst ? 
                    {...state, firstVal: (state.firstVal * 10) + action.value, lastPressed: action.type} : 
                    {...state, secondVal: (state.secondVal * 10) + action.value, lastPressed: action.type}
        case "OP":
            return {...state, op: action.value, isFirst: !state.isFirst, lastPressed: action.type}
        case "CLEAR":
            return {...state, firstVal: 0, op: null, secondVal: 0, isFirst: true, lastPressed: action.type}
        case "EQUALS":
            switch (state.op) {
                case '+':
                    return {firstVal: state.firstVal + state.secondVal, secondVal: 0, op: null, isFirst: true, result: true, lastPressed: action.type}
                case '-':
                    return {firstVal: state.firstVal - state.secondVal, secondVal: 0, op: null, isFirst: true, result: true, lastPressed: action.type}
                case '*':
                    return {firstVal: state.firstVal * state.secondVal, secondVal: 0, op: null, isFirst: true, result: true, lastPressed: action.type}
                case '/':
                    return {firstVal: state.firstVal / state.secondVal, secondVal: 0, op: null, isFirst: true, result: true, lastPressed: action.type}
                default:
                    return {...state, op: null, isFirst: true, lastPressed: action.type}
            }
        default:
            return {...state}
    }
}
