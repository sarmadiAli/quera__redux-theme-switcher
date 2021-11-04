// # Reducer name should be **themeReducer**
import { THEME_TYPE } from "../constants";

const defultState = {
    theme : THEME_TYPE.LIGHT
}

export const themeReducer = (state = defultState, action) => {

    switch (action.type) {
        case 'ChANGE_THEME' :
            return{
                theme : action.payload
            }
        default : return state
    }

};
