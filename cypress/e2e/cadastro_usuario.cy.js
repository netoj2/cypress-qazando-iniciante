/// <reference types="cypress" />

import { faker } from "@faker-js/faker"
import commum_page from "../support/pages/commum_page"
import cadastro_page from "../support/pages/cadastro_usuario_page"

describe('Cadastro de usuário', ()=>{

    beforeEach("Acessar cadastro de usuário", ()=>{
        commum_page.acessarCadastroUsuario()
    })

    it("Campo nome vazio",()=>{
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro("O campo nome deve ser prenchidoooo")
    })

    it("Campo e-mail vazio",()=>{
        cadastro_page.preencherNome(faker.name.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro("O campo e-mail deve ser prenchido corretamente")
    })

    it("Campo e-mail inválido",()=>{
        cadastro_page.preencherNome(faker.name.fullName())
        cadastro_page.preencherEmail(faker.name.firstName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro("O campo e-mail deve ser prenchido corretamente")
    })

    it("Campo senha vazio",()=>{
        cadastro_page.preencherNome(faker.name.fullName())
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro("O campo senha deve ter pelo menos 6 dígitos")
    })

    it("Campo senha inválido",()=>{
        cadastro_page.preencherNome(faker.name.fullName())
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.preencherSenha("1234")
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro("O campo senha deve ter pelo menos 6 dígitos")
    })

    it("Cadastro com sucesso", async ()=>{  //asyc - Colocar como assincrono, dizer que só vai acontecer as coisas depois de fazer os comandos que mandei
        const name = await faker.name.fullName()  // nesse caso, coloquei await aqui, para ele só continuar o teste depois que setar o fakename na variavel name

        cadastro_page.preencherNome(name)
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.preencherSenha("123456")
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(name)
    })

})