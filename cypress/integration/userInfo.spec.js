describe('User Info Redux App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('should display the header', () => {
    cy.contains('h1', 'User Information');
  });

  it('should have name and email input fields', () => {
    cy.get('input[type="text"]').should('exist');
    cy.get('input[type="email"]').should('exist');
  });

  it('should update name field correctly', () => {
    cy.get('input[type="text"]').type('Thomas Edward Stark');
    cy.get('input[type="text"]').should('have.value', 'Thomas Edward Stark');
  });

  it('should update email field correctly', () => {
    cy.get('input[type="email"]').type('tonystark@starkindustries.com');
    cy.get('input[type="email"]').should('have.value', 'tonystark@starkindustries.com');
  });

  it('should display updated values in output section', () => {
    cy.get('input[type="text"]').type('Thomas Edward Stark');
    cy.get('input[type="email"]').type('tonystark@starkindustries.com');
    
    cy.get('.output').should('contain', 'Name - Thomas Edward Stark');
    cy.get('.output').should('contain', 'Email - tonystark@starkindustries.com');
  });
});