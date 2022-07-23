import { GetValuesAPI } from "../Api/api"

const SET_COURSE_VALUES = "SET_COURSE_VALUES"

let initialState = {
    values:{}
};

const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_COURSE_VALUES: 
            return {
                ...state,
                values: action.response
            }
        
        default:
            return state;
    }
}

export const setCourseValues = ( response) => ({ type: SET_COURSE_VALUES, response } )

export const getCourseValues = () => async (dispatch) => {
    let response = await GetValuesAPI.GetValues();
    dispatch(setCourseValues(response));
}

export default HeaderReducer;