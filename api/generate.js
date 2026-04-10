export default async function handler(req,res){

const {tipo,dados} = req.body

let texto=""

if(tipo==="contrato"){

texto=`
CONTRATO DE LOCAÇÃO

${dados}

Assinaturas:
`

}

if(tipo==="notificacao"){

texto=`
NOTIFICAÇÃO EXTRAJUDICIAL

${dados}
`

}

if(tipo==="declaracao"){

texto=`
DECLARAÇÃO

${dados}
`

}

res.status(200).json({texto})

}
