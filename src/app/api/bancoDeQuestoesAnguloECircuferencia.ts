import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const anguloECircuferencia: QuestaoModel[] = [
    new QuestaoModel(1, 'Qual é a medida, em graus, de um ângulo completo na circunferência?', [
        RespostaModel.errada('90°'),
        RespostaModel.errada('120°'),
        RespostaModel.errada('180°'),
        RespostaModel.errada('270°'),
        RespostaModel.certa('360°')
    ]),
    new QuestaoModel(2, 'O que representa um ângulo central de 60° em uma circunferência?', [
        RespostaModel.errada('Um oitavo da circunferência'),
        RespostaModel.errada('Um quarto da circunferência'),
        RespostaModel.errada('Um terço da circunferência'),
        RespostaModel.errada('Metade da circunferência'),
        RespostaModel.certa('Um sexto da circunferência')
    ]),
    new QuestaoModel(3, 'Se um arco de uma circunferência mede 90°, qual é a medida do ângulo central correspondente?', [
        RespostaModel.errada('30°'),
        RespostaModel.errada('45°'),
        RespostaModel.errada('60°'),
        RespostaModel.errada('120°'),
        RespostaModel.certa('90°')
    ]),
    new QuestaoModel(4, 'Qual é a relação entre um ângulo inscrito de uma circunferência e o arco correspondente?', [
        RespostaModel.errada('O arco é metade do ângulo'),
        RespostaModel.errada('O arco é o triplo do ângulo'),
        RespostaModel.errada('O arco é o quinto do ângulo'),
        RespostaModel.errada('O arco é um quarto do ângulo'),
        RespostaModel.certa('O arco é o dobro do ângulo')
    ]),
    new QuestaoModel(5, 'Qual é a medida de um ângulo inscrito que intercepta um arco de 120° em uma circunferência?', [
        RespostaModel.errada('30°'),
        RespostaModel.errada('45°'),
        RespostaModel.errada('70°'),
        RespostaModel.errada('90°'),
        RespostaModel.certa('60°')
    ]),
    new QuestaoModel(6, 'O que é um ângulo semi-inscrito em uma circunferência?', [
        RespostaModel.errada('Um ângulo com medida de 45°'),
        RespostaModel.errada('Um ângulo com medida de 60°'),
        RespostaModel.errada('Um ângulo que divide a circunferência ao meio'),
        RespostaModel.errada('Um ângulo que divide o arco ao meio'),
        RespostaModel.certa('Um ângulo cujo lado contém um diâmetro da circunferência')
    ]),
    new QuestaoModel(7, 'Se um arco de uma circunferência mede 60°, qual é a medida do ângulo inscrito correspondente?', [
        RespostaModel.errada('30°'),
        RespostaModel.errada('45°'),
        RespostaModel.errada('70°'),
        RespostaModel.errada('120°'),
        RespostaModel.certa('60°')
    ]),
    new QuestaoModel(8, 'Qual é a medida de um ângulo inscrito que intercepta um arco de 90° em uma circunferência?', [
        RespostaModel.errada('30°'),
        RespostaModel.errada('45°'),
        RespostaModel.errada('60°'),
        RespostaModel.errada('120°'),
        RespostaModel.certa('90°')
    ]),
    new QuestaoModel(9, 'Se um arco de uma circunferência mede 45°, qual é a medida do ângulo central correspondente?', [
        RespostaModel.errada('15°'),
        RespostaModel.errada('30°'),
        RespostaModel.errada('40°'),
        RespostaModel.errada('90°'),
        RespostaModel.certa('45°')
    ]),
    new QuestaoModel(10, 'Qual é a medida de um ângulo inscrito que intercepta um arco de 180° em uma circunferência?', [
        RespostaModel.errada('30°'),
        RespostaModel.errada('45°'),
        RespostaModel.errada('60°'),
        RespostaModel.errada('90°'),
        RespostaModel.certa('180°')
    ]),
    new QuestaoModel(11, 'Qual é a medida do ângulo formado por dois raios que partem do centro de uma circunferência e interceptam um arco de 120°?', [
        RespostaModel.errada('30°'),
        RespostaModel.errada('45°'),
        RespostaModel.errada('70°'),
        RespostaModel.errada('90°'),
        RespostaModel.certa('60°')
    ]),
    new QuestaoModel(12, 'Qual é a medida de um ângulo inscrito que intercepta um arco de 75° em uma circunferência?', [
        RespostaModel.errada('15°'),
        RespostaModel.errada('25°'),
        RespostaModel.errada('35°'),
        RespostaModel.errada('45°'),
        RespostaModel.certa('75°')
    ]),
    new QuestaoModel(13, 'Se um arco de uma circunferência mede 120°, qual é a medida do ângulo inscrito correspondente?', [
        RespostaModel.errada('30°'),
        RespostaModel.errada('45°'),
        RespostaModel.errada('60°'),
        RespostaModel.errada('90°'),
        RespostaModel.certa('120°')
    ]),
    new QuestaoModel(14, 'Qual é a medida de um ângulo inscrito que intercepta um arco de 150° em uma circunferência?', [
        RespostaModel.errada('15°'),
        RespostaModel.errada('30°'),
        RespostaModel.errada('45°'),
        RespostaModel.errada('75°'),
        RespostaModel.certa('150°')
    ]),
    new QuestaoModel(15, 'Se um arco de uma circunferência mede 30°, qual é a medida do ângulo central correspondente?', [
        RespostaModel.errada('15°'),
        RespostaModel.errada('20°'),
        RespostaModel.errada('25°'),
        RespostaModel.errada('35°'),
        RespostaModel.certa('30°')
    ]),
    new QuestaoModel(16, 'Qual é a medida de um ângulo inscrito que intercepta um arco de 45° em uma circunferência?', [
        RespostaModel.errada('15°'),
        RespostaModel.errada('25°'),
        RespostaModel.errada('30°'),
        RespostaModel.errada('35°'),
        RespostaModel.certa('45°')
    ]),
    new QuestaoModel(17, 'Se um arco de uma circunferência mede 135°, qual é a medida do ângulo inscrito correspondente?', [
        RespostaModel.errada('45°'),
        RespostaModel.errada('60°'),
        RespostaModel.errada('90°'),
        RespostaModel.errada('120°'),
        RespostaModel.certa('135°')
    ]),
    new QuestaoModel(18, 'Qual é a medida de um ângulo inscrito que intercepta um arco de 165° em uma circunferência?', [
        RespostaModel.errada('15°'),
        RespostaModel.errada('30°'),
        RespostaModel.errada('75°'),
        RespostaModel.errada('150°'),
        RespostaModel.certa('165°')
    ]),
    new QuestaoModel(19, 'Se um arco de uma circunferência mede 210°, qual é a medida do ângulo inscrito correspondente?', [
        RespostaModel.errada('30°'),
        RespostaModel.errada('45°'),
        RespostaModel.errada('120°'),
        RespostaModel.errada('180°'),
        RespostaModel.certa('210°')
    ]),
    new QuestaoModel(20, 'Qual é a medida de um ângulo inscrito que intercepta um arco de 240° em uma circunferência?', [
        RespostaModel.errada('30°'),
        RespostaModel.errada('60°'),
        RespostaModel.errada('120°'),
        RespostaModel.errada('180°'),
        RespostaModel.certa('240°')
    ])       
]

export default anguloECircuferencia