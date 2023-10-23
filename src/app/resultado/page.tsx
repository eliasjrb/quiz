"use client"

import styles from '@/styles/Resultado.module.css'
import Estatistica from '@/components/Estatistica'
import Botao from '@/components/Botao'
import { useSearchParams } from 'next/navigation'

export default function Resultado() {
    const searchParams = useSearchParams();

    const total:any = searchParams.get('total')
    const certas:any = searchParams.get('certas')
    const percentual = Math.round((+certas / +total) * 100)

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{ display: "flex" }}>
                <Estatistica texto="Perguntas" valor={total} />
                <Estatistica texto="Certas" valor={certas}
                    corFundo="#4cdf62"/>
                <Estatistica texto="Percentual" valor={`${percentual}%`}
                    corFundo="#DE6A33" />
            </div>
            <Botao href="/perguntas" texto="Tentar Novamente" />
            <Botao href="/" texto="Voltar para tela inicial" />
        </div>
    )
}