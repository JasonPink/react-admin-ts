import { createSlice } from '@reduxjs/toolkit'

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    showlogo: true
  },
  reducers: {
    toggleShowLogo: (state) => {
      state.showlogo = !state.showlogo
    }
  }
})
export const { toggleShowLogo } = settingSlice.actions

export default settingSlice.reducer
