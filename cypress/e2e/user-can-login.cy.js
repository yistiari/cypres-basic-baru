describe('User can login to system', () => {
  //positive test case
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://localhost:8000/')
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    //select element html yang dibutuhkan 
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    //assert
    //select element html yang dibutuhkan
    //lakukan assertion sesuai test case
    cy.get('.nav-link > .d-sm-none').should("have.text", "Hi, SuperAdmin");
  });

    //negative test case 
    it('user cannot login with valid username and wrong password', () => {
      //arrange
      cy.visit('http://localhost:8000/');
      //act
      cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
      cy.get(':nth-child(3) > .form-control').type("password-salah");
      cy.get('.btn').click();
      //assert
      cy.get('.invalid-feedback').should(
        "have.text", 
        "These credentials do not match our records."
        );
      });
      it('user cannot login with invalid username and valid password', () => {
        //arrange
        cy.visit('http://localhost:8000/');
        //act
        cy.get(':nth-child(2) > .form-control').type("superadminada@gmail.com");
        cy.get(':nth-child(3) > .form-control').type("password");
        cy.get('.btn').click();
        //assert
        cy.get('.invalid-feedback').should(
          "have.text", 
          "These credentials do not match our records."
          );
      });
      it('user cannot login with empty username and correct password', () => {
        //arrange
        cy.visit('http://localhost:8000/');
        //act
        cy.get(':nth-child(3) > .form-control').type("password");
        cy.get('.btn').click();
        //assert
        cy.get('.invalid-feedback').should(
          "have.text", 
          "The email field is required."
          );
      });
      it('user cannot login with empty username and correct password', () => {
        //arrange
        cy.visit('http://localhost:8000/');
        //act
        cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
        cy.get('.btn').click();
        //assert
        cy.get('.invalid-feedback').should(
          "have.text", 
          "The password field is required."
          );
      });
    // negative test quiz
    it('user cannot log in because he forgot his password', () => {
      //arrange
      cy.visit('http://localhost:8000/');
      //act
      cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
      cy.get(':nth-child(3) > .form-control').type("malang");
      cy.get('.btn').click();
      //assert
      cy.get('.text-small').click();
    });
    });