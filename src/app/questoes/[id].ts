import questoes from '../bancoDeQuestoes'
import type { NextApiRequest, NextApiResponse } from 'next';

export default function questoesProId(req: NextApiRequest, res: NextApiResponse) {
    // const idSelecionado = +req.query.id
    const idSelecionado = +req

    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.paraObjeto())
    } else {
        // res.status(204).send()
        res.status(204).send({erro: "erro"})
    }
}