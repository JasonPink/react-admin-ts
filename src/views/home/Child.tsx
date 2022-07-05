import React, { FC } from 'react'

const Child: FC = (prpos: any) => <span>{Math.random()}</span>

export default React.memo(Child)
