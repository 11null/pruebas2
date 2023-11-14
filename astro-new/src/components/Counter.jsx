import {useState} from 'preact/hooks'

export function Counter() {
    const [counter,setCounter] = useState(999)

    return (
        <>
        <span>{counter}</span>
        <button onClick={(()=>setCounter(()=>counter+1))}>Add</button>
        </>
    )
}