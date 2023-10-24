import portugues from '../bancoDeQuestoesPortugues'
import matematica from '../bancoDeQuestoesMatematica'
import ciencia from '../bancoDeQuestoesCiencia'
import historia from '../bancoDeQuestoesHistoria'
import { NextResponse } from "next/server";

const materias = [portugues, matematica, ciencia, historia]

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get("id")
    const paramMateria:any = searchParams.get("mat")

    const idSelecionado = query ? +query : 0

    const unicaQuestaoOuNada = materias[+paramMateria].filter(questao => questao.id === idSelecionado)

    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        return NextResponse.json(questaoSelecionada.paraObjeto())
    } else {
        return NextResponse.json({ erro: "erro aqui" })
    }
}