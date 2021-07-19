import { instance } from "./api"

export const developersAPI = {
    getDevelopers() {
        return instance.get(`brsvdevelopers`)
    },
    getFrontDevelopers() {
        return instance.get(`brsvdevelopers?direction=frontend`)
    },
    getBackDevelopers() {
        return instance.get(`brsvdevelopers?direction=backend`)
    },
    getTestDevelopers () {
        return instance.get(`brsvdevelopers?direction=tester`)
    },
    getSysAdminDevelopers() {
        return instance.get(`brsvdevelopers?direction=systemadmin`)
    },
    getGrahpDevelopers() {
        return instance.get(`brsvdevelopers?direction=graphdesigner`)
    },


}