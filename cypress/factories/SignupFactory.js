import { faker } from '@faker-js/faker';
import { generate } from 'gerador-validador-cpf';
export default{
    deliver: function(){
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var data = {
            name:`${firstName} ${lastName}`,
                cpf:generate(),
                email:faker.internet.email(firstName),
                whatsapp:"11999999999",
                adress: { 
                    postalCode:"03685140",
                    street:"Rua Sino Grande",
                    number:26,
                    complemento:"casa 1",
                    district:"Jardim São Nicolau",
                    city:"São Paulo/SP"
                },
                deliveryMethod:"Moto",
                cnh:"cnh-digital.jpg.jpg"
        }
    return data
    }
}