import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    VshowCart:false , 
    VshowMobileSearch:false , 
    VshowMobileNavbar:false
}
const pageSettingSlice = createSlice({
    initialState , 
    name:"pageSetting" , 
    reducers:{
        showCart(state , action) {
            state.VshowCart = action.payload
        } , 
        showMobileSearch(state , action) {
            state.VshowMobileSearch = action.payload
        } , 
        showMobileNavbar(state , action) {
            state.VshowMobileNavbar = action.payload
        }
    }
})

export const {showCart , showMobileSearch , showMobileNavbar} = pageSettingSlice.actions
export default pageSettingSlice.reducer