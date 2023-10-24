import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const matematica: QuestaoModel[] = [
    new QuestaoModel(1, 'Qual é o resultado de 12 + 7?', [
        RespostaModel.errada('18'),
        RespostaModel.errada('20'),
        RespostaModel.errada('22'),
        RespostaModel.errada('25'),
        RespostaModel.certa('19')
    ]),
    new QuestaoModel(2, 'Qual é o valor de √16?', [
        RespostaModel.errada('2'),
        RespostaModel.errada('6'),
        RespostaModel.errada('8'),
        RespostaModel.errada('10'),
        RespostaModel.certa('4')
    ]),
    new QuestaoModel(3, 'Quanto é 5²?', [
        RespostaModel.errada('10'),
        RespostaModel.errada('15'),
        RespostaModel.errada('35'),
        RespostaModel.errada('30'),
        RespostaModel.certa('25')
    ]),
    new QuestaoModel(4, 'Qual é a área de um retângulo com comprimento 8 unidades e largura 5 unidades?', [
        RespostaModel.errada('30 unidades quadradas'),
        RespostaModel.errada('35 unidades quadradas'),
        RespostaModel.errada('50 unidades quadradas'),
        RespostaModel.errada('45 unidades quadradas'),
        RespostaModel.certa('40 unidades quadradas')
    ]),
    new QuestaoModel(5, 'Quanto é 3! (3 fatorial)?', [
        RespostaModel.errada('3'),
        RespostaModel.errada('15'),
        RespostaModel.errada('9'),
        RespostaModel.errada('12'),
        RespostaModel.certa('6')
    ]),
    new QuestaoModel(6, 'Qual é a derivada de x² em relação a x?', [
        RespostaModel.errada('x'),
        RespostaModel.errada('4x'),
        RespostaModel.errada('3x'),
        RespostaModel.errada('x³'),
        RespostaModel.certa('2x')
    ]),
    new QuestaoModel(7, 'Qual é o próximo termo na sequência: 3, 6, 12, 24, ...?', [
        RespostaModel.errada('36'),
        RespostaModel.errada('46'),
        RespostaModel.errada('60'),
        RespostaModel.errada('72'),
        RespostaModel.certa('48')
    ]),
    new QuestaoModel(8, 'Qual é o resultado de 7 ÷ 2?', [
        RespostaModel.errada('2.5'),
        RespostaModel.errada('3'),
        RespostaModel.errada('3.75'),
        RespostaModel.errada('4'),
        RespostaModel.certa('3.5')
    ]),
    new QuestaoModel(9, 'Qual é a solução da equação 2x - 5 = 3?', [
        RespostaModel.errada('x = 1'),
        RespostaModel.errada('x = 2'),
        RespostaModel.errada('x = 3'),
        RespostaModel.errada('x = 5'),
        RespostaModel.certa('x = 4')
    ]),
    new QuestaoModel(10, 'Qual é a área de um círculo com raio de 6 unidades?', [
        RespostaModel.errada('18π unidades quadradas'),
        RespostaModel.errada('24π unidades quadradas'),
        RespostaModel.errada('32π unidades quadradas'),
        RespostaModel.errada('48π unidades quadradas'),
        RespostaModel.certa('36π unidades quadradas')
    ]),
    new QuestaoModel(11, 'Qual é o volume de um cilindro com raio de 4 unidades e altura de 10 unidades?', [
        RespostaModel.errada('80π unidades cúbicas'),
        RespostaModel.errada('100π unidades cúbicas'),
        RespostaModel.errada('120π unidades cúbicas'),
        RespostaModel.errada('140π unidades cúbicas'),
        RespostaModel.certa('160π unidades cúbicas')
    ]),
    new QuestaoModel(12, 'Qual é a área de um círculo com raio de 5 unidades?', [
        RespostaModel.errada('10 unidades quadradas'),
        RespostaModel.errada('15 unidades quadradas'),
        RespostaModel.errada('20 unidades quadradas'),
        RespostaModel.errada('30 unidades quadradas'),
        RespostaModel.certa('25 unidades quadradas')
    ]),
    new QuestaoModel(13, 'Qual é o logaritmo de 1000 na base 10?', [
        RespostaModel.errada('2'),
        RespostaModel.errada('6'),
        RespostaModel.errada('4'),
        RespostaModel.errada('5'),
        RespostaModel.certa('3')
    ]),
    new QuestaoModel(14, 'Qual é a medida do terceiro lado de um triângulo retângulo com lados de 5 unidades e 12 unidades?', [
        RespostaModel.errada('8 unidades'),
        RespostaModel.errada('10 unidades'),
        RespostaModel.errada('12 unidades'),
        RespostaModel.errada('15 unidades'),
        RespostaModel.certa('13 unidades')
    ]),
    new QuestaoModel(15, 'Qual é o resultado de 2^4 (2 elevado à quarta potência)?', [
        RespostaModel.errada('8'),
        RespostaModel.errada('18'),
        RespostaModel.errada('32'),
        RespostaModel.errada('64'),
        RespostaModel.certa('16')
    ]),
    new QuestaoModel(16, 'Qual é o resultado de 2 + 3 x 4?', [
        RespostaModel.errada('18'),
        RespostaModel.errada('16'),
        RespostaModel.errada('20'),
        RespostaModel.errada('25'),
        RespostaModel.certa('14')
    ]),
    new QuestaoModel(17, 'Qual é o resultado de 3 + 4 x 2?', [
        RespostaModel.errada('10'),
        RespostaModel.errada('9'),
        RespostaModel.errada('14'),
        RespostaModel.errada('15'),
        RespostaModel.certa('11')
    ]),
    new QuestaoModel(18, 'Qual é o próximo termo na sequência: 1, 4, 9, 16, ...?', [
        RespostaModel.errada('20'),
        RespostaModel.errada('24'),
        RespostaModel.errada('28'),
        RespostaModel.errada('30'),
        RespostaModel.certa('25')
    ]),
    new QuestaoModel(19, 'Qual é o resultado de 9²?', [
        RespostaModel.errada('85'),
        RespostaModel.errada('90'),
        RespostaModel.errada('100'),
        RespostaModel.errada('110'),
        RespostaModel.certa('81')
    ]),
    new QuestaoModel(20, 'Qual é o resultado de 10 ÷ 2?', [
        RespostaModel.errada('3'),
        RespostaModel.errada('4'),
        RespostaModel.errada('5'),
        RespostaModel.errada('6'),
        RespostaModel.certa('5')
    ])
]

export default matematica