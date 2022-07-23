class SignupPage{

    go(){
        cy.visit('/')//visit - acessa o link

        //cy.get - usado para pegar o seletor que vou utilizar para o step
        cy.get('a[href="/deliver"]').click() // click - serve para fazer a ação de click no seletor escolhido.
        cy.get('#page-deliver h1').should('have.text','Cadastre-se para  fazer entregas') // checkpoint - should, verifica se o que eu tenho no seletor é igual ao texto selecionado
    }
    fillForm(deliver){
        cy.get('input[name="fullName"]').type(deliver.name) //type serve para eu pedir para ele escrever o valor da váriavel no campo.
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        cy.get('input[name="postalcode"]').type(deliver.adress.postalCode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.adress.number)
        cy.get('input[name="address-details"]').type(deliver.adress.complemento)
        //validação da api de CEP
        cy.get('#page-deliver input[name="address"]').should('have.value',deliver.adress.street)
        cy.get('#page-deliver input[name="district"]').should('have.value',deliver.adress.district)
        cy.get('#page-deliver input[name="city-uf"]').should('have.value',deliver.adress.city)

        //selecionar o método de entrega com busca do elemento pai e variável
        cy.contains('.delivery-method li', deliver.deliveryMethod).click()

        //upload de arquivos  (expressões regulares básicas ^ - começa com e $ termina com * contém)
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }
    submit(){
        cy.get('button[type="submit"]').click()
    }
    modalContentShouldBe(expectedMessage){
        
        cy.get('div[class="swal2-html-container"]').should('have.text', expectedMessage)
    }
    alertMessageShouldBe(expectedMessage){
        
        // cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }
    
}

export default new SignupPage;