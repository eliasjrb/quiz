import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const ciencia: QuestaoModel[] = [
    new QuestaoModel(1, 'Qual é a unidade básica da vida?', [
        RespostaModel.errada('Proteína'),
        RespostaModel.errada('Átomo'),
        RespostaModel.errada('Molécula'),
        RespostaModel.errada('DNA'),
        RespostaModel.certa('Célula')
    ]),
    new QuestaoModel(2, 'Qual é o processo pelo qual as plantas fabricam seu próprio alimento?', [
        RespostaModel.errada('Fotoanalise'),
        RespostaModel.errada('Digestão'),
        RespostaModel.errada('Respiração celular'),
        RespostaModel.errada('Absorção'),
        RespostaModel.certa('Fotossíntese')
    ]),
    new QuestaoModel(3, 'Qual é o órgão responsável pela produção da insulina no corpo humano?', [
        RespostaModel.errada('Estômago'),
        RespostaModel.errada('Coração'),
        RespostaModel.errada('Rim'),
        RespostaModel.errada('Fígado'),
        RespostaModel.certa('Pâncreas')
    ]),
    new QuestaoModel(4, 'Qual é a função do sistema respiratório?', [
        RespostaModel.errada('Produzir hormônios'),
        RespostaModel.errada('Realizar a digestão'),
        RespostaModel.errada('Circulação sanguínea'),
        RespostaModel.errada('Eliminação de resíduos'),
        RespostaModel.certa('Troca de gases com o ambiente')
    ]),
    new QuestaoModel(5, 'Qual é o maior órgão do corpo humano?', [
        RespostaModel.errada('Coração'),
        RespostaModel.errada('Fígado'),
        RespostaModel.errada('Cérebro'),
        RespostaModel.errada('Pulmões'),
        RespostaModel.certa('Pele')
    ]),
    new QuestaoModel(6, 'O que é mitose?', [
        RespostaModel.errada('Processo de divisão celular que forma células sexuais'),
        RespostaModel.errada('Processo de divisão celular que forma células somáticas'),
        RespostaModel.errada('Processo de respiração celular'),
        RespostaModel.errada('Processo de fotossíntese'),
        RespostaModel.certa('Processo de divisão celular que forma duas células filhas idênticas à célula-mãe')
    ]),
    new QuestaoModel(7, 'O que são os genes?', [
        RespostaModel.errada('Partículas subatômicas'),
        RespostaModel.errada('Proteínas'),
        RespostaModel.errada('Enzimas'),
        RespostaModel.errada('Ácidos nucleicos'),
        RespostaModel.certa('Segmentos de DNA que contêm informações genéticas hereditárias')
    ]),
    new QuestaoModel(8, 'O que é a homeostase?', [
        RespostaModel.errada('Processo de divisão celular'),
        RespostaModel.errada('Equilíbrio ecológico'),
        RespostaModel.errada('Produção de energia'),
        RespostaModel.errada('Troca de gases nos pulmões'),
        RespostaModel.certa('Manutenção do equilíbrio interno do corpo, regulando suas condições físicas e químicas')
    ]),
    new QuestaoModel(9, 'O que é a Lei da Segregação dos Alelos?', [
        RespostaModel.errada('Todos os alelos se segregam durante a mitose'),
        RespostaModel.errada('Cada indivíduo possui apenas um alelo para cada característica'),
        RespostaModel.errada('Alelos diferentes se combinam durante a fecundação'),
        RespostaModel.errada('Alelos idênticos se combinam durante a fecundação'),
        RespostaModel.certa('Cada indivíduo possui dois alelos para cada característica, um herdado de cada progenitor, que se segregam durante a formação dos gametas')
    ]),
    new QuestaoModel(10, 'O que é um ecossistema?', [
        RespostaModel.errada('Um organismo unicelular'),
        RespostaModel.errada('Uma comunidade de organismos'),
        RespostaModel.errada('Um conjunto de órgãos em um organismo'),
        RespostaModel.errada('Uma célula animal'),
        RespostaModel.certa('Um sistema formado por seres vivos, seu ambiente físico e as interações entre eles')
    ]),
    new QuestaoModel(11, 'O que é um átomo?', [
        RespostaModel.errada('Uma molécula'),
        RespostaModel.errada('Uma célula'),
        RespostaModel.errada('Um organismo'),
        RespostaModel.errada('Uma partícula subatômica'),
        RespostaModel.certa('A menor unidade de um elemento químico que mantém as propriedades químicas desse elemento')
    ]),
    new QuestaoModel(12, 'O que é a fotossíntese?', [
        RespostaModel.errada('Processo de respiração celular'),
        RespostaModel.errada('Processo de digestão'),
        RespostaModel.errada('Processo de absorção de nutrientes pelas células'),
        RespostaModel.errada('Processo de produção de água'),
        RespostaModel.certa('Processo pelo qual as plantas e outros organismos transformam luz solar, dióxido de carbono e água em açúcares e oxigênio')
    ]),
    new QuestaoModel(13, 'Qual é o papel do sistema circulatório no corpo humano?', [
        RespostaModel.errada('Digestão dos alimentos'),
        RespostaModel.errada('Produção de hormônios'),
        RespostaModel.errada('Eliminação de resíduos'),
        RespostaModel.errada('Respiração celular'),
        RespostaModel.certa('Transporte de nutrientes, oxigênio e hormônios para as células do corpo')
    ]),
    new QuestaoModel(14, 'O que são enzimas?', [
        RespostaModel.errada('Partículas subatômicas'),
        RespostaModel.errada('Proteínas transportadoras'),
        RespostaModel.errada('Lipídios'),
        RespostaModel.errada('Ácidos nucleicos'),
        RespostaModel.certa('Proteínas que atuam como catalisadores, acelerando reações químicas no organismo')
    ]),
    new QuestaoModel(15, 'O que é a biodiversidade?', [
        RespostaModel.errada('Número de células em um organismo'),
        RespostaModel.errada('Variedade de átomos em uma substância'),
        RespostaModel.errada('Variedade de cores em um ambiente'),
        RespostaModel.errada('Número de espécies em um ecossistema'),
        RespostaModel.certa('Variedade de formas de vida, incluindo diversidade genética, de espécies e de ecossistemas')
    ]),
    new QuestaoModel(16, 'O que é a teoria celular?', [
        RespostaModel.errada('Teoria que descreve a formação das células'),
        RespostaModel.errada('Teoria que explica a formação dos átomos'),
        RespostaModel.errada('Teoria que explica a formação das estrelas'),
        RespostaModel.errada('Teoria que descreve a origem da vida'),
        RespostaModel.certa('Princípio fundamental da biologia que afirma que todos os organismos são compostos por células, que são a unidade básica da vida')
    ]),
    new QuestaoModel(17, 'O que é um bioma?', [
        RespostaModel.errada('Uma espécie de planta'),
        RespostaModel.errada('Uma espécie de animal'),
        RespostaModel.errada('Uma comunidade de organismos'),
        RespostaModel.errada('Um ecossistema aquático'),
        RespostaModel.certa('Uma grande área geográfica com características climáticas e ecológicas específicas, que abriga uma variedade de seres vivos adaptados a essas condições')
    ]),
    new QuestaoModel(18, 'O que é a respiração celular?', [
        RespostaModel.errada('Processo de troca de gases nos pulmões'),
        RespostaModel.errada('Processo de absorção de nutrientes pelas células'),
        RespostaModel.errada('Processo de fotossíntese'),
        RespostaModel.errada('Processo de digestão'),
        RespostaModel.certa('Processo pelo qual as células produzem energia a partir da oxidação de compostos orgânicos, como glicose, para realizar suas atividades metabólicas')
    ]),
    new QuestaoModel(19, 'O que são organismos autotróficos?', [
        RespostaModel.errada('Organismos que se alimentam de outros organismos'),
        RespostaModel.errada('Organismos que não se alimentam'),
        RespostaModel.errada('Organismos que respiram oxigênio'),
        RespostaModel.errada('Organismos que não precisam de água'),
        RespostaModel.certa('Organismos capazes de produzir seu próprio alimento a partir de substâncias inorgânicas, como plantas que realizam a fotossíntese')
    ]),
    new QuestaoModel(20, 'O que é a evolução biológica?', [
        RespostaModel.errada('Extinção de espécies'),
        RespostaModel.errada('Aumento da diversidade genética'),
        RespostaModel.errada('Diminuição da biodiversidade'),
        RespostaModel.errada('Processo de seleção artificial'),
        RespostaModel.certa('Processo contínuo de mudança nas populações de organismos ao longo do tempo, resultando na diversidade de formas de vida na Terra')
    ])    
]

export default ciencia