import { embaralhar } from '@/functions/arrays'
import questoes from '../bancoDeQuestoes'
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, res: NextResponse) {
    const ids = questoes.map(questao => questao.id)
    return NextResponse.json(embaralhar(ids))
}