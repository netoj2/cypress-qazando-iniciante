/// <reference types="cypress" />

export default{
    acessarCadastroUsuario(){   //# - ID / . - class
        cy.visit("/").get("#top_header").get(".fa-lock").click()
    }
}