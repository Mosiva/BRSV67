
import axios from 'axios'

const SET_DEVELOPER_PROFILE = 'SET_DEVELOPER_PROFILE';
const DEVELOPERS_ERROR = 'DEVELOPERS_ERROR'


let initialState = {
    developers: []
};

const developerReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DEVELOPER_PROFILE: {
            return { ...state, developers: action.payload }
        }
        default:
            return state;
    }
}

export const setDevelopers = (developers) => ({ type: SET_DEVELOPER_PROFILE, payload: developers })

const instance = axios.create({
    baseURL: `http://localhost:1337/brsvdevelopers`,
});


export const getDevelopers = () => async dispatch => {
    try {

        const res = await instance.get()
        dispatch(setDevelopers(res.data))
    }
    catch (e) {
        dispatch({
            type: DEVELOPERS_ERROR,
            payload: console.log(e),
        })
    }
}


export const getFrontDevelopers = () => async dispatch => {
    const res = await instance.get(`?direction=frontend`)
    dispatch(setDevelopers(res.data))
}
export const getBackDevelopers = () => async dispatch => {
    const res = await instance.get(`?direction=backend`)
    dispatch(setDevelopers(res.data))
}
export const getTestDevelopers = () => async dispatch => {
    const res = await instance.get(`?direction=tester`)
    dispatch(setDevelopers(res.data))
}
export const getSysAdminDevelopers = () => async dispatch => {
    const res = await instance.get(`?direction=systemadmin`)
    dispatch(setDevelopers(res.data))
}
export const getGrahpDevelopers = () => async dispatch => {
    const res = await instance.get(`?direction=graphdesigner`)
    dispatch(setDevelopers(res.data))
}

export default developerReducer;