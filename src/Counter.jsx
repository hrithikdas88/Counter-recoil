import React from 'react'
import {useRecoilState} from 'recoil'
import { counterState } from './atom'

const Counter = () => {
    const [count,setCount] = useRecoilState(counterState)

    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }

  return (
    <div>
        
        Counter
        <p>Count:{count}</p>
        
        <button onClick={increment}>Inc</button>
        <button  onClick={decrement}>Dec</button>
        
        
        </div>
  )
}

export default Counter