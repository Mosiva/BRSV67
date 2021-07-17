import { createSelector } from "reselect"

const getDevelopersSelector = (state) =>{
    return state.developersPage.developers
}
export const getDevelopersReselect = createSelector(getDevelopersSelector, (developers) => {
    return developers;
})