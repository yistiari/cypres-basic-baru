describe('User can login system', () => {
  //positive test case
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://localhost:8000/');
    //cy.get('[data-id="email"]').type("superadmin@gmail.com");
    //cy.get('[data-id="password"]').type("password");
    //cy.get('[data-id="submit"]').click();
    //cy.get('[data-id="username"]').click();
    //cy.get('[data-id="logout-btn"]').click();
    /* ==== Generated with Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .form-control').clear('superadmin@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').clear('p');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  });
});