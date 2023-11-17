import {useState} from 'preact/hooks'

export function Counter() {
    const [counter,setCounter] = useState(Date.now())

    return (
        <>
        <span>{counter}</span>
        <button onClick={(()=>setCounter(()=>counter+1))}>Add</button>
        </>
    )
}