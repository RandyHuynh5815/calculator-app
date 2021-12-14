export const pressButton = (value) => {
    console.log(value, " has been pressed");
    if (typeof(value) === "number") {
        return {
            type: "NUM",
            value: value
        }
    }
    else if (value === "+" || value === "-" || value === "*" || value === "/") {
        return {
            type: "OP",
            value: value
        }
    }
    else if (value === "C") {
        return {
            type: "CLEAR",
            value: value
        }
    }
    else if (value === "=") {
        return {
            type: "EQUALS",
            value: value
        }
    }
    else {
        return {
            type: "NONE",
            value: null
        }
    }
}