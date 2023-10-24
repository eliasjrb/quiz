import { embaralhar } from '@/functions/arrays'
import portugues from '../bancoDeQuestoesPortugues'
import { NextResponse } from "next/server";

export function GET(req: Request) {
    const ids = portugues.map(questao => questao.id)
    return NextResponse.json(embaralhar(ids))
}