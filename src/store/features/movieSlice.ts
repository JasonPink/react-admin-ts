import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface MovieState {
  list: object
  totals: number
}

const initialState: MovieState = {
  list: [],
  totals: 0
}

const getMovieListApi = () =>
  fetch('https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48').then(
    (res) => res.json()
  )

export const getMovieData = createAsyncThunk('movie/getMovie', async () => {
  const res = await getMovieListApi()
  return res
})

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loadDateEnd: (state, { payload }) => {
      state.list = payload.data.list
      state.totals = payload.data.totals
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getMovieData.pending, (state) => {
        console.log('🚀 ~ 进行中！')
      })
      .addCase(getMovieData.fulfilled, (state, { payload }) => {
        console.log('🚀 ~ fulfilled', payload)
        state.list = payload.data.list
        state.totals = payload.data.list.length
      })
      .addCase(getMovieData.rejected, (state, err) => {
        console.log('🚀 ~ rejected', err)
      })
  }
})

// export const { loadDataEnd } = movieSlice.actions

export default movieSlice.reducer
