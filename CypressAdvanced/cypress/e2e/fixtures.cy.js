import { loginPage } from "./PageObjects/LoginPage"
describe('Fixtures',function(){
    beforeEach('',()=>{
        loginPage.visit();
    })

    it('Login erroneo con fixtures',function(){
        loginPage.validateLoginPage();
        cy.fixture('credentials').then(credentials =>{
            loginPage.login(credentials.email,credentials.password);
        })
        
        loginPage.validateErrorLogin();
    })

    it('Login con fixtures',function(){
        loginPage.validateLoginPage();
        cy.fixture('credentialsCorrect').then(credentials =>{
            loginPage.login(credentials.email,credentials.password);
        })
        loginPage.validateSuccessLogin();
    });
});

//checar archivos por iteracion

const archivosLogin =[
    {
        nombre:"credentials",
        titulo:"Credenciales incorrectas"
    },
    {
        nombre:"credentialsCorrect",
        titulo:"Credenciales correctas"
    }
];

archivosLogin.forEach(credentials=>{

    describe.only(credentials.titulo,()=>{
        it('Logins',()=>{
            loginPage.visit();
            loginPage.validateLoginPage();

            cy.fixture(credentials.nombre).then(credentials =>{
                loginPage.login(credentials.email,credentials.password);
            })
            if(credentials.nombre === "credentials"){
                loginPage.validateErrorLogin();
            }
            else{
                loginPage.validateSuccessLogin();
            }
        })
    })

})

