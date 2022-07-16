describe('Cadastro', ()=> {
    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app/')//visit - acessa o link

        //cy.get - usado para pegar o seletor que vou utilizar para o step
        cy.get('a[href="/deliver"]').click() // click - serve para fazer a ação de click no seletor escolhido.
        cy.get('#page-deliver h1').should('have.text','Cadastre-se para  fazer entregas') // checkpoint - should, verifica se o que eu tenho no seletor é igual ao texto selecionado

        //Massa de teste
        var entregador = { 
            nome:'Eduardo Cruz',
            cpf:'00000014141',
            email:'teste@gmail.com',
            whatsapp:'11999999999',
            endereco: { 
                cep:'03685140',
                rua:'Rua Sino Grande',
                numero:'26',
                complemento:'casa 1',
                bairro:'Jardim São Nicolau',
                cidade:'São Paulo/SP'
            }
        }
        cy.get('input[name="name"]').type(entregador.nome) //type serve para eu pedir para ele escrever o valor da váriavel no campo.
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        //validação da api de CEP
        cy.get('#page-deliver input[name="address"]').should('have.value',entregador.endereco.rua)
        cy.get('#page-deliver input[name="district"]').should('have.value',entregador.endereco.bairro)
        cy.get('#page-deliver input[name="city-uf"]').should('have.value',entregador.endereco.cidade)
    })
})