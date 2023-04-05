import {useState} from 'react'


export const ItemCount =() => {
    const [count, setCount]= useState(0)
    

    const increment = () => {
        for (let i=0; i<1; i++){
            setCount(prev => {
                return prev + 1
            })
            }
        }

    const decrement =()=>{
        if (count>0) {
            setCount (prev => prev -1)
        }

    }

    
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement} > -</button>
            <button onClick={increment} >+</button>
        </div>
    )

}

