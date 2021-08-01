import { developersAPI } from '../API/developer-api';
import { DeveloperType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store'
/* const DEVELOPERS_ERROR = 'DEVELOPERS_ERROR' */


let initialState = {
    developers: [
        { developerid: 1, name: 'Mosiva', position: 'Frontend', platformtechnology: 'StrapiIO, EmailJS, NodeJS, Netlify, WordPress', proglang: 'JavaScript, Typescript', speaklang: 'English, Russian, Kazakh', libraries: 'React, Redux' },
        { developerid: 2, name: 'L', position: 'Backend', platformtechnology: 'NodeJS', proglang: 'Golang, JavaScript', speaklang: 'English, Russian, Kazakh', libraries: ' Angular, NextJS' },
        { developerid: 3, name: 'Alan', position: 'Frontend', platformtechnology: 'NodeJS', proglang: 'JavaScript, Typescript', speaklang: 'English, Russian, Kazakh', libraries: ' React, Vue' },
        { developerid: 3, name: 'Eleanor', position: 'Tester', platformtechnology: 'testcomplete', proglang: 'JavaScript', speaklang: 'English, Russian, Kazakh', libraries: 'special libraries for each language of programming' },


    ] as Array<DeveloperType>
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

export const getGrahpDevelopers = (): ThunkType => async dispatch => {
    const res = await developersAPI.getGrahpDevelopers()
    dispatch(actions.setDevelopers(res.data))
}

export default developerReducer;