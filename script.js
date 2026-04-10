async function gerar(){

const tipo = document.getElementById("tipo").value
const dados = document.getElementById("dados").value

const res = await fetch("/api/generate",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
tipo,
dados
})
})

const data = await res.json()

document.getElementById("resultado").innerText = data.texto

}
