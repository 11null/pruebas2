import {useState} from 'preact/hooks'

export function Counter() {
    const [counter,setCounter] = useState(0)

    const getSum =() =>{
        setCounter(()=>counter+1)
    }
    return (
        <>
        <span>{counter}</span>
        <button onClick={getSum}>Add</button>
        </>
    )
}