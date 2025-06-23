import {configureStore} from "@reduxjs/toolkit";
import pageSettingSlice from "./storeSlices/PageSetting.js";



const store = configureStore({
    reducer:{
        pageSetting:pageSettingSlice
    }
})


export default store