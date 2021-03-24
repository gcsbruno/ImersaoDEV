const primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
const segundoValor = parseInt(prompt("Digite o segundo valor:"))
const operacao = prompt("Digite 1 para multiplicação, 2 para divisão, 3 para soma e 4 para subtração")


if (operacao == 1) {
    const resultado1 = primeiroValor * segundoValor 
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado1 + "</h2>")
}

else if (operacao == 2) {
    const resultado2 = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado2 + "</h2>")
}

else if (operacao == 3) {
    const resultado3 = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado3 + "</h2>")
}

else if (operacao == 4) {
    const resultado4 = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado4 + "</h2>")

} else {
    document.write(`<h3>Não é uma operação</h3>`)
}
