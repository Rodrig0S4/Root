const latinhas = ["Koka-Kola" , "Esprite"] // Está errado o nome propositalmente.

latinhas.push("colecao-especial")


const latinhasNaoEsprite = latinhas.filter(latinha => {
    return latinha !== "Esprite"
})

const latinhaKoka = latinhas.find(function(latinha) {
    return false;
})

const found = latinhas.includes("colecao-especial", 1)

const novasLatinhas = [... latinhas, "Tubaina"]

const latinhasAtualizadas = novasLatinhas.slice(-2)

latinhas.pop()

console.log(latinhas)