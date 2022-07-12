import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import movieSlice from './features/movieSlice'
import menuSlice from './features/menuSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    movie: movieSlice,
    menu: menuSlice
  }
})

export default store
