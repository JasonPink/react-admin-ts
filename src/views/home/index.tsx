import React, { useState } from 'react'
import useInterval from '@/hooks/useInterval'
import Mock from 'mockjs'
import { useRequest } from 'ahooks'

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'))
    }, 1000)
  })
}

export default function Home() {
  const [seconds, setSeconds] = useState(0)
  const { data, error, loading } = useRequest(getUsername)

  useInterval(() => {
    setSeconds(seconds + 1)
  }, 1000)
  return (
    <div>
      <p>{seconds}</p>
      <p>{error && 'failed to load'}</p>
      <p>{loading && 'loading...'}</p>
      <p>{!error && !loading && `Username: ${data}`}</p>
    </div>
  )
}
