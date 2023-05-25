export const setMeal = (payload) => {
    return{
        type: "SET_MEAL",
        payload: payload
    }
}
export const setBreakfastMenu = (payload) =>{
    return{
        type: "SET_BREAKFAST_MENU",
        payload: payload
    }
}
export const setLunchMenu = (payload) =>{
    return{
        type: "SET_LUNCH_MENU",
        payload: payload
    }
}
export const setDinnerMenu = (payload) =>{
    return{
        type: "SET_DINNER_MENU",
        payload: payload
    }
}

export const removeMenu = (payload) => {
    return{
        type: "REMOVE_MENU",
        payload: payload
    }
}

