import React from 'react'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieData } from '@/store/features/movieSlice'
import { increment, decrement } from '@/store/features/counterSlice'

export default function Home() {
  const { value } = useSelector((store) => store.counter)
  const { list } = useSelector((store) => store.movie)
  const dispatch = useDispatch()

  return (
    <>
      <p>{value}</p>
      <Button onClick={() => dispatch(increment({ value: 5 }))}>加1</Button>
      <Button onClick={() => dispatch(decrement())}>减1</Button>
      <Button onClick={() => dispatch(getMovieData())}>获取数据</Button>
      <ul>
        {list.map((item: any) => (
          <li key={item.tvID}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}
