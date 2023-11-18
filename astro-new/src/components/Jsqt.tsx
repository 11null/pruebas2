import { signal } from "@preact/signals";
import { useRef, useEffect } from 'preact/hooks'

const db = signal("")
const table = signal("")

const status = signal({
    success:false,
    msg: ''
})

let timeout : number | null = null

export function Jsqt() {
    const dbRef = useRef<HTMLInputElement>(null)
    const tableRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        console.log("effect")
        timeout = setTimeout(()=>{
            let url = db + "/" + table
            while (url.includes("//")) url = url.replace("//","/")
            if (url.length>10)
            fetch(url+"?_limit=1").then(r=>r.json())
            .then(r=>{
                console.log(r)
                status.value = {...status.value,success:true,msg:''}
            }).catch(e=>{
                status.value = {success:false,msg:''+e}
            })
        },4000)
        console.log("timeout",timeout)
        return ()=>{
            console.log("cleanup",timeout)
            clearTimeout(timeout!)
        }
    },[db.value,table.value])
    
    return <>
        <h4>JSQT - Json-server Query Tool</h4>
        <h5>DB info</h5>
        <input type="text" ref={dbRef} onInput={()=>{db.value = dbRef.current?.value ?? ''}}
         value={db} placeholder='DB hostname/port'/>

        <input type="text" ref={tableRef} onInput={()=>{table.value = tableRef.current?.value ?? ''}}
        value={table} placeholder='table name'/>
        { status.value.success? <>
        <p>OK: {status.value.msg}</p>
        </>:<>
        <p style='color:red'>Error: {status.value.msg}</p>
        </>}
        <h5>Query</h5>
    </>
}