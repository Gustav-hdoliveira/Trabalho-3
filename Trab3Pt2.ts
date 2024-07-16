var reader = require('readline-sync')
let dataHJ = "2006/07/15"
let hj = dataHJ.split('/').reverse().join('/')

class Pessoa {
    primeiroNome: string
    sobrenome: string
    nome_do_pai: string
    nome_da_mãe: string
    numeroRG: number
    numeroCPF: number
    dataNascimento: string

    constructor(nome: string, sobrenome:string, nome_do_pai: string, nome_da_mae:string, numero_rg:number, numero_cpf:number, data_de_nascimento: string){
        this.primeiroNome = nome
        this.sobrenome = sobrenome
        this.nome_do_pai = nome_do_pai
        this.nome_da_mãe = nome_da_mae
        this.numeroRG = numero_rg
        this.numeroCPF = numero_cpf
        this.dataNascimento = data_de_nascimento
    }
    setANDget(): void{
        let nomeUpdate = reader.question("Qual o primeiro nome ?")
        this.primeiroNome = nomeUpdate
        let nome2Update = reader.question("Qual o sobrenome? ")
        this.sobrenome = nome2Update
        let nomePAIupdate = reader.question("Qual o nome do Pai? ")
        this.nome_do_pai = nomePAIupdate
        let nomeMãeUpdate = reader.question("Qual o nome da Mãe? ")
        this.nome_da_mãe = nomeMãeUpdate
        let RGUPdate = reader.question("Qual o RG? ")
        this.numeroRG = RGUPdate
        let CPFUpdate = reader.question("Qual o CPF? ")
        this.numeroCPF = CPFUpdate
        let NascimentoUP = reader.question("Qual a data de nascimento? ")
        const dataFormatada = NascimentoUP.split('/').reverse().join('/')
        this.dataNascimento = dataFormatada
        console.log(Pessoa)
    }

    SistemaIdade(): void{
        if (this.dataNascimento < hj ) {
            console.log(`Os responsaveis de ${this.primeiroNome, this.sobrenome}, são ${this.nome_do_pai}(pai) e ${this.nome_da_mãe}(mãe)`);
        } else {
            console.log("não são nescessarios responsaveis");
        }
    }
}