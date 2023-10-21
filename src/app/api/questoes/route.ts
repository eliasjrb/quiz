import questoes from '../bancoDeQuestoes'
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get("id")

    const idSelecionado = query ? +query : 0

    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        return NextResponse.json(questaoSelecionada.paraObjeto())
    } else {
        return NextResponse.json({ erro: "erro aqui" })
    }
}