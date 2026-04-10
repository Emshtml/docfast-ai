import { NextResponse } from "next/server"

export async function POST(req: Request) {

const { command } = await req.json()

let result = "Comando não reconhecido"

if(command.includes("contrato")){
result = "Contrato de aluguel gerado"
}

if(command.includes("recibo")){
result = "Recibo gerado"
}

return NextResponse.json({
success:true,
result
})

}
