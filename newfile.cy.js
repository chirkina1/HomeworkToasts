///<reference types="cypress"/>

describe('Parametrized tests', () => {

describe('Test 1 title check', () => {

const paramTest = ({testData, expectedResult}) =>
      function () {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('nb-card-header:contains("Material Light")');

        cy.get('nb-card-header:contains("Material Light")').click();

        cy.get('a.ng-tns-c141-19').click();

        cy.get('.menu-item.ng-tns-c141-23 > .ng-star-inserted > .menu-title').click();

        cy.get('.toggle-settings').click();

        cy.get('.nb-layout-two-column').click();

        cy.get('.toggle-settings').click();

        cy.get('.row > :nth-child(1) > :nth-child(2) > .size-medium')
        .clear()
        .type(`${testData}`)
  
        // comment
  
        cy.get('nb-card-footer > .status-basic')
        .click()

        cy.get('.title')
        .should('have.text', `${expectedResult}`)
      }

it(`Checking title of toast`, paramTest({testData: 'first toast', expectedResult: 'Toast 2. first toast'}))
it('Checking title of toast', paramTest({testData: 'second toast', expectedResult: 'Toast 2. second toast'}))
it('Checking title of toast', paramTest({testData: 3, expectedResult: 'Toast 2. 3'}))
    
})


describe('Test 2 content check', () => {

  const paramTest = ({testData, expectedResult}) =>
        function () {
          cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
          cy.get('nb-card-header:contains("Material Light")');
  
          cy.get('nb-card-header:contains("Material Light")').click();
  
          cy.get('a.ng-tns-c141-19').click();
  
          cy.get('.menu-item.ng-tns-c141-23 > .ng-star-inserted > .menu-title').click();
  
          cy.get('.toggle-settings').click();
  
          cy.get('.nb-layout-two-column').click();
  
          cy.get('.toggle-settings').click();
  
          cy.get('form.ng-untouched > .form-group > .size-medium')
          .clear()
          .type(`${testData}`)
  
  
          cy.get('nb-card-footer > .status-basic')
          .click()
  
          cy.get('.message')
          .should('have.text', `${expectedResult}`)
        }
  
  it('Checking content of toast', paramTest({testData: 'content', expectedResult: 'content'}))
  it('Checking content of toast', paramTest({testData: 'second content', expectedResult: 'second content'}))
  it('Checking content of toast', paramTest({testData: 872, expectedResult: 872}))
      
  })



describe('Test 3 color check', () => {

    const paramTest = ({testData, expectedResult}) =>
          function () {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
            cy.get('nb-card-header:contains("Material Light")');
    
            cy.get('nb-card-header:contains("Material Light")').click();
    
            cy.get('a.ng-tns-c141-19').click();
    
            cy.get('.menu-item.ng-tns-c141-23 > .ng-star-inserted > .menu-title').click();
    
            cy.get('.toggle-settings').click();
    
            cy.get('.nb-layout-two-column').click();
    
            cy.get('.toggle-settings').click();
  

            cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button > nb-icon > svg > [data-name="Layer 2"] > g > rect').click()
    
            cy.get(`${testData}`).click();
    
            cy.get('nb-card-footer > .status-basic')
            .click()
    
            cy.get('nb-toastr-container.ng-tns-c209-62 > .ng-tns-c209-62')
            .should('have.css', 'background-color', `${expectedResult}`);
          }
    
    it('Checking color of toast', paramTest({testData: '#nb-option-33', expectedResult: 'rgb(96, 175, 32)'}))
    it('Checking color of toast', paramTest({testData: '#nb-option-34', expectedResult: 'rgb(4, 149, 238)'}))
    it('Checking color of toast', paramTest({testData: '#nb-option-35', expectedResult: 'rgb(255, 159, 5)'}))
        
    })



    describe('Test 4 position check', () => {

      const paramTest = ({testData, expectedResult}) =>
            function () {
              cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
              cy.get('nb-card-header:contains("Material Light")');
      
              cy.get('nb-card-header:contains("Material Light")').click();
      
              cy.get('a.ng-tns-c141-19').click();
      
              cy.get('.menu-item.ng-tns-c141-23 > .ng-star-inserted > .menu-title').click();
      
              cy.get('.toggle-settings').click();
      
              cy.get('.nb-layout-two-column').click();
      
              cy.get('.toggle-settings').click();

              cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button > nb-icon > svg > [data-name="Layer 2"] > g > rect').click();

              cy.get(`${testData}`).click();  
        
              cy.get('nb-card-footer > .status-basic')
              .click()

              cy.get('.row > :nth-child(1) > :nth-child(4) > .size-medium')
              .click()
              .clear()
              .type('1000000')

              cy.get('#cdk-overlay-1')
              .should(`${expectedResult}`)
            }
      
      it('Checking position of toast', paramTest({testData: '#nb-option-27', expectedResult: 'be.visible'}))
      it('Checking position of toast', paramTest({testData: '#nb-option-26', expectedResult: 'be.visible'}))
      it('Checking position of toast', paramTest({testData: '#nb-option-28', expectedResult: 'be.visible'}))
          
      })

})