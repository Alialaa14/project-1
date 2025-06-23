import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router'
import {Provider} from "react-redux"
import Home from './Pages/Home/Home'
import store from './store.js'
const App = () => {
  return (
   <Provider store={store}>
     <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
   </Provider>
  )
}

export default App