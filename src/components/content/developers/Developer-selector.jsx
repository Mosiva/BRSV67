import { createSelector } from "reselect"

const getDevelopersSelector = (state) =>{
    return state.developers
}
export const getDevelopersReselect = createSelector(getDevelopersSelector, (developers) => {
    return developers;
})