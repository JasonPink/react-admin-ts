import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  title: string
}

const initialState: CounterState = {
  value: 0,
  title: 'redux tookit'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.value += payload.value
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
