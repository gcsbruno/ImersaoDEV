const numeroSecreto = 3

const chute = parseInt(prompt("Digite um número entre 0 e 10"))

if (numeroSecreto == chute)
{
    alert ("Acertou!")
} else {
    alert("Errou. O número secreto era " + numeroSecreto)
}