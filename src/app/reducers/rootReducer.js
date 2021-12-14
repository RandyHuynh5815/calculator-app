export const rootReducer = (state, action) => {
    switch (action.type) {
        case "NUM":
            return state.isFirst ? 
            {...state, firstVal: (state.firstVal * 10) + action.value} : {...state, secondVal: (state.secondVal * 10) + action.value}
        case "OP":
            return {...state, op: action.value, isFirst: !state.isFirst}
        case "CLEAR":
            return {firstVal: 0, op: null, secondVal: 0, isFirst: true}
        case "EQUALS":
            if (state.op === '+') {
                return {...state, firstVal: state.firstVal + state.secondVal, op: null, isFirst: true}
            } else if (state.op === '-') {
                return {...state, firstVal: state.firstVal - state.secondVal, op: null, isFirst: true}
            } else if (state.op === '*') {
                return {...state, firstVal: state.firstVal * state.secondVal, op: null, isFirst: true}
            } else if (state.op === '/') {
                return {...state, firstVal: state.firstVal / state.secondVal, op: null, isFirst: true}
            } else {
                return {...state, op: null, isFirst: true}
            }
        default:
            return {...state}
    }
}
