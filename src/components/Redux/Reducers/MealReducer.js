const initialState = {
    setMenu:[],
    breakfastMenu : [],
    lunchMenu : [],
    dinnerMenu : []
}

export const MealReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "SET_MEAL" : {
            const newState = {
                ...state,
                setMenu : action.payload
            }
            return newState;
        }
        case "SET_BREAKFAST_MENU" : {
            const newState = {
                ...state,
                breakfastMenu : action.payload
            };
            return newState;
        }
        case "SET_LUNCH_MENU" : {
            const newState = {
                ...state,
                lunchMenu : action.payload
            };
            return newState;
        }
        case "SET_DINNER_MENU" : {
            const newState = {
                ...state,
                dinnerMenu : action.payload
            };
            return newState;
        }
        case "REMOVE_MENU" : {
            if(action.payload.meal === "Breakfast"){
                const newState = {
                    ...state,
                    dinnerMenu : [],
                    lunchMenu: [],
                    setMenu: []
                };
                return newState;
            }
            if(action.payload.meal === "Lunch"){
                const newState = {
                    ...state,
                    dinnerMenu : [],
                    breakfastMenu: [],
                    setMenu: []
                };
                return newState;
            }
            if(action.payload.meal === "Dinner"){
                const newState = {
                    ...state,
                    lunchMenu : [],
                    breakfastMenu: [],
                    setMenu: []
                };
                return newState;
            }
            
        }
        default :{
            return state
        }
    }
}