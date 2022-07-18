import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import movieSlice from './features/movieSlice'
import menuSlice from './features/menuSlice'
import settingSlice from './features/settingSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    movie: movieSlice,
    menu: menuSlice,
    setting: settingSlice
  }
})

export default store
