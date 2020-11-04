// Intro
// Crie um programa para realizar operações bancárias na conta de um usuário.

// Comece criando um objeto com o nome do usuário, suas transações e saldo.

// As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if(transaction.type =='credit') {
        user.balance = user.balance + transaction.value
    }
    else{
        user.balance = user.balance - transaction.value
    }
}

createTransaction({type: 'credit',value: 75.5})
createTransaction({type: 'credit',value: 50.5})
createTransaction({type: 'credit',value: 100.5})
createTransaction({type: 'debit',value: 35})
createTransaction({type: 'debit',value: 23})

function getHigherTransactionByType(type){
    let maiorTransacao
    let maiorValor = 0
    for(transaction of user.transactions) {
        if(transaction.type === type && transaction.value > maiorValor) {
            maiorValor = transaction.value
            maiorTransacao = transaction
        }
    }
    return maiorTransacao
}

function getAverageTransactionValue(){
    let soma = 0
    for(transaction of user.transactions){
        soma = transaction.value + soma
    }
    return soma/(user.transactions.length)
}

function getTransactionsCount(){
    let transactions = {
        credit: 0,
        debit: 0
    }
    for(transaction of user.transactions){
        if(transaction.type == 'credit'){
            transactions.credit = transactions.credit+1
        }
        else{
            transactions.debit = transactions.debit+1
        }
    }
    return transactions
}

console.log(getHigherTransactionByType('credit'))
console.log(getAverageTransactionValue())
console.log(getTransactionsCount())