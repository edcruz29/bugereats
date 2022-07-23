import signup from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory' //puxa a massa dinâmica de testes
import SignupPage from '../pages/SignupPage'
describe('Signup', ()=> {
    // before(function(){
    //     cy.log('Tudo aqui é executado apenas uma vez antes de Todos os casos de Testes')
    // })
    // beforeEach(function(){
    //     cy.fixture("deliver").then((d)=>{
    //         this.deliver = d

    //     })
    // })
    // after(function(){
    //     cy.log('Tudo aqui é executado apenas uma vez depois de Todos os casos de Testes')
    // })
    it('User should be deliver', function(){
        //Massa de teste
        var deliver = SignupFactory.deliver()
        const expectedMessage ='Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)
    })
    it('Incorrect ID', function(){
        //cy.get - usado para pegar o seletor que vou utilizar para o step
        //Massa de teste
        var deliver = SignupFactory.deliver()
        deliver.cpf='000000141aa'
        const expectedMessage ='Oops! CPF inválido'
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe(expectedMessage)
        
    }) 
    it('Incorrect Email', function(){
        //cy.get - usado para pegar o seletor que vou utilizar para o step
        //Massa de teste
        var deliver = SignupFactory.deliver()
        deliver.email='teste.com.br'
        const expectedMessage ='Oops! Email com formato inválido.'
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe(expectedMessage)
        
    }) 
    context('Required fields', function(){
        const messages =[
            {field: 'name', output:'É necessário informar o nome'},
            {field: 'cpf', output:'É necessário informar o CPF'},
            {field: 'email', output:'É necessário informar o email'},
            {field: 'postalcode', output:'É necessário informar o CEP'},
            {field: 'number', output:'É necessário informar o número do endereço'},
            {field: 'deliveryMethod', output:'Selecione o método de entrega'},
            {field: 'CNH', output:'Adicione uma foto da sua CNH'}
        ]
        before(function(){
            SignupPage.go()
            SignupPage.submit()
        })
        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
})