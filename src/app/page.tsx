"use client"
import { useEffect, useState } from 'react'
import { Questionario } from '@/components/Questionario'
import QuestaoModel from '@/model/questao'
import { useRouter } from 'next/navigation'

export default function Home() {
  
  const router = useRouter()
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)
  
  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`/api/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
  }
  
  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`/api/questoes?id=${idQuestao}`)
    const json = await resp.json()
    
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }
  
  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])
  
  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])
  
  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }
  
  function idProximaPergunta() {
    const proximoIndice = idsDasQuestoes.indexOf(questao ? questao.id : 0) + 1
    return idsDasQuestoes[proximoIndice]
  }
  
  function irPraProximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
  }
  
  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }
  
  function finalizar() {
    router.push(`/resultado?total=${idsDasQuestoes.length}&certas=${respostasCertas}`);
  }
  
  return questao ? (
    <Questionario
    questao={questao}
    ultima={idProximaPergunta() === undefined}
    questaoRespondida={questaoRespondida}
    irPraProximoPasso={irPraProximoPasso} />
    ) : (
      <div className='w-full h-full text-red-500'>
      Ocorreu um erro ao carregar as perguntas
    </div>
  )
}
