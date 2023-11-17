import {useState} from 'preact/hooks'

export function PlayArea() {
    const [data,setData] = useState({info1:"prueba"})
    const [dataList,setDataList] = useState(["ok","","2"])

    console.log("modified state")

    return (
        <>
        <span>Test: {data.info1 ?? "no data"}</span><br />
        <input type='text' onInput={(ev)=>{
            setData({info1:ev.target.value})
            //setData({info1:ev.target.value})
        }
        }/>
        

{
    dataList.map(t=>(
        <h3>{t}</h3>
    ))
}


        <button onClick={(()=> {
            dataList.push(data.info1)
            setDataList(dataList.slice())
        })
            }>Add</button>
        </>
    )
}