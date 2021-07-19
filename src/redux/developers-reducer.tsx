import { developersAPI } from '../API/developer-api';
import { DeveloperType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store'
/* const DEVELOPERS_ERROR = 'DEVELOPERS_ERROR' */


let initialState = {
    developers: [] as Array<DeveloperType>
};
export type InitialStateType = typeof initialState;

const developerReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'BRSV/USERS/SET_developers': {
            return { ...state, developers: [...action.payload] }
        }
        default:
            return state;
    }
}

type ActionTypes = InferActionsTypes<typeof actions>
export const actions = {
    setDevelopers: (developers: Array<DeveloperType>) => ({ type: 'BRSV/USERS/SET_developers', payload: developers } as const)
}

type ThunkType = BaseThunkType<ActionTypes>
export const getDevelopers = (): ThunkType => async dispatch => {
    try { 
        const res = await developersAPI.getDevelopers()
        dispatch(actions.setDevelopers(res.data))
    } 
    catch (e) {
      /*   dispatch({
            type: DEVELOPERS_ERROR,
            payload: console.log(e),
        }) */
    }
}


export const getFrontDevelopers = (): ThunkType => async dispatch => {
    const res = await developersAPI.getFrontDevelopers()
    dispatch(actions.setDevelopers(res.data))
}
export const getBackDevelopers = (): ThunkType  => async dispatch => {
    const res = await developersAPI.getBackDevelopers()
    dispatch(actions.setDevelopers(res.data))
}
export const getTestDevelopers = (): ThunkType  => async dispatch => {
    const res = await developersAPI.getTestDevelopers()
    dispatch(actions.setDevelopers(res.data))
}
export const getSysAdminDevelopers = (): ThunkType  => async dispatch => {
    const res = await developersAPI.getSysAdminDevelopers()
    dispatch(actions.setDevelopers(res.data))
}
export const getGrahpDevelopers = (): ThunkType  => async dispatch => {
    const res = await developersAPI.getGrahpDevelopers()
    dispatch(actions.setDevelopers(res.data))
}

export default developerReducer;