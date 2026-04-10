"use client"

import { useState } from "react"

export default function CommandBox(){

const [command,setCommand] = useState("")
const [result,setResult] = useState("")

async function run(){

const res = await fetch("/api/command",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({command})
})

const data = await res.json()

setResult(data.result)

}

return(

<div>

<input
value={command}
onChange={(e)=>setCommand(e.target.value)}
placeholder="/doc contrato"
/>

<button onClick={run}>
Executar
</button>

<pre>{result}</pre>

</div>

)

}
