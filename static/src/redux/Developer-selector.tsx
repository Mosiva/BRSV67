import { createSelector } from "reselect"
import { AppStateType } from "./redux-store";

const getDevelopersSelector = (state: AppStateType) =>{
    return state.developersPage.developers
}
export const getDevelopersReselect = createSelector(getDevelopersSelector, (developers) => {
    return developers;
})