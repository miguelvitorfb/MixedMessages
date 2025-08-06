const mixedMessages = () => {
    const outMessage = document.querySelector("span")
    const random = Math.floor(Math.random() * 10)
    switch (random) {

        case value: 0
            outMessage.textContent = "Por que o JavaScript foi ao terapeuta?Porque ele tinha muitos problemas com escopo."
            break;

        case value: 1
            outMessage.textContent = "Como o programador sobreviveu ao apocalipse zumbi?Ele ficou em um loop infinito escondido."
            break;

        case value: 2
            outMessage.textContent = "O que um array disse para o outro?Me dá um espaço!"
            break;

        case value: 3
            outMessage.textContent = "Eu namorei um(a) front-end uma vez...Mas era só aparência."
            break;

        case value: 4
            outMessage.textContent = "Por que o programador morreu afogado?Porque foi nadar no Stack Overflow."
            break;

        case value: 5
            outMessage.textContent = "Qual o tipo de música que o código gosta?Lo-fi, porque sempre tá rodando em loop."
            break;

        case value: 6
            outMessage.textContent = "Tentei fazer um relacionamento dar certo…Mas a variável era const."
            break;
        case value: 7
            outMessage.textContent = "Por que o código terminou com a função?Ela só retornava problema."
            break;

        case value: 8
            outMessage.textContent = "Git é como ex: você sabe que devia dar um commit, mas continua dando push nos conflitos."
            break;

        default:
            outMessage.textContent = "O que acontece quando você tenta dividir por zero?O universo lança uma exception."
            break;
    }
}

window.onload(mixedMessages())