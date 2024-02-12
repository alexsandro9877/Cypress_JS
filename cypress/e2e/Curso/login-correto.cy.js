import {logins} from  '../../support/commands';

describe('Pagina login ', () => {

    beforeEach(()=>{
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
        cy.intercept('POST','https://alurapic-api.onrender.com/user/login',{
            statusCode:400
        } ).as('stubPost')
    })
    it('Preecher campos corretos', () => {
         logins('catarinap','catarina123')
    });
    
    it('Preecher campos corretos', () => {
        logins('catarinap','catarina123ss')
        cy.wait('@stubPost')
   });

})
