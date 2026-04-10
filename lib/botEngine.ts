export async function runBot(command){

const response = await fetch("/api/command",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({command})
})

const data = await response.json()

return data.result

}
