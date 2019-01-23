describe('loading the page',function(){
  it('Check connecting to live server',function(){
    cy.visit('http://127.0.0.1:3000/');
  });
});

describe('Problem 1',function(){
  it('Check that addNumbers function exists on the window object',function(){
    cy.window().then((win) => {
      expect(win.addNumbers).to.exist;
    });
  });
  it('Check that the addNumbers correctly sums the parameters provided',function(){
    cy.window().then((win) => {
      var addNumbers = win.addNumbers;
      expect(addNumbers(3,5)).to.equal(8);
      expect(addNumbers(13,7)).to.equal(20);
      expect(addNumbers(562,438)).to.equal(1000);
      expect(addNumbers(0,5)).to.equal(5);
      expect(addNumbers(5,5)).to.equal(10);
      expect(addNumbers(2.5,5.5)).to.equal(8);
      expect(addNumbers(1.3333,1.3333)).to.equal(2.6666);
      expect(addNumbers(-5,5)).to.equal(0);
      expect(addNumbers(-5,-5)).to.equal(-10);
    });
  });
  it('Check that the result of addNumbers has been displayed on the DOM',function(){
    cy.get('#problem-1').should('have.text','8');
  });
  context('BONUS CASES Problem 1',function(){
    it('BONUS: Check that addNumbers handles mixed data type parameters',function(){
      cy.window().then((win) => {
        var addNumbers = win.addNumbers;
        expect(addNumbers('2',2)).to.equal(4);
        expect(addNumbers(2,'2')).to.equal(4);
        expect(addNumbers('5.25',5.25)).to.equal(10.50);
        expect(addNumbers('2.0',2.0)).to.equal(4);
        expect(addNumbers('0.2','0.2')).to.equal(0.4);
        expect(addNumbers('-5','-5')).to.equal(-10);
      });
    });
  });
});

describe('Problem 2',function(){
  it('Check that the subtractNumbers function exists on the window object',function(){
    cy.window().then((win) => {
      expect(win.subtractNumbers).to.exist;
    });
  });
  it('Check that the subtractNumbers correctly subtracts the parameters provided',function(){
    cy.window().then((win) => {
      var subtractNumbers = win.subtractNumbers;
      expect(subtractNumbers(5,3)).to.equal(2);
      expect(subtractNumbers(55,50)).to.equal(5);
      expect(subtractNumbers(600,600)).to.equal(0);
      expect(subtractNumbers(0,5)).to.equal(-5);
      expect(subtractNumbers(5,0)).to.equal(5);
      expect(subtractNumbers(5.5,3.25)).to.equal(2.25);
      expect(subtractNumbers(3.6666,1.3333)).to.equal(2.3333);
      expect(subtractNumbers(-5,5)).to.equal(-10);
      expect(subtractNumbers(-5,-5)).to.equal(0);
    });
  });
  it('Check that the result of subtractNumbers has been displayed on the DOM',function(){
    cy.get('#problem-2').should('have.text','2');
  });
  context('BONUS CASES Problem 2',function(){
    it('BONUS: Check that subtractNumbers handles mixed data type parameters',function(){
      cy.window().then((win) => {
        var subtractNumbers = win.subtractNumbers;
        expect(subtractNumbers('2',2)).to.equal(0);
        expect(subtractNumbers(2,'2')).to.equal(0);
        expect(subtractNumbers('15.25',5.25)).to.equal(10);
        expect(subtractNumbers('6.0',2.0)).to.equal(4);
        expect(subtractNumbers('0.25','0.125')).to.equal(0.125);
        expect(subtractNumbers('-5','-5')).to.equal(0);
      });
    });
  });
});

describe('Problem 3',function(){
  it('Check that the showResultsInBody function exists on the window object',function(){
    cy.window().then((win) => {
      expect(win.showResultsInBody).to.exist;
    });
  });
  it('Check that the showResultsInBody function does not return a value',function(){
    cy.window().then((win) => {
      var showResultsInBody = win.showResultsInBody;
      expect(showResultsInBody(5)).to.equal(undefined);
    });
  });
  it('Check that the result of showResultsInBody has been displayed on the DOM',function(){
    cy.get('#problem-3').should('have.text','undefined');
  });
});

describe('Problem 4',function(){
  it('Check that the showResults function exists on the window object',function(){
    cy.window().then((win) => {
      expect(win.showResults).to.exist;
    });
  });
  it('Check that the showResults function returns the string',function(){
    cy.window().then((win) => {
      var showResults = win.showResults;
      expect(showResults(5)).to.equal('The result of your calculation is 5.');
    });
  });
  it('Check that the result of showResults has been displayed on the DOM',function(){
    cy.get('#problem-4').should('have.text','The result of your calculation is 5.');
  });
});

describe('Problem 5',function(){
  it('Check that multiplyNumbers function exists on the window object',function(){
    cy.window().then((win) => {
      expect(win.multiplyNumbers).to.exist;
    });
  });
  it('Check that the multiplyNumbers correctly multiplies the parameters provided',function(){
    cy.window().then((win) => {
      var multiplyNumbers = win.multiplyNumbers;
      expect(multiplyNumbers(3,5)).to.equal(15);
      expect(multiplyNumbers(13,0)).to.equal(0);
      expect(multiplyNumbers(200,400)).to.equal(80000);
      expect(multiplyNumbers(0,5)).to.equal(0);
      expect(multiplyNumbers(5,5)).to.equal(25);
      expect(multiplyNumbers(-5,5)).to.equal(-25);
      expect(multiplyNumbers(-5,-5)).to.equal(25);
    });
  });
  it('Check that the result of multiplyNumbers has been displayed on the DOM',function(){
    cy.get('#problem-5').should('have.text','50');
  });
  context('BONUS CASES Problem 5',function(){
    it('BONUS: Check that multiplyNumbers handles mixed data type parameters',function(){
      cy.window().then((win) => {
        var multiplyNumbers = win.multiplyNumbers;
        expect(multiplyNumbers('2',2)).to.equal(4);
        expect(multiplyNumbers(2,'2')).to.equal(4);
        expect(multiplyNumbers('-5',5)).to.equal(-25);
        expect(multiplyNumbers('5',-5)).to.equal(-25);
        expect(multiplyNumbers('-5','-5')).to.equal(25);
      });
    });
    it('BONUS 2: Check that multiplyNumbers handles floating point parameters(rounded to 3 decimal places)',function(){
      cy.window().then((win) => {
        var multiplyNumbers = win.multiplyNumbers;
        expect(multiplyNumbers(0.2,0.2)).to.equal(0.04);
        expect(multiplyNumbers(0.2,0.4)).to.equal(0.08);
        //If your wondering why this test case is failing
        //binary struggles to accurately reflect decimals
        //below is a simple explaination of whats happening
        //http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
        //If you really want to nerd out check out the link below(you will not be expected to know/understand any of this)
        //https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
      });
    });
  });
});

describe('Problem 6',function(){
  it('Check that divideNumbers function exists on the window object',function(){
    cy.window().then((win) => {
      expect(win.divideNumbers).to.exist;
    });
  });
  it('Check that the divideNumbers correctly divides the parameters provided',function(){
    cy.window().then((win) => {
      var divideNumbers = win.divideNumbers;
      expect(divideNumbers(15,5)).to.equal(3);
      expect(divideNumbers(13,0)).to.equal(Infinity);
      expect(divideNumbers(400,200)).to.equal(2);
      expect(divideNumbers(0,5)).to.equal(0);
      expect(divideNumbers(5,5)).to.equal(1);
      expect(divideNumbers(-5,5)).to.equal(-1);
      expect(divideNumbers(-5,-5)).to.equal(1);
    });
  });
  it('Check that the result of divideNumbers has been displayed on the DOM',function(){
    cy.get('#problem-6').should('have.text','5');
  });
  context('BONUS CASES Problem 6',function(){
    it('BONUS: Check that divideNumbers handles mixed data type parameters',function(){
      cy.window().then((win) => {
        var divideNumbers = win.divideNumbers;
        expect(divideNumbers('20',5)).to.equal(4);
        expect(divideNumbers(20,'5')).to.equal(4);
        expect(divideNumbers('-5',5)).to.equal(-1);
        expect(divideNumbers('5',-5)).to.equal(-1);
        expect(divideNumbers('-5','-5')).to.equal(1);
      });
    });
    it('BONUS 2: Check that divideNumbers handles floating point parameters(rounded to 3 decimal places)',function(){
      cy.window().then((win) => {
        var divideNumbers = win.divideNumbers;
        expect(divideNumbers(18.3,6.1)).to.equal(3);
        expect(divideNumbers(12.3,4.1)).to.equal(3);
        //If your wondering why this test case is failing
        //binary struggles to accurately reflect decimals
        //below is a simple explaination of whats happening
        //http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
        //If you really want to nerd out check out the link below(you will not be expected to know/understand any of this)
        //https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
      });
    });
  });
});

describe('Problem 7',function(){
  it('Check that result of showResults function call is correctly displayed on the DOM',function(){
    cy.get('#problem-7').should('have.text','The result of your calculation is 8.');
  });
});

describe('Problem 8',function(){
  it('Check that result of the equation is correctly displayed on the DOM',function(){
    cy.get('#problem-8').should('have.text','21');
  });
});

describe('Problem 9',function(){
  it('Check that result of the equation is correctly displayed on the DOM',function(){
    cy.get('#problem-9').should('have.text','The result of your calculation is 55.');
  });
});

describe('Challenge 1',function(){
  it('Check that addTheWorld function exists on the window object',function(){
    cy.window().then((win) => {
      expect(win.addTheWorld).to.exist;
    });
  });
  it('Check that addTheWorld function accurately adds any number of arugments',function(){
    cy.window().then((win) => {
      var addTheWorld = win.addTheWorld;
      expect(addTheWorld(25)).to.be.equal(25);
      expect(addTheWorld(25,25)).to.be.equal(50);
      expect(addTheWorld(25,30,5)).to.be.equal(60);
      expect(addTheWorld(25,-25,0)).to.be.equal(0);
      expect(addTheWorld(15,15,15,15,15,15,15,15)).to.be.equal(120);
    });
  });
  it('Check that the result of addTheWorld function is correctly displayed on the DOM',function(){
    cy.get('#challenge-11').should('have.text','15');
    cy.get('#challenge-12').should('have.text','20');
    cy.get('#challenge-13').should('have.text','25');
  });
  context('BONUS CASES Challenge 1',function(){
    it('Check that addTheWorld function handles mixed data types (round to 3 decimals when needed)',function(){
      cy.window().then((win) => {
        var addTheWorld = win.addTheWorld;
        expect(addTheWorld('25')).to.be.equal(25);
        expect(addTheWorld('25.5',25.5)).to.be.equal(51);
        expect(addTheWorld(25,'30',5)).to.be.equal(60);
        expect(addTheWorld('25','-25','0')).to.be.equal(0);
        expect(addTheWorld('15.2','15.2','15.2','15.2','15.2','15.2','15.2','15.2')).to.be.equal(121.6);
      });
    });
  });
});
