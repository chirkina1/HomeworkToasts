describe('Homework Toasts', () => {
  it('passes', () => {

    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');

    cy.get('nb-card-header:contains("Material Light")');

    cy.get('nb-card-header:contains("Material Light")').click();

    cy.get('a.ng-tns-c141-19').click();

    cy.get('.menu-item.ng-tns-c141-23 > .ng-star-inserted > .menu-title').click();

    cy.get('.toggle-settings').click();

    cy.get('.nb-layout-two-column').click();

    cy.get('.toggle-settings').click();


    //first test with success and top-left

    cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button > nb-icon > svg > [data-name="Layer 2"] > g > rect').click();
    
    cy.get('#nb-option-25').click();

   cy.get('.row > :nth-child(1) > :nth-child(2) > .size-medium')
   .clear()
   .type('first toast')


   cy.get('form.ng-untouched > .form-group > .size-medium')
   .clear()
   .type('content of toast')


   cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button > nb-icon > svg > [data-name="Layer 2"] > g > rect').click()

   cy.get('#nb-option-33').click();


   cy.get('.row > :nth-child(1) > :nth-child(4) > .size-medium')
   .click()
   .clear()
   .type('1000')

   cy.get('nb-card-footer > .status-basic')
   .click()

   cy.get('.title')
   .should('have.text', 'Toast 2. first toast')


   cy.get('.message')
   .should('have.text', 'content of toast')


   cy.get('nb-toastr-container.ng-tns-c209-62 > .ng-tns-c209-62')
   .should('have.css', 'background-color', 'rgb(96, 175, 32)');


  cy.get('nb-toastr-container.ng-tns-c209-62 > .ng-tns-c209-62')
  .should('be.visible')

  //comment


  //let element = document.getElementById(".row > :nth-child(1) > :nth-child(4) > .size-medium");
  //let x = element.offsetLeft;
  //let y = element.offsetTop;



  //second test with info and bottom-right

  cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button > nb-icon > svg > [data-name="Layer 2"] > g > rect').click();
    
  cy.get('#nb-option-27').click();

 cy.get('.row > :nth-child(1) > :nth-child(2) > .size-medium')
 .clear()
 .type('second toast')


 cy.get('form.ng-valid > .form-group > .size-medium')
 .clear()
 .type('content of toast number 2')


 cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button > nb-icon > svg > [data-name="Layer 2"] > g > rect').click()

 cy.get('#nb-option-34').click();


 cy.get('.row > :nth-child(1) > :nth-child(4) > .size-medium')
 .click()
 .clear()
 .type('1000')

 cy.get('nb-card-footer > .status-basic')
 .click()

 cy.get('.title')
 .should('have.text', 'Toast 3. second toast')


 cy.get('.message')
 .should('have.text', 'content of toast number 2')


 cy.get('nb-toastr-container.ng-tns-c209-63 > .ng-tns-c209-63')
 .should('have.css', 'background-color', 'rgb(4, 149, 238)')


 cy.get('nb-toastr-container.ng-tns-c209-63 > .ng-tns-c209-63')
 .should('be.visible')



//third test with warning and top-end

cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button > nb-icon > svg > [data-name="Layer 2"] > g > rect').click();
    
cy.get('#nb-option-28').click();

cy.get('.row > :nth-child(1) > :nth-child(2) > .size-medium')
.clear()
.type('third toast')


cy.get('form.ng-valid > .form-group > .size-medium')
.clear()
.type('content of toast number 3')


cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button > nb-icon > svg > [data-name="Layer 2"] > g > rect').click()

cy.get('#nb-option-35').click();


cy.get('.row > :nth-child(1) > :nth-child(4) > .size-medium')
.click()
.clear()
.type('1000')

cy.get('nb-card-footer > .status-basic')
.click()

cy.get('.title')
.should('have.text', 'Toast 4. third toast')


cy.get('.message')
.should('have.text', 'content of toast number 3')


cy.get('nb-toastr-container.ng-tns-c209-64 > .ng-tns-c209-64')
.should('have.css', 'background-color', 'rgb(255, 159, 5)')


cy.get('nb-toastr-container.ng-tns-c209-64 > .ng-tns-c209-64')
    .should('be.visible')


//third test with warning and top-end

cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button > nb-icon > svg > [data-name="Layer 2"] > g > rect').click();
    
cy.get('#nb-option-26').click();

cy.get('.row > :nth-child(1) > :nth-child(2) > .size-medium')
.clear()
.type('fouth toast')


cy.get('form.ng-valid > .form-group > .size-medium')
.clear()
.type('content of toast number 4')


cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button > nb-icon > svg > [data-name="Layer 2"] > g > rect').click()

cy.get('#nb-option-36').click();


cy.get('.row > :nth-child(1) > :nth-child(4) > .size-medium')
.click()
.clear()
.type('10000000000')

cy.get('nb-card-footer > .status-basic')
.click()

cy.get('.title')
.should('have.text', 'Toast 5. fouth toast')


cy.get('.message')
.should('have.text', 'content of toast number 4')


cy.get('nb-toastr-container.ng-tns-c209-65 > .ng-tns-c209-65')
.should('have.css', 'background-color', 'rgb(176, 0, 32)')

cy.get('nb-toastr-container.ng-tns-c209-65 > .ng-tns-c209-65')
    .should('be.visible')



    //new comment

})
})