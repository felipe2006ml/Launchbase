const alunos1 = [
    {
        nome: 'Luis',
        nota: 9.5
    },
    {
        nome: 'Carlos',
        nota: 8
    },
    {
        nome: 'Lopes',
        nota: 6
    }
]

function calculaMedia(alunos) {
    let soma = 0
    for(let i = 0; i<alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length

    console.log(media)
}

calculaMedia(alunos1)