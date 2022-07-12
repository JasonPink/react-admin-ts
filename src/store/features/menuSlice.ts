import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menu: [],
    isCollapsed: false
  },
  reducers: {
    toggleCollapsed: (state) => {
      state.isCollapsed = !state.isCollapsed
    }
  }
})
export const { toggleCollapsed } = menuSlice.actions

export default menuSlice.reducer
